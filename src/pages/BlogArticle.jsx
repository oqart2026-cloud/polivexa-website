
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  FileText,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

const articles = {
  "understanding-dpdp-compliance": {
    category: "DPDP COMPLIANCE",
    title: "Understanding DPDP Compliance",
    description:
      "A practical guide to India's Digital Personal Data Protection framework and the steps organizations can take to prepare for compliance.",
    icon: ShieldCheck,
    overview:
      "The Digital Personal Data Protection Act, 2023 establishes a legal framework for processing digital personal data in India. Organizations should understand their responsibilities, review existing data practices and prepare appropriate governance, security and operational controls.",
    sections: [
      {
        title: "What Is DPDP Compliance?",
        content:
          "DPDP compliance involves aligning personal data processing activities with the applicable provisions of India's Digital Personal Data Protection Act, 2023 and associated Rules. This includes understanding why personal data is collected, how it is processed, how it is protected and when it should be erased.",
      },
      {
        title: "Why DPDP Compliance Matters",
        content:
          "Organizations process personal data through websites, customer management systems, employee records, mobile applications and third-party services. A structured compliance approach helps organizations build accountability, strengthen privacy practices and prepare for applicable legal obligations.",
      },
      {
        title: "Understanding Personal Data",
        content:
          "Personal data means any data about an individual who is identifiable by or in relation to that data. Examples may include names, phone numbers, email addresses, customer records and identification details. Organizations should maintain visibility into the categories of personal data they handle.",
      },
      {
        title: "Consent and Permitted Processing",
        content:
          "Under the DPDP framework, personal data processing generally requires consent or must qualify under specified certain legitimate uses. Where consent is relied upon, organizations should prepare appropriate notices, identify clear processing purposes and provide applicable withdrawal mechanisms.",
      },
      {
        title: "Privacy Notices and Transparency",
        content:
          "Privacy notices help individuals understand the personal data being processed, the purposes involved and how they may exercise applicable rights. Organizations should review their notices to ensure they accurately reflect real processing practices.",
      },
      {
        title: "Security Safeguards",
        content:
          "Organizations should evaluate reasonable security safeguards, including access controls, authentication, encryption, monitoring, backups and incident response procedures. Security controls should reflect the nature of the information and the risks associated with processing.",
      },
      {
        title: "Rights of Data Principals",
        content:
          "The DPDP Act provides rights relating to access to information, correction and erasure, grievance redressal and nomination, subject to applicable provisions. Organizations should develop procedures for receiving, assessing and responding to relevant requests.",
      },
      {
        title: "Personal Data Breach Management",
        content:
          "Organizations should establish procedures for detecting, containing, investigating and responding to personal data breaches. Relevant teams should understand escalation responsibilities, documentation requirements and applicable notification obligations.",
      },
      {
        title: "Data Retention and Erasure",
        content:
          "Personal data should be retained according to relevant processing purposes and applicable legal requirements. Organizations should document retention periods and establish secure deletion processes for information that is no longer required.",
      },
      {
        title: "Third-Party and Vendor Management",
        content:
          "Cloud providers, payroll vendors, CRM platforms and other processors may handle personal data on behalf of organizations. Vendor oversight should include contractual controls, security reviews, defined responsibilities and appropriate incident escalation procedures.",
      },
      {
        title: "Practical Steps for DPDP Readiness",
        points: [
          "Identify personal data collected across the organization.",
          "Map processing purposes, systems and third-party recipients.",
          "Review consent practices and privacy notices.",
          "Assess existing security safeguards.",
          "Prepare rights request and grievance procedures.",
          "Review vendor contracts and processor arrangements.",
          "Develop breach response and data deletion processes.",
          "Train relevant employees and maintain compliance evidence.",
        ],
      },
      {
        title: "Conclusion",
        content:
          "DPDP readiness is an ongoing organizational effort. Understanding personal data flows, implementing practical safeguards and maintaining clear accountability can help organizations prepare for the requirements that apply to them. The Act and Rules have phased commencement dates, so current legal applicability should be verified.",
      },
    ],
  },

  "why-privacy-policies-matter": {
    category: "PRIVACY",
    title: "Why Privacy Policies Matter",
    description:
      "Understand how clear privacy documentation supports transparency, accountability and responsible personal data handling.",
    icon: FileText,
    overview:
      "A privacy policy communicates how an organization collects, uses, stores, shares and protects personal information. It helps individuals understand an organization's privacy practices and supports consistent internal governance.",
    sections: [
      {
        title: "What Is a Privacy Policy?",
        content:
          "A privacy policy is a document that describes an organization's personal data handling practices. It generally explains what information is collected, why it is processed, how it may be shared and how individuals can contact the organization about privacy concerns.",
      },
      {
        title: "Why Privacy Policies Are Important",
        content:
          "Privacy policies help organizations communicate their practices transparently. They can reduce uncertainty, improve customer understanding and create a reference point for reviewing internal processes.",
      },
      {
        title: "Building Customer Trust",
        content:
          "People are more likely to understand an organization's approach to privacy when explanations are clear and accessible. A well-written policy demonstrates transparency, but trust also depends on whether the organization actually follows its published practices.",
      },
      {
        title: "Explaining Personal Data Collection",
        content:
          "Organizations should explain relevant categories of personal data collected through websites, applications, forms, customer interactions and business operations. Descriptions should reflect the actual information collected rather than generic assumptions.",
      },
      {
        title: "Communicating Processing Purposes",
        content:
          "A useful privacy policy explains why information is needed. Purposes may include responding to enquiries, delivering services, managing accounts, providing support or meeting applicable legal obligations.",
      },
      {
        title: "Explaining Data Sharing",
        content:
          "Organizations may use service providers for hosting, communications, analytics, customer support or other operational activities. Privacy documentation should accurately describe relevant sharing practices and the safeguards used where appropriate.",
      },
      {
        title: "Privacy Policy vs Privacy Notice",
        content:
          "A privacy policy often provides a broad description of an organization's privacy practices. A privacy notice communicates information relevant to particular processing activities. Under applicable DPDP provisions, organizations must consider specific statutory notice requirements rather than assuming that a general website policy is sufficient.",
      },
      {
        title: "Data Retention and Security",
        content:
          "Privacy documentation should explain relevant retention practices and describe security safeguards at an appropriate level. Organizations should avoid making promises that their operational controls cannot support.",
      },
      {
        title: "Rights and Grievance Mechanisms",
        content:
          "Individuals should be able to locate information about applicable privacy rights and relevant contact or grievance channels. These mechanisms should be supported by internal procedures for handling requests.",
      },
      {
        title: "Common Privacy Policy Mistakes",
        points: [
          "Copying another organization's policy without customization.",
          "Using vague or misleading descriptions of data use.",
          "Failing to explain relevant third-party sharing.",
          "Publishing outdated contact information.",
          "Making security promises that cannot be verified.",
          "Not reviewing the policy after business changes.",
        ],
      },
      {
        title: "Best Practices for Privacy Documentation",
        points: [
          "Use clear headings and understandable language.",
          "Describe actual collection and processing practices.",
          "Explain relevant purposes and sharing arrangements.",
          "Make privacy contact details easy to find.",
          "Align public statements with internal processes.",
          "Review documentation periodically.",
        ],
      },
      {
        title: "Conclusion",
        content:
          "A good privacy policy is more than a website document. It supports transparency and helps organizations communicate responsible data handling. Its value depends on accuracy, accessibility and consistency with actual business practices.",
      },
    ],
  },

  "data-protection-framework": {
    category: "DATA PROTECTION",
    title: "Building a Stronger Data Protection Framework",
    description:
      "Explore practical measures organizations can use to improve data governance, security and privacy management.",
    icon: BookOpen,
    overview:
      "A data protection framework brings together governance, policies, technical safeguards, operational procedures and continuous monitoring. Its purpose is to help organizations manage personal information responsibly throughout its lifecycle.",
    sections: [
      {
        title: "What Is a Data Protection Framework?",
        content:
          "A data protection framework is a structured approach to managing personal information. It connects organizational responsibilities, documented policies, technical safeguards and everyday operational practices.",
      },
      {
        title: "Why Organizations Need a Framework",
        content:
          "Personal information may exist across many departments, applications and service providers. Without a coordinated approach, organizations can experience inconsistent practices, unclear ownership and avoidable security or privacy risks.",
      },
      {
        title: "Establishing Data Governance",
        content:
          "Data governance defines responsibility for personal information and related decisions. Organizations should identify relevant owners, establish reporting arrangements and document how privacy and security issues are escalated.",
      },
      {
        title: "Creating a Personal Data Inventory",
        content:
          "A personal data inventory identifies the categories of information processed, the systems in which it is stored, the purposes for processing and the relevant internal or external recipients. This information provides a foundation for risk assessment and compliance planning.",
      },
      {
        title: "Understanding Data Lifecycle Management",
        content:
          "Data lifecycle management addresses personal information from collection through use, storage, sharing, retention and deletion. Each stage should have appropriate controls and clearly assigned responsibilities.",
      },
      {
        title: "Implementing Technical Security Controls",
        content:
          "Technical safeguards may include identity and access management, multifactor authentication, encryption, secure configuration, vulnerability management, backups and monitoring. The selection of controls should reflect organizational risks.",
      },
      {
        title: "Managing Third-Party Risks",
        content:
          "Service providers may access or process important information. Organizations should assess relevant vendors, define contractual responsibilities and establish appropriate security and incident reporting expectations.",
      },
      {
        title: "Preparing an Incident Response Plan",
        content:
          "An incident response plan helps teams identify, contain, investigate and recover from security incidents. It should define responsibilities, escalation contacts, documentation procedures and applicable notification considerations.",
      },
      {
        title: "Employee Awareness and Training",
        content:
          "Employees play an important role in data protection. Training should address relevant responsibilities such as secure information sharing, access management, suspicious activity reporting and handling personal data requests.",
      },
      {
        title: "Monitoring and Continuous Improvement",
        content:
          "A framework should be reviewed regularly. Internal assessments, audits, security testing and lessons learned from incidents can help organizations identify weaknesses and improve their controls.",
      },
      {
        title: "Practical Implementation Checklist",
        points: [
          "Assign privacy and security responsibilities.",
          "Maintain a personal data and systems inventory.",
          "Document processing activities and purposes.",
          "Implement appropriate access and security controls.",
          "Review vendor and processor arrangements.",
          "Establish retention and deletion procedures.",
          "Maintain incident response and recovery plans.",
          "Provide role-based employee training.",
          "Conduct periodic reviews and improvements.",
        ],
      },
      {
        title: "Conclusion",
        content:
          "A stronger data protection framework requires more than technical tools. Organizations should combine governance, visibility, security, vendor oversight and ongoing improvement to make responsible data handling part of daily operations.",
      },
    ],
  },
};

