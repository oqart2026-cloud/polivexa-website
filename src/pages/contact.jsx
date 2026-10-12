
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
} from "lucide-react";

function Contact() {
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (status === "loading") return;

    setStatus("loading");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      phone: formData.get("phone")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
    };

    try {
      const apiBaseUrl = (
        import.meta.env.VITE_API_URL ||
        "http://localhost:5000"
      ).replace(/\/+$/, "");

      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Your message could not be sent. Please try again."
        );
      }

      setStatus("success");
      setStatusMessage(
        "Thank you for contacting us! We have received your message and will connect with you soon."
      );

      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setStatus("error");
      setStatusMessage(
        error.message ||
          "Sorry, your message could not be sent. Please try again."
      );
    }
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pb-24 pt-40">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              CONTACT US
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              Let's Talk About Your
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Privacy Requirements
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Have questions about DPDP compliance, privacy processes or
              data protection? Connect with the Polivexa team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-semibold tracking-wider text-cyan-600">
                GET IN TOUCH
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                We're Here to Help
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-600">
                Whether you are looking to understand your privacy
                obligations, assess your current practices or strengthen
                your data protection framework, our team is ready to
                discuss your requirements.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                    <Mail className="text-cyan-600" size={23} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Email
                    </p>

                    <a
                      href="mailto:polivexa2026@gmail.com"
                      className="mt-1 block font-medium text-slate-900 hover:text-cyan-600"
                    >
                      polivexa2026@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                    <Phone className="text-cyan-600" size={23} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Phone
                    </p>

                    <a
                      href="tel:+918765009955"
                      className="mt-1 block font-medium text-slate-900 hover:text-cyan-600"
                    >
                      +91 8765009955
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                    <MapPin className="text-cyan-600" size={23} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Office
                    </p>

                    <p className="mt-1 font-medium leading-6 text-slate-900">
                      Tech Zone IV, Tower-3, B-603,
                      <br />
                      Greater Noida West,
                      <br />
                      Uttar Pradesh – 201318
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-slate-950 p-8 shadow-2xl md:p-10"
            >
              <h3 className="text-2xl font-bold text-white">
                Send Us a Message
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Tell us a little about your requirements and we'll get
                back to you.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Phone
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={30}
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    minLength={5}
                    maxLength={5000}
                    placeholder="Tell us about your requirements..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}

                  {status !== "loading" && <Send size={18} />}
                </button>

                {statusMessage && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`rounded-xl border p-4 text-sm leading-6 ${
                      status === "success"
                        ? "border-green-400/20 bg-green-400/10 text-green-300"
                        : "border-red-400/20 bg-red-400/10 text-red-300"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Looking to Strengthen Your Privacy Framework?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
            Start a conversation with Polivexa about your organization's
            data protection and privacy requirements.
          </p>

          <a
            href="mailto:polivexa2026@gmail.com"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:bg-cyan-600"
          >
            Email Us
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
