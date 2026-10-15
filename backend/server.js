
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "https://polivexa.com",
  "https://www.polivexa.com",
];

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error("Origin not allowed by CORS"));
  },
}));

app.use(express.json({ limit: "20kb" }));

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
    phone: { type: String, trim: true, maxlength: 30, default: "" },
    service: { type: String, trim: true, maxlength: 100, default: "General Enquiry" },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
    status: {
      type: String,
      enum: ["New", "Contacted", "Closed"],
      default: "New",
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

app.get("/", (req, res) => {
  res.json({ message: "Polivexa Backend is Running" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { message: "Too many requests. Please try again later." },
});

app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const { name, email, phone, message, service } = req.body || {};

    if (
      typeof name !== "string" ||
      name.trim().length < 2 ||
      name.trim().length > 100 ||
      typeof email !== "string" ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      typeof message !== "string" ||
      message.trim().length < 5 ||
      message.trim().length > 5000 ||
      (phone != null && (typeof phone !== "string" || phone.length > 30)) ||
      (service != null && (typeof service !== "string" || service.length > 100))
    ) {
      return res.status(400).json({
        message: "Please enter valid contact details.",
      });
    }

    const savedContact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      phone: typeof phone === "string" ? phone.trim() : "",
      service: typeof service === "string" && service.trim()
        ? service.trim()
        : "General Enquiry",
      message: message.trim(),
    });

    res.status(201).json({
      success: true,
      id: savedContact._id,
      message: "Thank you! We have received your message.",
    });
  } catch (error) {
    console.error("Contact submission error:", error.message);
    res.status(500).json({ message: "Unable to submit your message." });
  }
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { message: "Too many login attempts. Try again later." },
});

app.post("/api/admin/login", loginLimiter, async (req, res) => {
  try {
    const { username, password } = req.body || {};

    if (typeof username !== "string" || typeof password !== "string") {
      return res.status(400).json({ message: "Invalid login details." });
    }

    const validUsername = username === process.env.ADMIN_USERNAME;
    const validPassword = await bcrypt.compare(
      password,
      process.env.ADMIN_PASSWORD_HASH
    );

    if (!validUsername || !validPassword) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "2h", algorithm: "HS256" }
    );

    res.json({ success: true, token });
  } catch (error) {
    console.error("Admin login error:", error.message);
    res.status(500).json({ message: "Login failed." });
  }
});

function requireAdmin(req, res, next) {
  const authorization = req.headers.authorization || "";
  const token = authorization.startsWith("Bearer ")
    ? authorization.slice(7)
    : null;

  if (!token) {
    return res.status(401).json({ message: "Login required." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ["HS256"],
    });

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied." });
    }

    next();
  } catch {
    res.status(401).json({ message: "Session expired. Please log in again." });
  }
}

app.get("/api/admin/contacts", requireAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(1000)
      .lean();

    res.json({ success: true, contacts });
  } catch (error) {
    console.error("Contacts fetch error:", error.message);
    res.status(500).json({ message: "Unable to load enquiries." });
  }
});

app.patch("/api/admin/contacts/:id/status", requireAdmin, async (req, res) => {
  try {
    const { status } = req.body || {};

    if (!["New", "Contacted", "Closed"].includes(status)) {
      return res.status(400).json({ message: "Invalid status." });
    }

    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid enquiry ID." });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({ message: "Enquiry not found." });
    }

    res.json({ success: true, contact });
  } catch (error) {
    console.error("Status update error:", error.message);
    res.status(500).json({ message: "Unable to update status." });
  }
});

async function startServer() {
  const required = [
    "MONGO_URI",
    "ADMIN_USERNAME",
    "ADMIN_PASSWORD_HASH",
    "JWT_SECRET",
  ];

  for (const key of required) {
    if (!process.env[key]) {
      throw new Error(`${key} is missing from backend/.env`);
    }
  }

  if (process.env.JWT_SECRET.length < 32) {
    throw new Error("JWT_SECRET must be at least 32 characters.");
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB Connected");

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Polivexa backend running on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Backend startup failed:", error.message);
  process.exit(1);
});
