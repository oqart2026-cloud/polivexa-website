
import React, { useState } from "react";
import {
  ShieldCheck,
  BookOpen,
  Scale,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ArrowUp,
  ExternalLink,
  LockKeyhole,
} from "lucide-react";

const topics = [
  {
    title: "DPDP in One Minute",
    text: "The Digital Personal Data Protection (DPDP) framework governs how organisations collect, use, store, share and delete digital personal data while giving individuals control over their information.",
    points: [
      "Why do we need the personal data?",
      "Do we have a lawful basis to process it?",
      "Have we clearly informed the individual?",
      "Are we protecting the information?",
      "Do we still need to retain it?",
    ],
    tip: "Remember: Purpose → Legal Basis → Notice → Protection → Deletion.",
  },
  {
    title: "Why India Needed DPDP",
    text: "Modern organisations handle customer details, employee records, student information, identity documents, payment details and digital identifiers. DPDP creates a legal framework for responsible handling of this information.",
    points: [
      "Gives individuals rights over personal data.",
      "Defines responsibilities for organisations.",
      "Requires reasonable security safeguards.",
      "Establishes the Data Protection Board of India.",
      "Provides monetary penalties for specified breaches.",
      "Introduces additional protections for children.",
    ],
  },
  {
    title: "What the DPDP Act Covers",
    text: "The Act covers digital personal data processed in India, including information first collected on paper and later digitised. It may also apply outside India when processing relates to offering goods or services to individuals in India.",
    points: [
      "Personal data collected digitally.",
      "Non-digital personal data subsequently digitised.",
      "Certain processing outside India connected with offering goods or services in India.",
      "Exclusions include personal/domestic processing and certain publicly available data, as specified by the Act.",
    ],
    tip: "Example: An online school admission form involves digital personal data. A private paper diary kept at home is different.",
  },
  {
    title: "The Key People and Roles",
    text: "Understanding who handles personal data helps establish accountability.",
    points: [
      "Data Principal: The individual whose personal data is involved.",
      "Data Fiduciary: The person or organisation deciding why and how data is processed.",
      "Data Processor: A party processing data on behalf of a Data Fiduciary.",
      "Significant Data Fiduciary (SDF): A fiduciary notified by the Central Government.",
      "Data Protection Officer (DPO): A role required for SDFs under the Act.",
      "Consent Manager: A registered intermediary helping individuals manage consent.",
      "Data Protection Board of India: The statutory enforcement body.",
    ],
  },
  {
    title: "Important DPDP Words in Plain English",
    points: [
      "Personal data: Information about an identifiable individual.",
      "Digital personal data: Personal data in digital form.",
      "Processing: Collecting, recording, storing, using, sharing, changing or deleting data.",
      "Personal data breach: An unauthorised or accidental event compromising personal data's confidentiality, integrity or availability.",
      "Specified purpose: The stated reason for processing personal data.",
      "Consent: A free, specific, informed, unconditional and unambiguous affirmative agreement.",
      "Grievance: A complaint relating to personal data or applicable rights.",
    ],
  },
  {
    title: "Personal Data: What Counts and What Does Not",
    text: "Personal data can identify a person directly or when combined with other information.",
    points: [
      "Name, phone number, email address and postal address.",
      "Student, employee or customer identifiers linked to a person.",
      "Identifiable photographs and videos.",
      "Online account identifiers.",
      "Digital records in HR, CRM, ERP, school or citizen-service systems.",
    ],
    tip: "Personal data is not limited to Aadhaar, PAN, passwords or bank details. Ordinary identifiers can also qualify.",
  },
  {
    title: "Data Processing: What Organisations Actually Do",
    text: "Processing is broader than collecting information.",
    points: [
      "Collecting and recording.",
      "Organising and storing.",
      "Retrieving and viewing.",
      "Using for services, HR, support or administration.",
      "Sharing or transmitting.",
      "Combining datasets.",
      "Restricting access.",
      "Erasing or destroying.",
    ],
  },
  {
    title: "When an Organisation Can Process Personal Data",
    text: "The Act broadly permits processing for a lawful purpose based on consent or a specified 'certain legitimate use'.",
    points: [
      "Consent: The individual knowingly agrees to specified processing.",
      "Certain legitimate uses: Processing allowed in circumstances listed by the Act without relying on consent.",
      "Examples may involve certain government services, emergencies and employment-related purposes, subject to statutory conditions.",
    ],
    tip: "Do not assume consent is required for every activity. Identify the correct lawful route for each purpose.",
  },
  {
    title: "Consent — What Good Consent Looks Like",
    points: [
      "Free: Not improperly forced.",
      "Specific: Linked to a defined purpose.",
      "Informed: The individual understands the processing.",
      "Unconditional: Not bundled with unrelated requirements.",
      "Unambiguous: Given through clear affirmative action.",
      "Limited to data necessary for the specified purpose.",
      "Withdrawal should be as easy as giving consent.",
      "The fiduciary should be able to demonstrate required notice and consent.",
    ],
    tip: "Better practice: Ask separately for essential service communications and optional marketing.",
  },
  {
    title: "Privacy Notice — What Users Should Be Told",
    text: "A privacy notice should be understandable to an ordinary user.",
    points: [
      "What personal data is collected?",
      "Why is the data processed?",
      "How can individuals exercise applicable rights?",
      "How can they submit a grievance?",
      "Who is the privacy contact?",
      "Provide clear language and the language options required by the Act.",
    ],
  },
  {
    title: "Data Fiduciary Responsibilities",
    text: "The Data Fiduciary remains responsible for its processing even when a vendor handles data on its behalf.",
    points: [
      "Process personal data for lawful purposes.",
      "Provide required notices and obtain valid consent where applicable.",
      "Implement technical and organisational measures.",
      "Use reasonable security safeguards.",
      "Manage and report breaches as required.",
      "Delete data when the purpose ends, subject to lawful retention.",
      "Publish relevant contact details and provide grievance redressal.",
      "Use contracts with processors.",
      "Ensure data accuracy and completeness where required.",
    ],
  },
  {
    title: "Data Processor Responsibilities",
    text: "A Data Processor handles information on behalf of a Data Fiduciary. Examples include cloud providers, payroll processors and email/SMS vendors.",
    points: [
      "Follow the fiduciary's instructions and contract.",
      "Maintain contractual security requirements.",
      "Control sub-processors and data sharing.",
      "Support breach response and deletion.",
      "Assist with applicable rights requests.",
      "Restrict access to necessary personnel.",
    ],
    tip: "Vendor agreements should address purpose, data categories, security, breach escalation, confidentiality, deletion and exit requirements.",
  },
  {
    title: "Data Principal Rights",
    points: [
      "Access/information: Obtain information about applicable personal-data processing.",
      "Correction: Request correction, completion or updating.",
      "Erasure: Request deletion where legally applicable.",
      "Grievance redressal: Use the organisation's complaint mechanism.",
      "Nomination: Nominate another individual in circumstances permitted by the Act.",
      "Withdrawal of consent: Withdraw consent with comparable ease to giving it.",
    ],
  },
  {
    title: "Data Principal Duties",
    points: [
      "Comply with applicable laws when exercising rights.",
      "Do not impersonate another person.",
      "Do not suppress material information in specified circumstances.",
      "Do not register false or frivolous grievances or complaints.",
    ],
  },
  {
    title: "Children's Data",
    text: "The Act defines a child as an individual below 18 years of age. Additional obligations apply to children's personal data.",
    points: [
      "Obtain verifiable parental or lawful-guardian consent where required.",
      "Avoid processing likely to harm a child's well-being.",
      "Restrictions apply to tracking, behavioural monitoring and targeted advertising directed at children, subject to prescribed exceptions.",
      "Consider child-data controls in schools, learning apps, transport systems and photo-sharing processes.",
    ],
  },
  {
    title: "Significant Data Fiduciaries",
    text: "The Central Government may notify specific Data Fiduciaries or classes as Significant Data Fiduciaries.",
    points: [
      "Appoint a Data Protection Officer.",
      "Appoint an independent data auditor.",
      "Conduct periodic Data Protection Impact Assessments.",
      "Undertake periodic audits.",
      "Meet additional prescribed or notified obligations.",
    ],
    tip: "A large organisation does not automatically become an SDF. Government notification determines this status.",
  },
  {
    title: "DPO and Grievance Handling",
    text: "An effective privacy programme needs a responsible contact and a clear complaint process.",
    points: [
      "Publish appropriate contact information.",
      "Provide an accessible complaint channel.",
      "Record each request and verify identity appropriately.",
      "Assign an owner and track deadlines.",
      "Respond and retain relevant evidence.",
      "Escalate unresolved matters.",
    ],
    tip: "Maintain a grievance register with ticket number, request type, owner, date, action, response and closure status.",
  },
  {
    title: "Personal Data Breach Management",
    text: "A personal data breach is not limited to hacking. Accidental disclosure, unauthorised access, destruction or loss of availability may also qualify.",
    points: [
      "An email containing personal data sent to the wrong recipient.",
      "A lost device holding unprotected personal information.",
      "Unauthorised employee access to HR records.",
      "An exposed database.",
      "Improper vendor disclosure.",
      "Ransomware making personal data unavailable.",
    ],
    tip: "Response workflow: Detect → Contain → Assess → Escalate → Notify as required → Remediate → Document → Prevent recurrence.",
  },
  {
    title: "Security Safeguards",
    points: [
      "Access control and least privilege.",
      "Strong authentication and MFA.",
      "Encryption in transit and, where appropriate, at rest.",
      "Activity logging and monitoring.",
      "Regular backups and restoration testing.",
      "Endpoint patching and malware protection.",
      "Network segmentation and firewalls.",
      "Vendor security reviews.",
      "Incident response planning.",
      "Employee privacy and security training.",
    ],
  },
  {
    title: "Retention and Deletion",
    text: "Personal data should not be retained indefinitely. Erasure obligations depend on whether the specified purpose continues and whether applicable law requires retention.",
    points: [
      "Prepare a retention schedule.",
      "Connect each data category to a purpose.",
      "Identify statutory retention requirements.",
      "Automate deletion where practical.",
      "Arrange processor deletion or return at the appropriate time.",
      "Maintain deletion evidence where appropriate.",
    ],
  },
  {
    title: "Data Protection Board of India",
    text: "The Board is the enforcement body established under the DPDP Act.",
    points: [
      "Receives relevant complaints and breach information.",
      "Conducts inquiries within its statutory powers.",
      "Can direct urgent remedial or mitigation measures.",
      "May impose monetary penalties where statutory requirements are met.",
      "May accept voluntary undertakings.",
      "Its orders may be appealed through the designated mechanism.",
    ],
  },
  {
    title: "Complaints, Inquiry and Appeals",
    text: "Individuals may use the organisation's grievance mechanism and, where applicable, approach the Board.",
    points: [
      "The Board assesses whether sufficient grounds exist to proceed.",
      "It may request documents and evidence within its powers.",
      "Affected parties receive an opportunity to be heard.",
      "Appeals may be made to the designated Appellate Tribunal within the statutory period.",
    ],
  },
  {
    title: "Penalties — Simple Penalty Matrix",
    text: "The DPDP Act provides maximum penalties for specified breaches. These amounts are ceilings, not automatic fines.",
    special: "penalties",
  },
  {
    title: "DPDP Rules, 2025 — What They Add",
    text: "The notified Rules provide operational detail for implementing the Act.",
    points: [
      "Privacy notices and consent mechanisms.",
      "Security safeguards and breach intimation.",
      "Children's data requirements.",
      "Significant Data Fiduciary obligations.",
      "Rights and grievance mechanisms.",
      "Retention, deletion and related procedures.",
      "Phased commencement of different provisions.",
    ],
    tip: "Use the notified 2025 Rules and official commencement notifications, not an earlier draft.",
  },
  {
    title: "DPDP Rules 2025 — Implementation Timeline",
    text: "The Act and Rules have phased commencement dates. Organisations should distinguish obligations already commenced from those scheduled for later.",
    special: "timeline",
  },
  {
    title: "DPDP Compliance Lifecycle",
    points: [
      "1. Governance: Assign privacy ownership and responsibilities.",
      "2. Discover: Identify systems, applications and vendors.",
      "3. Map: Document personal-data categories, purposes and recipients.",
      "4. Legal basis: Identify consent or permitted legitimate use.",
      "5. Notice: Prepare understandable notices.",
      "6. Rights: Build request, correction, erasure and grievance workflows.",
      "7. Security: Implement safeguards.",
      "8. Vendors: Update contracts and perform due diligence.",
      "9. Retention: Define deletion and retention rules.",
      "10. Breach response: Prepare escalation and notification procedures.",
      "11. Training: Train employees and contractors.",
      "12. Audit: Test controls and document remediation.",
    ],
  },
  {
    title: "Documents and Records to Maintain",
    points: [
      "Privacy policy and governance framework.",
      "Data inventory and processing register.",
      "Data-flow diagrams.",
      "Purpose and legal-basis register.",
      "Privacy notices and consent records.",
      "Consent withdrawal procedure.",
      "Rights and grievance procedures.",
      "Retention and deletion schedule.",
      "Incident response plan and breach register.",
      "Vendor register and DPDP contract clauses.",
      "Security policies and control evidence.",
      "Training records.",
      "DPIA and audit records where required.",
      "DPO details where applicable.",
      "Deletion logs or certificates where appropriate.",
    ],
  },
  {
    title: "Technology Controls",
    points: [
      "Identity: Role-based access control and timely access removal.",
      "Privileged access: MFA and monitored admin accounts.",
      "Database: Restricted access, encryption and audit logs.",
      "Applications: Secure development, validation, patching and vulnerability management.",
      "Cloud: Secure configuration and contractual controls.",
      "Network: Firewalling, segmentation and monitoring.",
      "Endpoints: Managed devices and malware protection.",
      "Backup: Restoration testing and access control.",
      "Monitoring: Alerts for suspicious access.",
      "Disposal: Secure data and media deletion.",
    ],
  },
  {
    title: "HR and Employee Data",
    text: "Employee information is personal data. HR functions should apply purpose limitation, access controls, security, retention and grievance procedures.",
    points: [
      "Recruitment applications and CVs.",
      "Identity and payroll records.",
      "Attendance and performance information.",
      "Leave and benefits records.",
      "Employee communications.",
      "Exit and separation records.",
      "Vendor and contractor records.",
    ],
    tip: "Technical administrators should not automatically have unrestricted business access to every employee record.",
  },
  {
    title: "Vendor / Third-Party Management",
    text: "The Data Fiduciary remains responsible for processing carried out on its behalf by processors.",
    points: [
      "Maintain a vendor inventory.",
      "Classify vendors by processing risk.",
      "Perform privacy and security due diligence.",
      "Use written contracts.",
      "Control sub-processors.",
      "Define breach escalation.",
      "Plan data return or deletion at exit.",
      "Review vendor compliance periodically.",
      "Maintain evidence of reviews and remediation.",
    ],
  },
  {
    title: "Website, App and Cookie Considerations",
    points: [
      "Use clear and accessible privacy notices.",
      "Collect only necessary information.",
      "Separate optional marketing choices where appropriate.",
      "Avoid misleading privacy interfaces.",
      "Review analytics, advertising and tracking technologies.",
      "Control third-party SDKs and scripts.",
      "Map transfers to cloud and marketing vendors.",
      "Provide grievance contact channels.",
      "Build deletion and account-closure workflows.",
      "Test privacy settings on mobile and desktop.",
    ],
  },
  {
    title: "School / Education-Sector Example",
    text: "Schools handle student, parent, teacher and staff information across admissions, attendance, learning systems, transport and administration.",
    points: [
      "Admissions: Notice, access control and retention.",
      "Attendance: Accuracy and limited access.",
      "School apps: Security and vendor controls.",
      "Online learning: Child-data and processor controls.",
      "Photos and events: Appropriate publication and consent controls.",
      "Transport: Need-to-know access and retention.",
      "Employee HR: Purpose, security and access restrictions.",
    ],
    tip: "Schools should treat child-data governance as a dedicated compliance workstream.",
  },
  {
    title: "Government / Public-Sector Example",
    text: "Public bodies may process data for services, benefits, licences, employment and statutory functions. Not every activity necessarily relies on consent.",
    points: [
      "Map citizen-facing systems.",
      "Identify statutory purposes and authority.",
      "Document interdepartmental data sharing.",
      "Apply role-based access controls.",
      "Maintain legally aligned retention schedules.",
      "Include outsourced service providers in data mapping.",
      "Establish breach and grievance procedures.",
      "Keep evidence of approvals and compliance.",
    ],
  },
  {
    title: "Practical 90-Day Compliance Roadmap",
    text: "A structured implementation plan can help organisations prepare for applicable DPDP obligations.",
    special: "roadmap",
  },
  {
    title: "DPDP Compliance Checklist",
    text: "Use this checklist as an initial self-assessment. It does not replace a legal or technical compliance audit.",
    special: "checklist",
  },
  {
    title: "Common Mistakes",
    points: [
      "Using one generic privacy notice for every purpose.",
      "Collecting information 'just in case'.",
      "Assuming vendors are responsible for everything.",
      "Keeping personal data forever.",
      "Treating breaches as only hacking incidents.",
      "Making consent difficult to withdraw.",
      "Ignoring children's data.",
      "Failing to retain compliance evidence.",
    ],
    tip: "Better approach: Use purpose-specific notices, data minimisation, vendor oversight, deletion rules and documented controls.",
  },
  {
    title: "Frequently Asked Questions",
    special: "faq",
  },
  {
    title: "Quick Glossary",
    points: [
      "DPDP: Digital Personal Data Protection.",
      "Act: Digital Personal Data Protection Act, 2023.",
      "Rules: Digital Personal Data Protection Rules, 2025.",
      "Data Principal: Individual whose personal data is involved.",
      "Data Fiduciary: Person deciding purpose and means of processing.",
      "Data Processor: Person processing on behalf of a fiduciary.",
      "SDF: Significant Data Fiduciary.",
      "DPO: Data Protection Officer.",
      "DPIA: Data Protection Impact Assessment.",
      "Consent Manager: Registered intermediary facilitating consent management.",
      "Board: Data Protection Board of India.",
    ],
  },
  {
    title: "Official Sources",
    text: "For legal interpretation and the latest commencement position, refer to official Government of India and MeitY publications.",
    special: "sources",
  },
];

