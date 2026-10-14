import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProcessSection from "./components/ProcessSection";
import IndustriesSection from "./components/IndustriesSection";
import CTASection from "./components/CTASection";

import Services from "./pages/Services";
import Contact from "./pages/contact";
import Careers from "./pages/careers";
import Blogs from "./pages/Blogs";
import GapAssessment from "./pages/GapAssessment";
import PrivacyCompliance from "./pages/PrivacyCompliance";
import DataProtectionAdvisory from "./pages/DataProtectionAdvisory";
import About from "./pages/About";

// Legal Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

// NEW: DPDP Act Guide Page
import DPDPGuide from "./pages/DPDPGuide";
import DPDPExplanation from "./pages/DPDPExplanation";

import WhatsAppButton from "./components/WhatsAppButton";
import PrivacyConsent from "./PrivacyConsent";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-white">
        <Navbar />

        <main className="pt-20">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* About Page */}
            <Route path="/about" element={<About />} />

            {/* Services Pages */}
            <Route path="/services" element={<Services />} />

            <Route
              path="/services/dpdp-gap-assessment"
              element={<GapAssessment />}
            />

            <Route
              path="/services/privacy-compliance"
              element={<PrivacyCompliance />}
            />

            <Route
              path="/services/data-protection-advisory"
              element={<DataProtectionAdvisory />}
            />

            {/* NEW: DPDP Act Guide */}
            <Route path="/dpdp-act-guide" element={<DPDPGuide />} />

            <Route path="/dpdp-act-explanation" element={<DPDPExplanation />} />

            {/* Careers Page */}
            <Route path="/careers" element={<Careers />} />

            {/* Blogs Page */}
            <Route path="/blogs" element={<Blogs />} />

            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />

            {/* Privacy Policy Page */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* Terms & Conditions Page */}
            <Route path="/terms" element={<TermsConditions />} />
          </Routes>
        </main>

        <Footer />

        <WhatsAppButton />

        <PrivacyConsent />
      </div>
    </BrowserRouter>
  );
}

export default App;
