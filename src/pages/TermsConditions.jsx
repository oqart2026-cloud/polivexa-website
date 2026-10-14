
import React from "react";
import {
  FileText,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const sections = [
  {
    title: "1. Introduction and Acceptance",
    paragraphs: [
      "Welcome to Polivexa Solution Private Limited (“Polivexa”, “Company”, “we”, “our” or “us”).",
      "These Terms & Conditions govern your access to and use of our website, services, consultations, documentation, compliance assistance and certification-related support.",
      "By accessing our website, submitting an enquiry, placing an order or engaging our services, you agree to these Terms & Conditions. If you do not agree, please discontinue use of our website and services.",
    ],
  },
  {
    title: "2. Scope of Services",
    intro:
      "Polivexa provides business compliance, certification assistance, documentation and related professional support services, which may include:",
    items: [
      "Compliance consultancy and regulatory documentation.",
      "Assistance with ISO certification and management system documentation.",
      "Business registration and statutory documentation support, where offered.",
      "Preparation and review of policies, SOPs, manuals and compliance records.",
      "Assistance with certification applications and supporting documentation.",
      "Audit preparation, compliance assessments and gap analysis.",
      "Renewal coordination and compliance-related advisory services.",
      "Other business consulting and professional services agreed upon with the client.",
    ],
    outro:
      "The exact scope, deliverables, timelines and fees will be communicated through a quotation, proposal, engagement letter, service agreement or other written confirmation.",
  },
  {
    title: "3. Nature of Certification Services",
    paragraphs: [
      "Polivexa may assist clients in preparing for certification, completing documentation, coordinating applications and meeting applicable compliance requirements.",
      "Unless expressly authorised and legally entitled to do so, Polivexa does not itself issue, award or guarantee any third-party certification, accreditation, licence, registration or statutory approval.",
      "Final decisions regarding certification, accreditation, registration, inspection, audit outcomes and regulatory approvals rest with the relevant independent certification body, accreditation body, government department or competent authority.",
      "Our assistance does not constitute a guarantee of certification or approval.",
    ],
  },
  {
    title: "4. Client Responsibilities",
    intro: "Clients engaging Polivexa agree to:",
    items: [
      "Provide accurate, complete and up-to-date information.",
      "Submit genuine documents and records.",
      "Provide all documents reasonably required to deliver the agreed services.",
      "Review drafts, reports and applications within the agreed timelines.",
      "Cooperate with audits, inspections, verification and other applicable procedures.",
      "Ensure that their business operations comply with applicable laws and regulations.",
      "Pay the agreed fees within the specified payment period.",
      "Inform Polivexa promptly of any material changes affecting the engagement.",
    ],
    outro:
      "Polivexa shall not be responsible for delays, rejection or additional costs resulting from inaccurate information, incomplete documentation, non-cooperation or circumstances beyond its reasonable control.",
  },
  {
    title: "5. Fees and Payment Terms",
    paragraphs: [
      "The fees for services will be communicated through a quotation, proposal, invoice or written agreement.",
      "Unless otherwise agreed in writing:",
    ],
    items: [
      "Fees must be paid according to the agreed payment schedule.",
      "Applicable taxes will be charged as required by law.",
      "Additional work outside the agreed scope may attract additional charges.",
      "Third-party charges, including certification, audit, inspection, government or accreditation fees, will be identified separately where applicable.",
      "Work may be paused if payments remain overdue, subject to the applicable agreement and law.",
    ],
    outro:
      "Any advance payment, milestone payment or other commercial arrangement will be governed by the relevant quotation or service agreement.",
  },
  {
    title: "6. Service Delivery and Timelines",
    paragraphs: [
      "Polivexa will make reasonable efforts to deliver services within the timelines communicated to the client.",
      "Timelines may depend on document availability, client responses, project complexity, third-party processing, audit schedules and decisions by external authorities.",
      "Any timeline communicated for a certification or approval process is an estimate unless expressly guaranteed in writing. Polivexa is not responsible for delays caused by external authorities, certification bodies, accreditation bodies or other third parties beyond its reasonable control.",
    ],
  },
  {
    title: "7. Cancellation, Refunds and Termination",
    paragraphs: [
      "Clients may request cancellation of a service by submitting a written request through the official communication channel.",
    ],
    intro: "Refund eligibility will depend on:",
    items: [
      "The terms of the applicable quotation or service agreement.",
      "The work completed before cancellation.",
      "Any third-party fees already paid or committed.",
      "Any expressly agreed cancellation or refund conditions.",
      "Applicable consumer protection and other legal requirements.",
    ],
    outro:
      "Fees for completed services, delivered work or non-refundable third-party charges may not be refundable where legally permissible and where the applicable terms clearly provide for this. Polivexa may suspend or terminate an engagement for material breach, non-payment, submission of fraudulent documents, unlawful instructions or other legitimate reasons, subject to contractual obligations and applicable law. Any refund approved will be processed within the applicable contractual or statutory timeframe.",
  },
  {
    title: "8. Intellectual Property Rights",
    intro: "Unless otherwise agreed in writing:",
    items: [
      "Polivexa retains ownership of its pre-existing templates, methodologies, frameworks, tools, processes and proprietary materials.",
      "Upon full payment, clients receive the rights to use the final client-specific deliverables for the purposes agreed in the engagement.",
      "Clients may not resell, reproduce, distribute or commercially exploit Polivexa's proprietary materials without prior written permission.",
      "Clients retain ownership of the documents, information, logos and materials they provide to Polivexa.",
    ],
    outro:
      "Any transfer or licensing of intellectual property rights will be governed by the relevant written agreement.",
  },
  {
    title: "9. Confidentiality",
    paragraphs: [
      "Both Polivexa and the client shall take reasonable measures to protect confidential information exchanged during an engagement.",
      "Confidential information may include business records, financial information, technical documents, internal policies, operational data, client lists and unpublished commercial information.",
    ],
    intro:
      "Confidentiality obligations do not apply to information that:",
    items: [
      "Is publicly available without a breach of confidentiality.",
      "Was lawfully known to the receiving party before disclosure.",
      "Is independently developed without using the confidential information.",
      "Must be disclosed under applicable law or a valid legal order.",
    ],
    outro:
      "Where disclosure is legally required, the receiving party will, where legally permitted, provide appropriate notice to the disclosing party. Additional confidentiality requirements may be set out in a separate non-disclosure agreement.",
  },
  {
    title: "10. Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, Polivexa shall not be liable for indirect, incidental, special or consequential losses arising from the use of its website or services.",
    ],
    intro: "Polivexa shall not be responsible for:",
    items: [
      "Certification or approval decisions made by independent authorities.",
      "Regulatory changes occurring after advice or documentation has been provided.",
      "Incorrect or misleading information supplied by a client.",
      "Business losses arising from a client's failure to comply with applicable requirements.",
      "Delays caused by third-party organisations or circumstances beyond reasonable control.",
    ],
    outro:
      "Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by law. Any additional limitation of liability or financial cap must be expressly agreed in the applicable service agreement and remain legally enforceable.",
  },
  {
    title: "11. Disclaimer of Professional Advice",
    paragraphs: [
      "Information available on our website is provided for general informational purposes and does not constitute a substitute for advice tailored to your specific legal, financial, tax, technical or regulatory circumstances.",
      "Clients should seek advice from appropriately qualified professionals where required.",
      "The applicability of a particular certification or regulatory requirement depends on the client's business activities, location, industry and applicable legal framework.",
    ],
  },
  {
    title: "12. Website Use and Restrictions",
    intro: "You agree not to:",
    items: [
      "Use the website for unlawful or fraudulent purposes.",
      "Submit false, misleading or unauthorised information.",
      "Attempt to gain unauthorised access to our systems or data.",
      "Interfere with the website's security, operation or availability.",
      "Copy or misuse website content, trademarks or proprietary materials.",
      "Upload malicious software or content that may harm our systems or other users.",
    ],
    outro:
      "Polivexa reserves the right to restrict access where misuse or a security concern is identified.",
  },
  {
    title: "13. Third-Party Services",
    paragraphs: [
      "Our services may involve independent certification bodies, laboratories, auditors, consultants, government portals, payment providers and other third-party organisations.",
      "Such third parties may operate under their own terms, fees, timelines and policies. Polivexa does not control their independent decisions or guarantee their performance.",
      "Where relevant, clients are responsible for reviewing and complying with the applicable third-party requirements.",
    ],
  },
  {
    title: "14. Force Majeure",
    paragraphs: [
      "Polivexa shall not be held responsible for a failure or delay in performing its obligations to the extent caused by circumstances beyond its reasonable control, including natural disasters, public emergencies, government restrictions, internet or infrastructure failures, strikes or other unforeseen events.",
      "The affected party shall take reasonable steps to minimise the impact and resume performance when practicable.",
    ],
  },
  {
    title: "15. Amendments to Terms",
    paragraphs: [
      "Polivexa may revise these Terms & Conditions from time to time.",
      "Updated terms will be published on our website with a revised effective or last-updated date. Changes will apply prospectively, subject to applicable law and any existing agreement governing a particular engagement.",
    ],
  },
  {
    title: "16. Governing Law and Jurisdiction",
    paragraphs: [
      "These Terms & Conditions shall be governed by the laws of India.",
      "Subject to applicable law, the courts having competent jurisdiction at New Delhi shall have jurisdiction over disputes arising from these Terms & Conditions.",
      "Nothing in this clause limits any mandatory rights or remedies available under applicable law.",
    ],
  },
  {
    title: "17. Contact Information",
    intro:
      "For questions concerning these Terms & Conditions, please contact:",
    items: [
      "Company: Polivexa Solution Private Limited",
      "Email: support@polivexa.com",
      "Address: B-603, Tower-3, Plot No. 17, Tech Zone IV, Greater Noida West (Noida Extension), Uttar Pradesh 201318, India.",
      "Phone: 8765009955",
      "Website: www.polivexa.com",
    ],
  },
];

