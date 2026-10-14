
import React from "react";
import { ShieldCheck, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Polivexa Solution Private Limited (“Polivexa”, “Company”, “we”, “our” or “us”) is committed to protecting the privacy and confidentiality of the personal and business information entrusted to us.",
      "This Privacy Policy explains how we collect, use, store, process, disclose and protect information when you visit our website, contact us, engage our services, or communicate with our team.",
      "By accessing our website or using our services, you acknowledge that you have read this Privacy Policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    groups: [
      {
        label: "A. Personal Information",
        items: [
          "Full name, designation.",
          "Business email address and contact number.",
          "Company or organisation name.",
          "Business address and communication details.",
          "Information submitted through enquiry forms, consultation requests or other communications.",
        ],
      },
      {
        label: "B. Business and Organisational Information",
        items: [
          "Company registration and incorporation documents.",
          "GST registration details, PAN and other business identification information, where required.",
          "Business licences, certificates, policies and statutory records.",
          "Organisational information required for compliance assessments or certification applications.",
          "Documents and records provided for audits, verification, consultancy or regulatory support.",
        ],
      },
      {
        label: "C. Technical Information",
        paragraphs: [
          "When you visit our website, we may collect certain technical information, including IP address, browser type, device information, pages visited, access timestamps and website usage data, subject to the applicable technical configuration and consent requirements.",
        ],
      },
      {
        label: "D. Payment Information",
        paragraphs: [
          "We may collect transaction references, payment status, invoice details and billing information. Where payments are processed through third-party payment gateways, payment credentials may be handled directly by those providers.",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    intro:
      "Polivexa may use the information collected for the following purposes:",
    items: [
      "Responding to enquiries and consultation requests.",
      "Providing compliance, certification, documentation and advisory services.",
      "Preparing, reviewing and processing applications, reports and supporting documents.",
      "Communicating with clients regarding project status, requirements, renewals and deliverables.",
      "Managing client onboarding, contracts, invoices and payments.",
      "Coordinating with certification bodies, auditors, consultants, regulators and other relevant authorities where necessary for the agreed services.",
      "Maintaining business records and fulfilling applicable legal obligations.",
      "Improving our website, service quality, internal processes and customer experience.",
      "Sending service-related notifications and, where permitted, promotional communications.",
    ],
    outro:
      "We will not use personal information for purposes unrelated to the stated purpose unless permitted by applicable law or supported by the necessary consent.",
  },
  {
    title: "4. Legal Basis for Processing",
    intro:
      "We process personal data where permitted under applicable law, including where:",
    items: [
      "You have provided valid consent.",
      "Processing is necessary to provide services requested by you.",
      "Processing is necessary to fulfil contractual or legal obligations.",
      "Processing is otherwise permitted under applicable law.",
    ],
    outro:
      "Where consent is the basis for processing, you may withdraw it, subject to applicable legal requirements and the consequences for services that depend on that information.",
  },
  {
    title: "5. Sharing and Disclosure of Information",
    paragraphs: [
      "We do not sell your personal information to third parties.",
    ],
    intro: "We may share relevant information with:",
    items: [
      "Certification bodies and accreditation-related organisations, where required for your application or engagement.",
      "Auditors, consultants, technical experts and professional service providers involved in delivering our services.",
      "Technology providers, hosting providers, communication platforms and payment processors.",
      "Government departments, regulators, courts or law enforcement authorities when required or legally permitted.",
      "Other parties with your consent or as necessary for a legitimate, lawful business purpose connected with the services requested.",
    ],
    outro:
      "We aim to limit such sharing to information reasonably necessary for the relevant purpose.",
  },
  {
    title: "6. Confidentiality of Client Documents",
    paragraphs: [
      "Polivexa understands that compliance and certification engagements may involve confidential business records and sensitive organisational information.",
      "We take reasonable measures to protect client documents and restrict access to authorised personnel and service providers who require access for legitimate business purposes.",
      "Client documents will not be intentionally disclosed or used for unrelated purposes without appropriate authorisation, except where disclosure is required or permitted by law.",
      "Where applicable, additional confidentiality obligations may be governed by a separate agreement, engagement letter or non-disclosure agreement.",
    ],
  },
  {
    title: "7. Data Security",
    paragraphs: [
      "We implement reasonable technical, organisational and administrative safeguards designed to protect information against unauthorised access, disclosure, alteration, loss or misuse.",
      "These measures may include access restrictions, controlled document sharing, secure storage practices and internal confidentiality procedures.",
      "However, no method of electronic transmission or storage can be guaranteed to be completely secure. We cannot guarantee absolute security of information transmitted over the internet.",
    ],
  },
  {
    title: "8. Data Retention",
    intro:
      "We retain personal and business information only for as long as reasonably necessary to:",
    items: [
      "Provide the agreed services.",
      "Complete certification or compliance-related processes.",
      "Maintain contractual, financial and business records.",
      "Meet applicable legal, regulatory and audit requirements.",
      "Resolve disputes and enforce agreements.",
    ],
    outro:
      "When information is no longer required, we will take reasonable steps to delete, anonymise or securely dispose of it, subject to applicable legal retention requirements.",
  },
  {
    title: "9. Cookies and Website Analytics",
    paragraphs: [
      "Our website may use cookies and similar technologies to support website functionality, understand visitor behaviour, improve performance and maintain security.",
      "You may manage cookies through your browser settings and, where available, our website's cookie preference controls.",
      "Disabling certain cookies may affect some website features.",
    ],
  },
  {
    title: "10. Your Privacy Rights",
    intro:
      "Subject to applicable law, you may have the right to:",
    items: [
      "Request information about the personal data we process.",
      "Request correction or updating of inaccurate information.",
      "Request deletion of personal data where legally applicable.",
      "Withdraw consent where processing is based on consent.",
      "Raise a grievance or privacy-related complaint.",
      "Nominate another individual to exercise applicable rights in circumstances permitted by law.",
    ],
    outro:
      "Requests may be subject to identity verification, legal obligations and applicable exceptions.",
  },
  {
    title: "11. Third-Party Websites",
    paragraphs: [
      "Our website may contain links to third-party websites, portals, certification bodies or service providers. We do not control their privacy practices or content.",
      "You should review the privacy policies of those third parties before submitting information to them.",
    ],
  },
  {
    title: "12. Children's Privacy",
    paragraphs: [
      "Our services are intended primarily for businesses, organisations and adults acting in a professional capacity. We do not knowingly collect children's personal data for independent commercial purposes unless permitted by applicable law and subject to the necessary safeguards.",
    ],
  },
  {
    title: "13. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices or legal requirements.",
      "The revised version will be published on our website with an updated “Last Updated” date.",
    ],
  },
  {
    title: "14. Contact and Grievance Redressal",
    intro:
      "For privacy-related questions, requests or complaints, please contact:",
    items: [
      "Company: Polivexa Solution Private Limited",
      "Email: Support@polivexa.com",
      "Address: B-603, Tower-3, Plot No. 17, Tech Zone IV, Greater Noida West (Noida Extension), Uttar Pradesh 201318, India.",
      "Phone: 8765009955",
    ],
    outro:
      "We will review and respond to requests in accordance with applicable legal requirements.",
  },
];