export default function BlogArticle() {
  const { slug } = useParams();
  const article = articles[slug];

  useEffect(() => {
    if (!article) return;

    const previousTitle = document.title;
    document.title = `${article.title} | Polivexa`;

    return () => {
      document.title = previousTitle;
    };
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-[65vh] bg-slate-50 px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Article Not Found
        </h1>

        <p className="mt-4 text-slate-600">
          The requested article could not be found.
        </p>

        <Link
          to="/blogs"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
        >
          <ArrowLeft size={18} />
          Back to Blogs
        </Link>
      </div>
    );
  }

  const Icon = article.icon;

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Article Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white md:py-24">
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Blogs & Updates
          </Link>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            <Icon size={18} />
            {article.category}
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {article.description}
          </p>

          <p className="mt-7 text-sm text-slate-400">
            By Polivexa Team · Privacy & Data Protection Insights
          </p>
        </div>
      </section>

      {/* Main Article */}
      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">

          {/* Overview */}
          <div className="mb-10 rounded-2xl border border-cyan-100 bg-cyan-50 p-7 md:p-9">
            <h2 className="text-2xl font-bold text-slate-900">
              Article Overview
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              {article.overview}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {article.sections.map((section, index) => (
              <article
                key={section.title}
                id={`section-${index + 1}`}
                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-9"
              >
                <div className="mb-5 flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 font-bold text-cyan-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="pt-1 text-xl font-bold text-slate-900 md:text-2xl">
                    {section.title}
                  </h2>
                </div>

                {section.content && (
                  <p className="leading-8 text-slate-600">
                    {section.content}
                  </p>
                )}

                {section.points && (
                  <ul className="space-y-4">
                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={20}
                          className="mt-1 shrink-0 text-cyan-600"
                        />
                        <span className="leading-7 text-slate-600">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-10 rounded-xl border-l-4 border-cyan-500 bg-white p-6 shadow-sm">
            <p className="text-sm leading-7 text-slate-600">
              <strong>Important:</strong> This article provides
              general educational information and does not
              constitute legal advice. DPDP Act and Rules
              obligations have phased commencement dates.
              Check current official notifications before
              determining applicable legal requirements.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="mt-10 rounded-2xl bg-slate-900 p-8 text-white md:p-10">
            <h2 className="text-2xl font-bold md:text-3xl">
              Strengthen Your Privacy & Data Protection Practices
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              Polivexa supports organizations with privacy
              assessments, compliance readiness and practical
              data protection advisory.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Contact Polivexa
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <ArrowLeft size={18} />
                More Articles
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