function LegalSection({ section, index }) {
  return (
    <section
      id={`terms-section-${index + 1}`}
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8"
    >
      <div className="mb-5 flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-sm font-bold text-cyan-700">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">
            Terms Section
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

        {section.outro && (
          <p className="border-l-2 border-cyan-500 pl-4 text-slate-700">
            {section.outro}
          </p>
        )}
      </div>
    </section>
  );
}

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-slate-950 px-5 py-14 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            <FileText size={16} />
            Legal Information
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Terms <span className="text-cyan-400">& Conditions</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Understand the terms governing your use of our website,
            professional services, consultations and compliance support.
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

      {/* Content */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-5 py-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10 lg:py-14">
        {/* Left navigation */}
        <aside className="lg:sticky lg:top-28">
          <nav
            aria-label="Terms and Conditions sections"
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              On This Page
            </p>

            <div className="max-h-[55vh] space-y-1 overflow-y-auto pr-1">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#terms-section-${index + 1}`}
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
            <FileText size={25} className="mb-3 text-cyan-400" />

            <h3 className="text-lg font-bold">
              Need Clarification?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Have questions about our terms or services?
              Our team is here to help.
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

        {/* Main sections */}
        <div className="min-w-0 space-y-6">
          <div className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-6 sm:p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-cyan-700">
              Important Information
            </p>

            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Clear terms. Transparent services.
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Please review these Terms & Conditions to understand
              the responsibilities, service conditions and legal
              provisions applicable to your engagement with Polivexa.
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
              Questions About Our Terms?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              Contact Polivexa Solution Private Limited for
              enquiries related to these Terms & Conditions.
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

          {/* Back to top */}
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
