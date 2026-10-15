
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
// Home Page Components
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProcessSection from "./components/ProcessSection";
import IndustriesSection from "./components/IndustriesSection";
import CTASection from "./components/CTASection";

// Main Pages
import Services from "./pages/Services";
import Contact from "./pages/contact";
import Careers from "./pages/careers";
import Blogs from "./pages/Blogs";
import About from "./pages/About";

// Services Pages
import GapAssessment from "./pages/GapAssessment";
import PrivacyCompliance from "./pages/PrivacyCompliance";
import DataProtectionAdvisory from "./pages/DataProtectionAdvisory";

// DPDP Knowledge Pages
import DPDPGuide from "./pages/DPDPGuide";
import DPDPExplanation from "./pages/DPDPExplanation";

// Blog Article Pages
import BlogArticle from "./pages/BlogArticle";

// Legal Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

// Other Components
import WhatsAppButton from "./components/WhatsAppButton";
import PrivacyConsent from "./PrivacyConsent";

// Home Page
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

// Main App
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-white">
        {/* Navbar */}
        <Navbar />

        {/* Website Pages */}
        <main className="pt-20">
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/dashboard" element={<AdminDashboard />} />
            {/* Home */}
            <Route path="/" element={<Home />} />
<Route path="/blogs/:slug" element={<BlogArticle />} />
            {/* About Us */}
            <Route path="/about" element={<About />} />

            {/* Products & Services */}
            <Route path="/services" element={<Services />} />

            {/* DPDP Compliance */}
            <Route
              path="/services/dpdp-gap-assessment"
              element={<GapAssessment />}
            />

            {/* Privacy Compliance */}
            <Route
              path="/services/privacy-compliance"
              element={<PrivacyCompliance />}
            />

            {/* Data Protection Advisory */}
            <Route
              path="/services/data-protection-advisory"
              element={<DataProtectionAdvisory />}
            />

            {/* DPDP Act Guide */}
            <Route
              path="/dpdp-act-guide"
              element={<DPDPGuide />}
            />

            {/* DPDP Act Explanation */}
            <Route
              path="/dpdp-act-explanation"
              element={<DPDPExplanation />}
            />

            {/* Careers */}
            <Route path="/careers" element={<Careers />} />

            {/* Blogs & Updates */}
            <Route path="/blogs" element={<Blogs />} />

            {/* Individual Blog Articles */}
            <Route
              path="/blogs/:slug"
              element={<BlogArticle />}
            />

            {/* Contact Us */}
            <Route path="/contact" element={<Contact />} />

            {/* Privacy Policy */}
            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />

            {/* Terms & Conditions */}
            <Route
              path="/terms"
              element={<TermsConditions />}
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />

        {/* Privacy Consent Banner */}
        <PrivacyConsent />
      </div>
    </BrowserRouter>
  );
}

export default App;
