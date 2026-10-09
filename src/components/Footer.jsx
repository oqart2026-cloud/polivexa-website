import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import polivexaLogo from "../assets/polivexa-logo.png";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <img
              src={polivexaLogo}
              alt="Polivexa"
              className="h-12 w-auto object-contain"
            />

            <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
              Polivexa Solution Private Limited helps organizations build
              practical privacy and data protection frameworks aligned with
              evolving data protection requirements.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Talk to an Expert
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a href="/" className="text-sm text-slate-400 transition hover:text-cyan-300">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="text-sm text-slate-400 transition hover:text-cyan-300">
                  About Us
                </a>
              </li>

              <li>
                <a href="/services" className="text-sm text-slate-400 transition hover:text-cyan-300">
                  Products & Services
                </a>
              </li>

              <li>
                <a href="/careers" className="text-sm text-slate-400 transition hover:text-cyan-300">
                  Careers
                </a>
              </li>

              <li>
                <a href="/blogs" className="text-sm text-slate-400 transition hover:text-cyan-300">
                  Blogs & Updates
                </a>
              </li>

              <li>
                <a href="/contact" className="text-sm text-slate-400 transition hover:text-cyan-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a href="/services" className="text-sm text-slate-400 transition hover:text-cyan-300">
                  DPDP Compliance
                </a>
              </li>

              <li>
                <a href="/services" className="text-sm text-slate-400 transition hover:text-cyan-300">
                  Privacy Compliance
                </a>
              </li>

              <li>
                <a href="/services" className="text-sm text-slate-400 transition hover:text-cyan-300">
                  Data Protection Advisory
                </a>
              </li>

              <li>
                <a href="/services" className="text-sm text-slate-400 transition hover:text-cyan-300">
                  Policy & Documentation
                </a>
              </li>

              <li>
                <a href="/services" className="text-sm text-slate-400 transition hover:text-cyan-300">
                  Data Mapping & Review
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-6">

              {/* Email */}
              <div className="flex gap-3">
                <Mail
                  size={19}
                  className="mt-1 shrink-0 text-cyan-300"
                />

                <div>
                  <p className="text-xs text-slate-500">Email</p>

                  <a
                    href="mailto:polivexa2026@gmail.com"
                    className="mt-1 block text-sm text-slate-300 transition hover:text-cyan-300"
                  >
                    polivexa2026@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone
                  size={19}
                  className="mt-1 shrink-0 text-cyan-300"
                />

                <div>
                  <p className="text-xs text-slate-500">Phone</p>

                  <a
                    href="tel:+918765009955"
                    className="mt-1 block text-sm text-slate-300 transition hover:text-cyan-300"
                  >
                    +91 8765009955
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-cyan-300"
                />

                <div>
                  <p className="text-xs text-slate-500">Office</p>

                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Tech Zone IV, Tower-3,
                    <br />
                    B-603, Greater Noida West,
                    <br />
                    Uttar Pradesh – 201318
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Polivexa Solution Private Limited.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="text-sm text-slate-500 transition hover:text-cyan-300"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-sm text-slate-500 transition hover:text-cyan-300"
            >
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;