
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "https://polivexa.com",
  "https://www.polivexa.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS: " + origin));
    },
  })
);

app.use(express.json());


// Contact form database schema
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 30,
      default: "",
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

// Health checks
app.get("/", (req, res) => {
  res.json({ message: "Polivexa Backend is Running" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Contact form submission
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !message.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      (phone != null && typeof phone !== "string")
    ) {
      return res.status(400).json({
        message: "Please enter valid name, email and message.",
      });
    }

    const savedContact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      phone: typeof phone === "string" ? phone.trim() : "",
      message: message.trim(),
    });

    return res.status(201).json({
      success: true,
      id: savedContact._id,
      message:
        "Thank you for contacting us! We have received your message and will connect with you soon.",
    });
  } catch (error) {
    console.error("Contact submission error:", error.message);

    return res.status(500).json({
      message: "Unable to send your message right now. Please try again.",
    });
  }
});

// Start backend
async function startServer() {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing from backend/.env");
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