const penalties = [
  ["Failure to take reasonable security safeguards to prevent a personal data breach", "₹250 crore"],
  ["Failure to notify the Board or affected Data Principal of a personal data breach", "₹200 crore"],
  ["Breach of additional obligations relating to children", "₹200 crore"],
  ["Breach of additional SDF obligations", "₹150 crore"],
  ["Breach of Data Principal duties under Section 15", "₹10,000"],
  ["Other breaches of the Act or Rules", "₹50 crore"],
];

const checklist = [
  "Identify whether the organisation acts as a Data Fiduciary, Processor or both.",
  "Prepare a personal-data inventory.",
  "Document processing purposes.",
  "Map legal basis or consent for each activity.",
  "Create clear, purpose-specific privacy notices.",
  "Maintain consent records where required.",
  "Provide a consent withdrawal mechanism.",
  "Document and test rights and grievance workflows.",
  "Identify children's data processing.",
  "Define retention periods.",
  "Implement erasure and deletion procedures.",
  "Assess reasonable security safeguards.",
  "Prepare a data breach response plan.",
  "Define breach escalation and notification responsibilities.",
  "Maintain vendor and processor inventories.",
  "Include DPDP provisions in relevant contracts.",
  "Control sub-processor arrangements.",
  "Document employee privacy training.",
  "Maintain relevant logs and compliance evidence.",
  "Review compliance at management level.",
  "Assess DPIA and audit obligations where applicable.",
  "Check the latest official commencement notifications.",
];

