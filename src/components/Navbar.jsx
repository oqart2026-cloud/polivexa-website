import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import polivexaLogo from "../assets/polivexa-logo.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-6"
          onClick={() => {
            setMobileOpen(false);
            setServicesOpen(false);
          }}
        >
          <img
            src={polivexaLogo}
            alt="Polivexa"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className="text-sm font-medium text-slate-700 px-3 py-2 rounded-lg border border-transparent transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 hover:shadow-sm"
          >
            Home
          </Link>

          {/* About */}
          <Link
            to="/about"
            className="text-sm font-medium text-slate-700 px-3 py-2 rounded-lg border border-transparent transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 hover:shadow-sm"
          >
            About Us
          </Link>

          {/* Products & Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-700 px-3 py-2 rounded-lg border border-transparent transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 hover:shadow-sm"
            >
              Products & Services
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-4 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                {/* All Services */}
                <Link
                  to="/services"
                  onClick={() => setServicesOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-600"
                >
                  All Products & Services
                </Link>

               {/* DPDP Compliance */}
                 <Link
                   to="/services/dpdp-gap-assessment"
                   onClick={() => setServicesOpen(false)}
                   className="block rounded-lg px-4 py-3 text-sm text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-600"
                    >
                   DPDP Compliance
                   </Link>
                {/* Privacy Compliance */}
                <Link
                  to="/services/privacy-compliance"
                  onClick={() => setServicesOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-600"
                >
                  Privacy Compliance
                </Link>

                {/* Data Protection Advisory */}
                <Link
                  to="/services/data-protection-advisory"
                  onClick={() => setServicesOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-600"
                >
                  Data Protection Advisory
                </Link>
              </div>
            )}
          </div>

          {/* Careers */}
          <Link
            to="/careers"
            className="text-sm font-medium text-slate-700 px-3 py-2 rounded-lg border border-transparent transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 hover:shadow-sm"
          >
            Careers
          </Link>

          {/* Blogs */}
          <Link
            to="/blogs"
            className="text-sm font-medium text-slate-700 px-3 py-2 rounded-lg border border-transparent transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 hover:shadow-sm"
          >
            Blogs & Updates
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className="text-sm font-medium text-slate-700 px-3 py-2 rounded-lg border border-transparent transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 hover:shadow-sm"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-2">
            {/* Home */}
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-cyan-50"
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-cyan-50"
            >
              About Us
            </Link>

            {/* Services */}
            <Link
              to="/services"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-cyan-50"
            >
              Products & Services
            </Link>

            {/* Careers */}
            <Link
              to="/careers"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-cyan-50"
            >
              Careers
            </Link>

            {/* Blogs */}
            <Link
              to="/blogs"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-cyan-50"
            >
              Blogs & Updates
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