function LegalSection({ section, index }) {
  return (
    <section
      id={`section-${index + 1}`}
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8"
    >
      <div className="mb-5 flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-sm font-bold text-cyan-700">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">
            Policy Section
          </p>

          <h2 className="text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
            {section.title.replace(/^\d+\.\s*/, "")}
          </h2>
        </div>
      </div>

      <div className="space-y-4 text-[15px] leading-8 text-slate-600 sm:text-base">
        {section.paragraphs?.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}

        {section.intro && <p>{section.intro}</p>}

        {section.items && (
          <ul className="space-y-3 pl-1">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {section.groups?.map((group, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-100 bg-slate-50/80 p-5"
          >
            <h3 className="mb-3 text-base font-bold text-slate-800">
              {group.label}
            </h3>

            {group.paragraphs?.map((paragraph, j) => (
              <p key={j} className="mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}

            {group.items && (
              <ul className="space-y-3">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {section.outro && (
          <p className="border-l-2 border-cyan-500 pl-4 text-slate-700">
            {section.outro}
          </p>
        )}
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header: App.jsx already provides navbar spacing */}
      <header className="relative overflow-hidden bg-slate-950 px-5 py-14 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            <ShieldCheck size={16} />
            Privacy & Data Protection
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Privacy <span className="text-cyan-400">Policy</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Learn how Polivexa Solution Private Limited collects,
            uses, protects and manages information entrusted to us.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              Effective Date: 1-10-2026
            </span>

            <span className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              Last Updated: 1-10-2026
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-5 py-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10 lg:py-14">
        {/* Section navigation */}
        <aside className="lg:sticky lg:top-28">
          <nav
            aria-label="Privacy Policy sections"
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              On This Page
            </p>

            <div className="max-h-[55vh] space-y-1 overflow-y-auto pr-1">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#section-${index + 1}`}
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-800"
                >
                  <span className="font-bold text-cyan-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>
                    {section.title.replace(/^\d+\.\s*/, "")}
                  </span>
                </a>
              ))}
            </div>
          </nav>

          <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-white">
            <ShieldCheck size={25} className="mb-3 text-cyan-400" />

            <h3 className="text-lg font-bold">
              Privacy Questions?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Our team is available to assist with privacy-related
              enquiries and requests.
            </p>

            <a
              href="mailto:support@polivexa.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Contact Our Team
              <ArrowUpRight size={16} />
            </a>
          </div>
        </aside>

        {/* Policy sections */}
        <div className="min-w-0 space-y-6">
          <div className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-6 sm:p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-cyan-700">
              Our Commitment
            </p>

            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Your privacy matters to us.
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              This page explains our privacy practices in a clear,
              structured format. Please review the sections below
              to understand how information is handled.
            </p>
          </div>

          {sections.map((section, index) => (
            <LegalSection
              key={section.title}
              section={section}
              index={index}
            />
          ))}

          {/* Contact panel */}
          <div className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Get In Touch
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Contact & Grievance Redressal
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              For questions or requests relating to this Privacy
              Policy, contact Polivexa Solution Private Limited.
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="mailto:support@polivexa.com"
                className="flex items-center gap-3 text-sm text-slate-200 hover:text-cyan-300"
              >
                <Mail size={18} className="shrink-0 text-cyan-400" />
                support@polivexa.com
              </a>

              <a
                href="tel:+918765009955"
                className="flex items-center gap-3 text-sm text-slate-200 hover:text-cyan-300"
              >
                <Phone size={18} className="shrink-0 text-cyan-400" />
                +91 8765009955
              </a>

              <div className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-cyan-400"
                />

                <span>
                  B-603, Tower-3, Plot No. 17, Tech Zone IV,
                  Greater Noida West (Noida Extension),
                  Uttar Pradesh 201318, India.
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-3">
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