const faqs = [
  ["Is DPDP only for large companies?", "No. Applicability depends on the Act's scope and the processing activity, not simply organisation size."],
  ["Does DPDP apply to paper records?", "It covers digital personal data, including non-digital data that is later digitised, subject to the Act's scope and exclusions."],
  ["Does every use of personal data require consent?", "No. The Act also recognises certain legitimate uses."],
  ["Can a company keep data forever with consent?", "No. Purpose-based erasure requirements and applicable legal retention obligations must be considered."],
  ["What is the maximum DPDP penalty?", "The highest scheduled maximum is ₹250 crore for failure to take reasonable security safeguards to prevent a personal data breach."],
  ["Is ₹250 crore an automatic fine?", "No. It is a statutory maximum for a specified category, not an automatic amount."],
  ["Does DPDP apply to schools?", "Schools process children's and parents' personal data and should assess their obligations."],
  ["Does every organisation need a DPO?", "The Act specifically requires a DPO for notified Significant Data Fiduciaries. Others should maintain an accountable privacy contact."],
  ["What should we do after a breach?", "Contain the incident, assess its impact, preserve evidence, escalate internally and follow applicable notification requirements."],
  ["Does DPDP replace other privacy laws?", "No. Other applicable legal and sector-specific obligations may continue to apply."],
  ["Can a person complain to the organisation first?", "Yes. Organisations should maintain an effective grievance mechanism."],
  ["Are the DPDP Act and Rules the same?", "No. The Act establishes the legal framework; the Rules provide implementation details."],
];

function InfoTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-slate-900 text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-5 py-4 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <tr key={i} className="even:bg-slate-50">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-5 py-4 align-top leading-6 ${
                    j === row.length - 1
                      ? "font-semibold text-slate-900"
                      : "text-slate-600"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Checklist() {
  const [checked, setChecked] = useState([]);

  const toggle = (index) => {
    setChecked((current) =>
      current.includes(index)
        ? current.filter((x) => x !== index)
        : [...current, index]
    );
  };

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="font-semibold text-slate-900">
          {checked.length} of {checklist.length} completed
        </p>
        <button
          type="button"
          onClick={() => setChecked([])}
          className="text-sm font-semibold text-cyan-700 hover:underline"
        >
          Reset checklist
        </button>
      </div>

      <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-cyan-500 transition-all"
          style={{
            width: `${(checked.length / checklist.length) * 100}%`,
          }}
        />
      </div>

      <div className="space-y-3">
        {checklist.map((item, index) => (
          <label
            key={index}
            className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-cyan-50/50"
          >
            <input
              type="checkbox"
              checked={checked.includes(index)}
              onChange={() => toggle(index)}
              className="mt-1 h-4 w-4 accent-cyan-600"
            />
            <span className="text-sm leading-6 text-slate-700">
              {item}
            </span>
          </label>
        ))}
      </div>

      <p className="mt-4 text-xs text-slate-500">
        Checklist progress is temporary and resets when the page reloads.
      </p>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map(([question, answer], index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-slate-200"
        >
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
            className="flex w-full items-center justify-between gap-4 p-4 text-left font-semibold text-slate-900 hover:bg-slate-50"
          >
            <span>{question}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 transition-transform ${
                open === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {open === index && (
            <p className="border-t border-slate-100 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-600">
              {answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function SpecialContent({ type }) {
  if (type === "penalties") {
    return (
      <>
        <InfoTable
          headers={["Breach Category", "Maximum Penalty"]}
          rows={penalties}
        />
        <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          These are statutory maximum amounts, not automatic fines.
          The Board considers the circumstances and applicable statutory
          factors. Breach of an accepted voluntary undertaking may
          attract the applicable penalty for the underlying breach.
        </p>
      </>
    );
  }

  if (type === "timeline") {
    return (
      <div className="space-y-6">
        <h3 className="font-bold text-slate-900">
          DPDP Rules, 2025
        </h3>
        <InfoTable
          headers={["Rules", "Commencement"]}
          rows={[
            ["Rules 1, 2 and 17–21", "13 November 2025"],
            ["Rule 4", "13 November 2026"],
            ["Rules 3, 5–16, 22 and 23", "13 May 2027"],
          ]}
        />

        <h3 className="font-bold text-slate-900">
          DPDP Act, 2023
        </h3>
        <InfoTable
          headers={["Act Provisions", "Commencement"]}
          rows={[
            [
              "Section 1(2), Section 2, Sections 18–26, 35, 38–43 and Sections 44(1), 44(3)",
              "13 November 2025",
            ],
            [
              "Section 6(9) and Section 27(1)(d)",
              "13 November 2026",
            ],
            [
              "Sections 3–5, 6(1)–(8), 6(10), 7–10, 11–17, remaining Section 27, Sections 28–34, 36–37 and 44(2)",
              "13 May 2027",
            ],
          ]}
        />

        <p className="rounded-xl bg-cyan-50 p-4 text-sm leading-7 text-cyan-900">
          Timeline reproduced from the supplied guide, which reflects
          notifications available as of 1 September 2026. Verify
          subsequent government notifications before relying on these
          dates for legal compliance.
        </p>
      </div>
    );
  }

  if (type === "roadmap") {
    return (
      <InfoTable
        headers={["Period", "Priority Actions", "Main Output"]}
        rows={[
          [
            "Days 1–15",
            "Governance, scope, stakeholder interviews and application/vendor inventory.",
            "Programme charter and initial inventory",
          ],
          [
            "Days 16–30",
            "Data discovery, classification and legal-basis mapping.",
            "Data inventory and processing register",
          ],
          [
            "Days 31–45",
            "Assess gaps in notices, consent, rights, retention and vendors.",
            "Gap assessment report",
          ],
          [
            "Days 46–60",
            "Review security controls and breach readiness.",
            "Security/privacy remediation plan",
          ],
          [
            "Days 61–75",
            "Prepare policies, notices, SOPs, forms and contracts.",
            "DPDP documentation pack",
          ],
          [
            "Days 76–90",
            "Conduct training, testing, mock requests, breach drills and management review.",
            "Evidence pack and closure tracker",
          ],
        ]}
      />
    );
  }

  if (type === "checklist") return <Checklist />;

  if (type === "faq") return <FAQ />;

  if (type === "sources") {
    const sources = [
      [
        "Digital Personal Data Protection Act, 2023",
        "https://www.meity.gov.in/static/uploads/2024/02/Digital-Personal-Data-Protection-Act-2023-1.pdf",
      ],
      [
        "Digital Personal Data Protection Rules, 2025",
        "https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa",
      ],
      [
        "13 November 2025 — Rules Gazette",
        "https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf",
      ],
      [
        "13 November 2025 — Act Commencement Notification",
        "https://www.meity.gov.in/static/uploads/2025/11/c56ceae6c383460ca69577428d36828b.pdf",
      ],
      [
        "MeitY Acts and Policies",
        "https://www.meity.gov.in/documents/act-and-policies",
      ],
    ];

    return (
      <div className="space-y-3">
        {sources.map(([name, url]) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 p-4 text-sm font-medium text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-50"
          >
            <span>{name}</span>
            <ExternalLink size={17} className="shrink-0" />
          </a>
        ))}
      </div>
    );
  }

  return null;
}

export default function DPDPGuide() {
  const [search, setSearch] = useState("");

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <header className="relative overflow-hidden bg-slate-950 px-5 py-16 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-300">
            <BookOpen size={16} />
            Polivexa Knowledge Centre
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            DPDP Act
            <span className="text-cyan-400"> Complete Guide</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            A beginner-friendly guide to India's Digital Personal Data
            Protection Act, 2023 and Rules, 2025. Understand privacy
            rights, organisational duties, consent, security,
            penalties and practical compliance.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm">
              39 Topics
            </span>
            <span className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm">
              Act + Rules
            </span>
            <span className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm">
              Practical Checklist
            </span>
            <span className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm">
              Source status: 1 September 2026
            </span>
          </div>
        </div>
      </header>

      {/* HIGHLIGHTS */}
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <ShieldCheck size={28} className="mb-4 text-cyan-600" />
          <p className="text-2xl font-bold text-slate-900">
            Data Protection
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Learn how personal information should be handled responsibly.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <Scale size={28} className="mb-4 text-cyan-600" />
          <p className="text-2xl font-bold text-slate-900">
            Up to ₹250 Cr
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Highest scheduled maximum penalty for a specified breach.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <CalendarDays size={28} className="mb-4 text-cyan-600" />
          <p className="text-2xl font-bold text-slate-900">
            Phased Rollout
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Understand the different commencement dates.
          </p>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 pb-20 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* SIDEBAR */}
        <aside className="lg:sticky lg:top-28">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              Explore 39 Topics
            </p>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search topic..."
              aria-label="Search guide topics"
              className="mb-4 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-cyan-500"
            />

            <nav
              aria-label="DPDP Guide sections"
              className="max-h-[55vh] space-y-1 overflow-y-auto pr-1"
            >
              {filteredTopics.map((topic) => {
                const index = topics.indexOf(topic);

                return (
                  <a
                    key={topic.title}
                    href={`#guide-${index + 1}`}
                    className="flex gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-800"
                  >
                    <span className="shrink-0 font-bold text-cyan-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{topic.title}</span>
                  </a>
                );
              })}

              {filteredTopics.length === 0 && (
                <p className="px-3 py-3 text-sm text-slate-500">
                  No matching topic found.
                </p>
              )}
            </nav>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-white">
            <LockKeyhole size={25} className="mb-3 text-cyan-400" />
            <h3 className="text-lg font-bold">
              Need DPDP Assistance?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Get help with gap assessments, privacy documentation
              and compliance preparation.
            </p>
            <a
              href="mailto:support@polivexa.com"
              className="mt-4 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Contact Polivexa →
            </a>
          </div>
        </aside>

        {/* GUIDE CONTENT */}
        <main className="min-w-0 space-y-6">
          <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-6 sm:p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-cyan-700">
              Start Here
            </p>
            <h2 className="text-2xl font-bold text-slate-900">
              Understand DPDP, step by step.
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              This guide explains the concepts, responsibilities
              and implementation steps in accessible language.
              Use the topic navigation to jump directly to any section.
            </p>
          </div>

          {topics.map((topic, index) => (
            <section
              key={topic.title}
              id={`guide-${index + 1}`}
              className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-5 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-sm font-bold text-cyan-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700">
                    Guide Chapter
                  </p>
                  <h2 className="text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                    {topic.title}
                  </h2>
                </div>
              </div>

              {topic.text && (
                <p className="mb-5 text-sm leading-8 text-slate-600 sm:text-base">
                  {topic.text}
                </p>
              )}

              {topic.points && (
                <ul className="space-y-3">
                  {topic.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-cyan-600"
                      />
                      <span className="text-sm leading-7 text-slate-600 sm:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {topic.special && (
                <SpecialContent type={topic.special} />
              )}

              {topic.tip && (
                <div className="mt-6 rounded-xl border-l-4 border-cyan-500 bg-cyan-50 p-5">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700">
                    Practical Insight
                  </p>
                  <p className="text-sm leading-7 text-slate-700">
                    {topic.tip}
                  </p>
                </div>
              )}
            </section>
          ))}

          {/* END NOTE */}
          <div className="rounded-2xl bg-slate-900 p-7 text-white sm:p-9">
            <ShieldCheck size={32} className="mb-4 text-cyan-400" />

            <h2 className="text-2xl font-bold">
              Final Takeaway
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Responsible data protection starts with understanding
              what information you collect, why you collect it,
              how you protect it, who you share it with and when
              it should be deleted. Strong compliance also means
              respecting individual rights, managing vendors and
              preparing for security incidents.
            </p>

            <p className="mt-5 border-t border-white/15 pt-5 text-sm leading-7 text-slate-400">
              Educational information only, not legal advice.
              This page is adapted from the Polivexa DPDP Complete
              Guide for Beginners, reflecting its source position
              as of 1 September 2026. Obtain qualified advice
              for legal interpretation or live compliance decisions.
            </p>
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
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700"
            >
              <ArrowUp size={16} />
              Back to Top
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
