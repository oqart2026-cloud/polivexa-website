import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import polivexaLogo from "../assets/polivexa-logo.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const navLinkClass =
    "rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-600 hover:shadow-sm";

  const mobileLinkClass =
    "rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-cyan-50 hover:text-cyan-600";

  const mobileSubLinkClass =
    "block rounded-lg px-4 py-3 text-sm text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-600";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-6"
          onClick={closeMenus}
        >
          <img
            src={polivexaLogo}
            alt="Polivexa"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link to="/" className={navLinkClass}>
            Home
          </Link>

          <Link to="/about" className={navLinkClass}>
            About Us
          </Link>

          {/* Desktop Products & Services Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              className={`flex items-center gap-1 ${navLinkClass}`}
            >
              Products & Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-4 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                <Link
                  to="/services"
                  onClick={closeMenus}
                  className={mobileSubLinkClass}
                >
                  All Products & Services
                </Link>

                <Link
                  to="/services/dpdp-gap-assessment"
                  onClick={closeMenus}
                  className={mobileSubLinkClass}
                >
                  DPDP Compliance
                </Link>

                <Link
                  to="/services/privacy-compliance"
                  onClick={closeMenus}
                  className={mobileSubLinkClass}
                >
                  Privacy Compliance
                </Link>

                <Link
                  to="/services/data-protection-advisory"
                  onClick={closeMenus}
                  className={mobileSubLinkClass}
                >
                  Data Protection Advisory
                </Link>
              </div>
            )}
          </div>

          <Link to="/careers" className={navLinkClass}>
            Careers
          </Link>

          <Link to="/blogs" className={navLinkClass}>
            Blogs & Updates
          </Link>

          <Link to="/contact" className={navLinkClass}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setServicesOpen(false);
          }}
          className="rounded-lg p-2 text-slate-700 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-2">
            {/* Home */}
            <Link
              to="/"
              onClick={closeMenus}
              className={mobileLinkClass}
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              onClick={closeMenus}
              className={mobileLinkClass}
            >
              About Us
            </Link>

            {/* Mobile Products & Services Dropdown */}
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-600"
              >
                <span>Products & Services</span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="ml-4 mt-1 flex flex-col border-l-2 border-cyan-200 pl-3">
                  <Link
                    to="/services"
                    onClick={closeMenus}
                    className={mobileSubLinkClass}
                  >
                    All Products & Services
                  </Link>

                  <Link
                    to="/services/dpdp-gap-assessment"
                    onClick={closeMenus}
                    className={mobileSubLinkClass}
                  >
                    DPDP Compliance
                  </Link>

                  <Link
                    to="/services/privacy-compliance"
                    onClick={closeMenus}
                    className={mobileSubLinkClass}
                  >
                    Privacy Compliance
                  </Link>

                  <Link
                    to="/services/data-protection-advisory"
                    onClick={closeMenus}
                    className={mobileSubLinkClass}
                  >
                    Data Protection Advisory
                  </Link>
                </div>
              )}
            </div>

            {/* Careers */}
            <Link
              to="/careers"
              onClick={closeMenus}
              className={mobileLinkClass}
            >
              Careers
            </Link>

            {/* Blogs */}
            <Link
              to="/blogs"
              onClick={closeMenus}
              className={mobileLinkClass}
            >
              Blogs & Updates
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={closeMenus}
              className="mt-2 rounded-lg bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
