
import React, { useMemo, useState } from "react";
import {
  BookOpen,
  Scale,
  ShieldCheck,
  CalendarDays,
  FileText,
  Search,
  ChevronDown,
  CheckCircle2,
  ArrowUp,
  ExternalLink,
  AlertTriangle,
  Gavel,
  LockKeyhole,
  ClipboardCheck,
  Building2,
} from "lucide-react";

// DPDP Act: Sections 1–44
// Format: [section, subject, explanation, compliance focus]
const actSections = [
  [1, "Short title and commencement", "The Act is called the Digital Personal Data Protection Act, 2023. Different provisions can begin on different notified dates.", "Check Government commencement notifications."],
  [2, "Definitions", "Defines Data Principal, Data Fiduciary, Data Processor, personal data, processing, breach, SDF and specified purpose.", "Identify roles and apply the correct definitions."],
  [3, "Application of Act", "Covers digital personal data in India and specified processing outside India connected with offering goods or services in India, with exclusions.", "Map processing locations, services and exclusions."],
  [4, "Grounds for processing", "Processing must be for a lawful purpose, supported by consent or a legitimate use recognised by the Act.", "Document lawful processing grounds."],
  [5, "Notice", "Requires prescribed notice about personal data, purposes and ways to exercise rights and make complaints.", "Prepare clear, purpose-specific privacy notices."],
  [6, "Consent", "Consent must be free, specific, informed, unconditional and unambiguous. Withdrawal must be as easy as giving consent.", "Implement consent records and withdrawal workflows."],
  [7, "Certain legitimate uses", "Permits specified processing without consent, including qualifying voluntary-provision situations and certain State services or benefits.", "Maintain a legal-basis register."],
  [8, "General obligations of Data Fiduciary", "Includes accuracy, security, processor controls, breach notification, erasure and contact information.", "Build the core operational compliance programme."],
  [9, "Processing of children's data", "Requires verifiable parental consent and restricts harmful processing, tracking, behavioural monitoring and targeted advertising, subject to exemptions.", "Implement child-data controls."],
  [10, "Significant Data Fiduciary", "Allows Government notification of SDFs based on risk and other factors, with enhanced governance duties.", "Prepare for DPIA, audit and DPO requirements where applicable."],
  [11, "Right to information", "Allows a Data Principal to request prescribed information about processing and relevant sharing.", "Build an information-request process."],
  [12, "Correction and erasure", "Provides rights to correction, completion, updating and erasure, subject to applicable conditions.", "Set up verification, response and retention-exception workflows."],
  [13, "Grievance redressal", "Requires accessible grievance mechanisms for relevant Data Fiduciaries and Consent Managers.", "Publish and monitor a grievance channel."],
  [14, "Right to nominate", "Allows nomination of another individual to exercise rights in specified circumstances.", "Support nomination requests."],
  [15, "Duties of Data Principal", "Requires authentic information and prohibits impersonation, material-information suppression and false or frivolous complaints.", "Explain applicable duties to users."],
  [16, "Processing outside India", "Provides for restrictions on transfers to specified countries or territories; stronger applicable sectoral protections may continue.", "Maintain a cross-border transfer register."],
  [17, "Exemptions", "Provides specified exemptions relating to legal, judicial, regulatory, enforcement, merger and other situations, including notified State instrumentalities.", "Document the legal basis for each exemption."],
  [18, "Establishment of Board", "Establishes the Data Protection Board of India.", "Understand the enforcement institution."],
  [19, "Composition and appointment", "Sets the framework for appointment of the Board's Chairperson and Members.", "Board governance provision."],
  [20, "Term and conditions", "Covers terms and service conditions of the Chairperson and Members.", "Board governance."],
  [21, "Disqualifications", "Specifies disqualifications for appointment and continuation.", "Governance safeguards."],
  [22, "Resignation and vacancies", "Covers resignation and filling of vacancies.", "Board administration."],
  [23, "Proceedings of Board", "Provides procedural rules and validity of proceedings despite certain vacancies or defects.", "Procedural continuity."],
  [24, "Officers and employees", "Provides for appointment of Board officers and employees.", "Administrative support."],
  [25, "Public servants", "Treats specified Board personnel as public servants while acting under the Act.", "Legal status."],
  [26, "Powers of Chairperson", "Provides administrative and allocation powers.", "Board management."],
  [27, "Powers and functions of Board", "Provides for inquiries, directions and penalties on specified statutory triggers.", "Prepare for enforcement and evidence requests."],
  [28, "Procedure before Board", "Provides for digital-first proceedings, assessment of grounds, inquiries and natural justice.", "Maintain auditable records."],
  [29, "Appeal", "Provides appeal to the Appellate Tribunal within 60 days, subject to statutory conditions.", "Track appeal procedures and deadlines."],
  [30, "Execution of appellate orders", "Makes Appellate Tribunal orders executable as civil court decrees.", "Understand enforcement of appellate orders."],
  [31, "Mediation", "Allows the Board to direct parties to attempt mediation where appropriate.", "Consider alternative dispute resolution."],
  [32, "Voluntary undertaking", "Allows acceptance of compliance undertakings; breach can lead to statutory consequences.", "Track commitments and closure evidence."],
  [33, "Penalties", "Provides monetary penalties up to Schedule ceilings, considering statutory factors after hearing.", "Assess penalty exposure and mitigation."],
  [34, "Credit of penalties", "Provides that realised penalties are credited to the Consolidated Fund of India.", "Financial treatment."],
  [35, "Good-faith protection", "Protects specified Government and Board actors for good-faith actions under the Act and Rules.", "Institutional protection."],
  [36, "Power to call information", "Allows the Government to require information from specified entities.", "Prepare an information-request process."],
  [37, "Blocking directions", "Allows blocking directions subject to specified statutory conditions.", "Understand potential serious enforcement consequences."],
  [38, "Consistency with other laws", "The Act supplements other laws and prevails to the extent of a conflict.", "Assess overlap with other legal requirements."],
  [39, "Bar of civil-court jurisdiction", "Restricts civil-court jurisdiction for matters entrusted to the Board.", "Route disputes appropriately."],
  [40, "Power to make rules", "Empowers the Central Government to make rules to carry out the Act.", "Legal basis for DPDP Rules."],
  [41, "Laying of rules and notifications", "Provides for parliamentary laying of rules and notifications.", "Legislative oversight."],
  [42, "Power to amend Schedule", "Permits amendment of the penalty Schedule within statutory limits.", "Monitor amendments."],
  [43, "Removal of difficulties", "Permits Government orders addressing implementation difficulties within the statutory period.", "Monitor transitional orders."],
  [44, "Amendments to other Acts", "Amends specified provisions of the TRAI Act, IT Act and RTI Act, including omission of IT Act Section 43A when the relevant provision commences.", "Review transition and overlap."],
];

// DPDP Rules, 2025: Rules 1–23
const rules = [
  [1, "Short title and commencement", "Rules 1, 2 and 17–21 commence on publication; Rule 4 after one year; Rules 3, 5–16, 22 and 23 after 18 months.", "Track applicable commencement dates."],
  [2, "Definitions", "Defines terms including techno-legal measures, user account and verifiable consent.", "Apply the prescribed meanings."],
  [3, "Notice", "Requires standalone, understandable notices with itemised personal data, purpose, withdrawal route, rights route and Board complaint route.", "Prepare clear notices and user journeys."],
  [4, "Consent Manager registration", "Establishes registration process and First Schedule conditions for Consent Managers.", "Relevant to entities seeking registration."],
  [5, "State subsidies, benefits and services", "Applies Second Schedule standards to processing under Section 7(b).", "Map government processing standards."],
  [6, "Reasonable security safeguards", "Specifies safeguards including encryption, masking or tokenisation, access control, logs, monitoring, backups, retention for specified security purposes, processor contracts and organisational measures.", "Create a security-control catalogue and evidence register."],
  [7, "Personal data breach intimation", "Provides for affected Data Principal notification without delay, immediate Board intimation and detailed Board information within 72 hours unless a longer period is allowed.", "Maintain breach reporting workflows and clocks."],
  [8, "Purpose no longer served / erasure", "Creates specified erasure and retention requirements for listed classes, including warning before erasure and certain one-year retention obligations.", "Implement retention and deletion controls."],
  [9, "Contact information", "Requires prominent DPO or contact information for processing questions and inclusion in rights responses.", "Publish accountable contact details."],
  [10, "Verifiable consent for children", "Requires measures to verify parental identity and adulthood using reliable information or authorised tokens.", "Build age and parent verification."],
  [11, "Consent for persons with disability", "Requires due diligence for verification of a lawful guardian under applicable guardianship law.", "Maintain appropriate guardian-verification evidence."],
  [12, "Child-data exemptions", "Provides specified exemptions from Sections 9(1) and 9(3), subject to Fourth Schedule conditions.", "Verify exemption eligibility and conditions."],
  [13, "SDF obligations", "Provides annual DPIA and audit requirements, reporting of significant observations, algorithmic due diligence and specified localisation requirements where notified.", "Maintain an SDF compliance calendar."],
  [14, "Data Principal rights", "Requires published rights mechanisms, identifiers, grievance handling within a reasonable period not exceeding 90 days and nomination support.", "Create rights and grievance SOPs."],
  [15, "Transfers outside India", "Addresses transfer requirements the Government may specify relating to foreign States or their controlled entities or agencies.", "Monitor orders and maintain transfer governance."],
  [16, "Research, archiving and statistics", "Provides exemption for qualifying processing when Second Schedule standards are followed.", "Document purpose and safeguards."],
  [17, "Appointment of Board", "Establishes selection procedures for Chairperson and Members.", "Board governance."],
  [18, "Service conditions", "Applies Fifth Schedule service conditions.", "Board administration."],
  [19, "Board meetings and orders", "Covers meetings, quorum, voting, conflicts, emergency action and authentication; inquiry target is six months, extendable with recorded reasons.", "Understand Board procedure."],
  [20, "Board as digital office", "Permits techno-legal measures for digital proceedings.", "Digital adjudication."],
  [21, "Board officers and employees", "Provides appointment and service framework.", "Board administration."],
  [22, "Appeal procedure", "Provides digital appeal filing, fee and related procedure.", "Prepare appeal documentation."],
  [23, "Calling for information", "Allows Government information requests for specified purposes, including confidentiality in prescribed circumstances.", "Maintain a legally reviewed response process."],
];

const scheduleRows = [
  ["First", "Consent Manager registration conditions and obligations.", "India-incorporated company, capacity, sound management, minimum ₹2 crore net worth and other technical/organisational conditions."],
  ["Second", "Standards for certain State processing and research, archiving or statistical exemptions.", "Purpose limitation, minimisation, accuracy, retention, security and accountability."],
  ["Third", "Specified large e-commerce, online gaming and social-media fiduciaries.", "Deemed end-of-purpose and related erasure/retention requirements."],
  ["Fourth", "Child-data exemptions for specified classes and purposes.", "Conditional exemptions; not a blanket exemption for schools or healthcare."],
  ["Fifth", "Board Chairperson and Member service conditions.", "Board governance."],
  ["Sixth", "Terms for Board officers and employees.", "Board administration."],
  ["Seventh", "Government information-request purposes and authorised persons.", "Defines certain information-request routes."],
];

const penaltyRows = [
  ["Section 8(5)", "Failure of reasonable security safeguards resulting in personal data breach", "₹250 crore"],
  ["Section 8(6)", "Failure to notify Board or affected Data Principal", "₹200 crore"],
  ["Section 9", "Children's data obligations", "₹200 crore"],
  ["Section 10", "Significant Data Fiduciary obligations", "₹150 crore"],
  ["Section 15", "Data Principal duties", "₹10,000"],
  ["Section 32", "Breach of accepted voluntary undertaking", "Applicable underlying breach ceiling"],
  ["Residual Schedule item", "Other breaches of Act or Rules", "₹50 crore"],
];

const legalInstruments = [
  ["DPDP Act, 2023", "Primary framework for digital personal data processing.", "Core statute with phased commencement."],
  ["DPDP Rules, 2025", "Detailed operational requirements under Section 40.", "Different Rules commence on different dates."],
  ["IT Act, 2000", "Cyber/electronic transactions, unauthorised access, offences and CERT-In.", "Section 43A is scheduled for omission when DPDP Section 44(2) commences."],
  ["SPDI Rules, 2011", "Legacy sensitive personal data/information framework.", "Relevant to transitional and other applicable legal analysis."],
  ["CERT-In Directions, 2022", "Cyber-incident reporting, logging and other security obligations.", "Separate reporting regime, including prescribed six-hour reporting."],
  ["RTI Act, 2005", "Public information access framework.", "DPDP Section 44(3) changes Section 8(1)(j) wording."],
];

const relatedLaws = [
  ["Information Technology Act, 2000", "Sections concerning unauthorised access, damage, cyber offences, intermediaries and CERT-In.", "Maintain security, logging and incident governance."],
  ["SPDI Rules, 2011", "Legacy sensitive-data rules covering privacy policy, consent, disclosure and reasonable security.", "Review transitional and continuing applicability."],
  ["CERT-In Directions, 2022", "Specified incidents, including qualifying breaches and data leaks, may require reporting within six hours.", "Run a separate CERT-In reporting clock."],
  ["Intermediary Rules, 2021", "Governance requirements for qualifying online intermediaries and platforms.", "Assess intermediary status."],
  ["Right to Information Act, 2005", "Public-information access and personal-information exemption.", "Review public-body disclosure policies."],
  ["Rights of Persons with Disabilities Act, 2016", "Relevant to specified lawful-guardian verification situations.", "Apply relevant guardianship requirements."],
  ["National Trust Act, 1999", "Certain guardianship arrangements referred to by DPDP Rules.", "Verify relevant guardian authority."],
  ["Consumer Protection Act, 2019", "E-commerce definitions referenced by the Third Schedule.", "Assess large e-commerce retention rules."],
  ["Sectoral regulations", "RBI, IRDAI, SEBI, telecom, health, education and other sector rules.", "Maintain a sector-specific legal register."],
];

const comparisonRows = [
  ["Personal-data processing", "DPDP Act and Rules", "Sectoral laws and contracts", "Use DPDP as the horizontal framework and layer sector obligations."],
  ["Security safeguards", "Section 8(5), Rule 6", "IT Act, CERT-In and sector cyber rules", "Map requirements to a unified security programme."],
  ["Breach reporting", "Section 8(6), Rule 7", "CERT-In incident reporting", "Maintain separate notification clocks and recipients."],
  ["Sensitive data", "No primary SPDI-style sensitive-data taxonomy", "Legacy SPDI classification", "Retain legacy mapping where legally relevant."],
  ["Cross-border transfer", "Section 16, Rule 15", "Sector localisation and transfer restrictions", "Maintain country and recipient registers."],
  ["Retention", "Section 8, Rule 8 and Schedules", "Tax, labour, finance, litigation and sector laws", "Respect applicable mandatory retention periods."],
  ["Government disclosure", "DPDP provisions and exemptions", "RTI and sector disclosure rules", "Use a legal review for public-authority disclosures."],
];

const obligations = [
  ["Lawful purpose and legal basis", "Sections 4 and 7", "Processing inventory and lawful-basis mapping."],
  ["Notice", "Section 5, Rule 3", "Standalone notice, itemised data and purpose, rights and complaint routes."],
  ["Consent", "Section 6", "Consent evidence, withdrawal and downstream updates."],
  ["Processor governance", "Section 8", "Contracts, instructions, security and audit provisions."],
  ["Security", "Section 8(5), Rule 6", "Encryption or masking, access control, monitoring and backups."],
  ["Breach notification", "Section 8(6), Rule 7", "Incident playbook, notifications and 72-hour detailed Board update."],
  ["Retention and erasure", "Section 8, Rule 8", "Purpose-based deletion and lawful retention."],
  ["Children's data", "Section 9, Rules 10–12", "Parent verification and child-data controls."],
  ["Rights", "Sections 11–14, Rule 14", "Request and grievance workflows."],
  ["SDF governance", "Section 10, Rule 13", "DPIA, audit, governance and applicable additional safeguards."],
];

const workstreams = [
  ["Governance", "Privacy policy, roles/RACI, legal register, steering committee.", "Approved policies and management minutes."],
  ["Data inventory", "Processing register, data flows, systems and processors.", "Inventory, diagrams and system owners."],
  ["Notice and consent", "Privacy notices, consent language, records and withdrawal.", "Screenshots, consent logs and version history."],
  ["Rights", "Information, correction, erasure, grievance and nomination SOPs.", "Request register and response evidence."],
  ["Security", "Access controls, encryption, masking, monitoring, backups and secure SDLC.", "Configurations, logs and audit reports."],
  ["Breach response", "Incident plan, templates, escalation matrix and regulatory clock tracker.", "Incident tickets, notifications and root-cause reports."],
  ["Processor management", "Data processing agreements, security schedules and due diligence.", "Contracts, questionnaires and assessments."],
  ["Retention and deletion", "Retention schedule, legal holds and deletion workflow.", "Deletion logs and approvals."],
  ["Children", "Age and parent verification, parental consent and tracking controls.", "Verification records and testing."],
  ["SDF readiness", "DPIA, annual audit, DPO, algorithmic risk and localisation review.", "Audit reports and approvals."],
  ["Training", "Role-based privacy and security training.", "Attendance, assessments and materials."],
  ["Third-party and cloud", "Sub-processor register, transfer review and cloud-security clauses.", "Vendor register and security assessments."],
];

const priorities = [
  ["Critical", "Security safeguards", "Map Rule 6 controls and close high-risk gaps."],
  ["Critical", "Breach response", "Integrate DPDP and CERT-In reporting paths, owners and clocks."],
  ["High", "Privacy notices and consent", "Prepare Rule 3-aligned notices and consent journeys."],
  ["High", "Data inventory and retention", "Identify data, purposes, processors and deletion triggers."],
  ["High", "Children's data", "Identify child-facing processing and design verification controls."],
  ["High", "Processor contracts", "Update security, breach, deletion and assistance clauses."],
  ["Medium", "Rights and grievances", "Build intake, verification, tracking and grievance response."],
  ["Medium", "SDF assessment", "Assess notification risk and enhanced governance readiness."],
  ["Medium", "Cross-border transfers", "Inventory overseas recipients and applicable restrictions."],
  ["Ongoing", "Legal monitoring", "Track notifications, Board directions and sectoral requirements."],
];

const checklistItems = [
  "Identify all systems processing digital personal data.",
  "Map every processing activity to a lawful purpose and legal basis.",
  "Prepare clear, standalone and purpose-specific notices.",
  "Maintain evidence of when and how consent was obtained.",
  "Make consent withdrawal comparably easy.",
  "Review processor contracts for security, breach and deletion.",
  "Implement appropriate encryption, masking or tokenisation and access controls.",
  "Maintain logs, monitoring, backups and security evidence.",
  "Prepare to detect, contain, investigate and report breaches.",
  "Prepare the detailed Board update within the applicable Rule 7 timeline.",
  "Maintain a retention and deletion schedule.",
  "Track rights requests and grievances end to end.",
  "Identify and control child-data processing.",
  "Assess SDF obligations where relevant.",
  "Inventory cross-border transfers and restrictions.",
  "Map CERT-In reporting requirements separately.",
  "Map applicable sectoral privacy and cyber requirements.",
  "Maintain policies, training, contracts, records and audit evidence.",
];

const topics = [
  "Executive Summary",
  "Official Legal Sources",
  "Legal Timeline & Commencement",
  "DPDP Act — Overview",
  "DPDP Act — Sections 1–44",
  "Core Data Fiduciary Obligations",
  "DPDP Rules — Rules 1–23",
  "DPDP Rules — Seven Schedules",
  "Penalties & Non-Conformance",
  "Enforcement Process",
  "Related Indian Laws",
  "DPDP vs Other Frameworks",
  "Practical Compliance Framework",
  "Management Priority Matrix",
  "Audit / Assessment Checklist",
  "Key Takeaways",
  "Annexure A — Quick Legal Reference",
  "Annexure B — Legal Caveats",
];

const sources = [
  ["DPDP Act, 2023 — MeitY", "https://www.meity.gov.in/static/uploads/2024/02/Digital-Personal-Data-Protection-Act-2023-1.pdf"],
  ["DPDP Rules, 2025 — MeitY", "https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa"],
  ["DPDP commencement notification", "https://www.meity.gov.in/static/uploads/2025/11/c56ceae6c383460ca69577428d36828b.pdf"],
  ["DPDP Rules Gazette notification", "https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf"],
  ["MeitY — Acts and Policies", "https://www.meity.gov.in/documents/act-and-policies"],
  ["India Code", "https://www.indiacode.nic.in/"],
  ["CERT-In", "https://www.cert-in.org.in/"],
];

function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full min-w-[650px] border-collapse text-left text-sm">
        <thead className="bg-slate-900 text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-4 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <tr key={i} className="even:bg-slate-50 hover:bg-cyan-50/40">
              {row.map((value, j) => (
                <td
                  key={j}
                  className={`px-4 py-4 align-top leading-6 ${
                    j === 0
                      ? "font-semibold text-slate-900"
                      : "text-slate-600"
                  }`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Section({ number, title, children }) {
  return (
    <section
      id={`explanation-${number}`}
      className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
    >
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 font-bold text-cyan-700">
          {String(number).padStart(2, "0")}
        </div>
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700">
            Legal Explanation
          </p>
          <h2 className="text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
            {title}
          </h2>
        </div>
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function Note({ children, warning = false }) {
  return (
    <div
      className={`rounded-xl border-l-4 p-5 text-sm leading-7 ${
        warning
          ? "border-amber-500 bg-amber-50 text-amber-950"
          : "border-cyan-500 bg-cyan-50 text-slate-700"
      }`}
    >
      {children}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle2
            size={18}
            className="mt-1 shrink-0 text-cyan-600"
          />
          <span className="text-sm leading-7 text-slate-600 sm:text-base">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function LegalCards({ data, prefix }) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return data.filter((item) =>
      item.join(" ").toLowerCase().includes(q)
    );
  }, [data, query]);

  return (
    <div>
      <div className="mb-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
        <Search size={18} className="shrink-0 text-slate-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${prefix.toLowerCase()}, topic or keyword...`}
          aria-label={`Search ${prefix}`}
          className="w-full bg-transparent text-sm text-slate-700 outline-none"
        />
      </div>

      <div className="grid gap-3">
        {filtered.map(([number, title, explanation, focus]) => {
          const isOpen = expanded === number;

          return (
            <div
              key={number}
              className="overflow-hidden rounded-xl border border-slate-200"
            >
              <button
                type="button"
                onClick={() => setExpanded(isOpen ? null : number)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3 p-4 text-left transition hover:bg-cyan-50"
              >
                <span className="flex h-10 min-w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 px-2 text-sm font-bold text-white">
                  {number}
                </span>
                <span className="flex-1 text-sm font-semibold text-slate-900 sm:text-base">
                  {prefix} {number}: {title}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-slate-500 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="space-y-4 border-t border-slate-100 bg-slate-50 p-5">
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-cyan-700">
                      Plain-English Explanation
                    </p>
                    <p className="text-sm leading-7 text-slate-700">
                      {explanation}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-cyan-700">
                      Practical Compliance Focus
                    </p>
                    <p className="text-sm leading-7 text-slate-700">
                      {focus}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <p className="rounded-xl bg-slate-50 p-5 text-sm text-slate-500">
            No matching result found.
          </p>
        )}
      </div>

      <p className="mt-4 text-xs text-slate-500">
        {filtered.length} of {data.length} {prefix.toLowerCase()}s shown.
        Click any item to read its explanation.
      </p>
    </div>
  );
}

function AuditChecklist() {
  const [checked, setChecked] = useState([]);

  const toggle = (index) => {
    setChecked((current) =>
      current.includes(index)
        ? current.filter((x) => x !== index)
        : [...current, index]
    );
  };

  const percentage = Math.round(
    (checked.length / checklistItems.length) * 100
  );

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-bold text-slate-900">
            {checked.length} / {checklistItems.length} completed
          </p>
          <p className="text-sm text-slate-500">
            Interactive readiness assessment
          </p>
        </div>

        <button
          type="button"
          onClick={() => setChecked([])}
          className="text-sm font-semibold text-cyan-700 hover:underline"
        >
          Reset checklist
        </button>
      </div>

      <div className="mb-6 h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-cyan-500 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="space-y-3">
        {checklistItems.map((item, i) => (
          <label
            key={i}
            className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-cyan-50/50"
          >
            <input
              type="checkbox"
              checked={checked.includes(i)}
              onChange={() => toggle(i)}
              className="mt-1 h-4 w-4 accent-cyan-600"
            />
            <span className="text-sm leading-7 text-slate-700">
              {item}
            </span>
          </label>
        ))}
      </div>

      <p className="mt-4 text-xs text-slate-500">
        Progress is not saved and will reset after reloading the page.
      </p>
    </div>
  );
}

export default function DPDPExplanation() {
  const [topicSearch, setTopicSearch] = useState("");

  const filteredTopics = topics
    .map((title, index) => ({ title, number: index + 1 }))
    .filter(({ title }) =>
      title.toLowerCase().includes(topicSearch.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <header className="relative overflow-hidden bg-slate-950 px-5 py-16 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-300">
            <Scale size={16} />
            Polivexa Legal Knowledge Centre
          </span>

          <h1 className="mt-7 max-w-5xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            DPDP Act
            <span className="text-cyan-400"> Explanation</span>
          </h1>

          <p className="mt-5 max-w-4xl text-lg font-semibold text-slate-200">
            DPDP Act, Rules & Related Data Protection Laws
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            India's practical legal and compliance guide covering the
            Digital Personal Data Protection Act, 2023, DPDP Rules,
            2025, the IT Act, SPDI Rules, CERT-In Directions and
            related regulatory frameworks.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "44 Act Sections",
              "23 Rules",
              "7 Schedules",
              "18 Guide Sections",
              "Source: 1 September 2026",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* HIGHLIGHTS */}
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:grid-cols-3">
        {[
          {
            icon: <BookOpen size={28} />,
            title: "44 Sections",
            desc: "Understand the DPDP Act section by section.",
          },
          {
            icon: <FileText size={28} />,
            title: "23 Rules",
            desc: "Operational compliance requirements explained.",
          },
          {
            icon: <CalendarDays size={28} />,
            title: "Phased Rollout",
            desc: "Know when the relevant provisions commence.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 text-cyan-600">{item.icon}</div>
            <p className="text-2xl font-bold text-slate-900">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CONTENT + SIDEBAR */}
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 pb-20 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-28">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              Guide Navigation
            </p>

            <input
              type="search"
              value={topicSearch}
              onChange={(e) => setTopicSearch(e.target.value)}
              placeholder="Search chapters..."
              aria-label="Search chapters"
              className="mb-4 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-cyan-500"
            />

            <nav
              aria-label="Explanation chapters"
              className="max-h-[55vh] space-y-1 overflow-y-auto pr-1"
            >
              {filteredTopics.map(({ title, number }) => (
                <a
                  key={number}
                  href={`#explanation-${number}`}
                  className="flex gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-800"
                >
                  <span className="shrink-0 font-bold text-cyan-700">
                    {String(number).padStart(2, "0")}
                  </span>
                  <span>{title}</span>
                </a>
              ))}

              {filteredTopics.length === 0 && (
                <p className="p-3 text-sm text-slate-500">
                  No matching chapter.
                </p>
              )}
            </nav>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-white">
            <LockKeyhole size={25} className="mb-3 text-cyan-400" />
            <h3 className="text-lg font-bold">
              Need Compliance Support?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Polivexa helps organisations prepare for DPDP
              compliance through assessments and advisory services.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Contact Polivexa →
            </a>
          </div>
        </aside>

        <div className="min-w-0 space-y-6">
          <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">
              Before You Begin
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Understand the law and its practical impact.
            </h2>
            <p className="mt-3 text-sm leading-8 text-slate-700 sm:text-base">
              This page converts the Polivexa legal reference PDF
              into a structured online explanation. It is a
              practical guide, not the full statutory text.
              Different provisions have different commencement dates.
            </p>
          </div>

          {/* 1 */}
          <Section number={1} title={topics[0]}>
            <p className="text-sm leading-8 text-slate-600 sm:text-base">
              India's principal horizontal digital personal data
              framework is the DPDP Act, 2023, supported by the
              DPDP Rules, 2025. The Act defines lawful processing,
              individual rights, organisational obligations,
              the Data Protection Board and penalties.
            </p>
            <p className="text-sm leading-8 text-slate-600 sm:text-base">
              The Rules provide implementation details for notices,
              consent, security, breach notifications, children's
              data, rights, SDFs, cross-border transfers and Board
              procedures.
            </p>

            <DataTable
              headers={["Instrument", "Purpose", "Legal Significance"]}
              rows={legalInstruments}
            />

            <Note warning>
              <strong>Important:</strong> The framework has phased
              commencement. The source PDF is dated 1 September 2026;
              it does not treat provisions scheduled for May 2027
              as already operative on that date.
            </Note>
          </Section>

          {/* 2 */}
          <Section number={2} title={topics[1]}>
            <p className="text-sm leading-7 text-slate-600">
              The uploaded guide identifies official MeitY,
              Government of India, India Code and CERT-In sources.
              Use authenticated legislation and current
              notifications for legal decisions.
            </p>

            <div className="space-y-3">
              {sources.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 p-4 text-sm font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-50"
                >
                  <span>{name}</span>
                  <ExternalLink size={17} className="shrink-0" />
                </a>
              ))}
            </div>
          </Section>

          {/* 3 */}
          <Section number={3} title={topics[2]}>
            <DataTable
              headers={["Date", "Event", "Practical Meaning"]}
              rows={[
                ["11 Aug 2023", "DPDP Act enacted", "The Act was enacted; commencement deferred under Section 1(2)."],
                ["3 Jan 2025", "Draft Rules published", "Public consultation stage."],
                ["13 Nov 2025", "Final Rules and commencement notification", "Phased rollout begins."],
                ["13 Nov 2025", "Act Sections 1(2), 2, 18–26, 35, 38–43, 44(1), 44(3)", "Specified Board, governance and miscellaneous provisions commence."],
                ["13 Nov 2025", "Rules 1, 2, 17–21", "Specified preliminary and Board-related Rules commence."],
                ["13 Nov 2026", "Act Sections 6(9), 27(1)(d) and Rule 4", "Consent Manager registration and specified Board-related provisions commence."],
                ["13 May 2027", "Main substantive Act provisions", "Processing, notice, consent, security, breach, rights, children, SDF and penalty provisions are scheduled to commence."],
                ["13 May 2027", "Rules 3, 5–16, 22, 23", "Remaining specified operational Rules are scheduled to commence."],
              ]}
            />

            <Note warning>
              <strong>As of 14 October 2026:</strong> The
              13 November 2026 and 13 May 2027 commencement
              milestones are future dates. Check for any later
              official amendments or notifications before making
              a compliance determination.
            </Note>
          </Section>

          {/* 4 */}
          <Section number={4} title={topics[3]}>
            <p className="text-sm leading-8 text-slate-600 sm:text-base">
              The DPDP Act regulates digital personal data
              processing in India and certain processing outside
              India connected with offering goods or services
              to individuals in India.
            </p>

            <DataTable
              headers={["Chapter", "Sections", "Subject"]}
              rows={[
                ["I", "1–3", "Preliminary definitions and scope"],
                ["II", "4–10", "Data Fiduciary obligations"],
                ["III", "11–15", "Data Principal rights and duties"],
                ["IV", "16–17", "Special provisions and exemptions"],
                ["V", "18–26", "Data Protection Board"],
                ["VI", "27–28", "Board powers and procedure"],
                ["VII", "29–32", "Appeals, mediation and undertakings"],
                ["VIII", "33–34", "Penalties"],
                ["IX", "35–44", "Miscellaneous and amendments"],
              ]}
            />

            <Note>
              Key roles include Data Principal, Data Fiduciary,
              Data Processor, Consent Manager, Significant Data
              Fiduciary and the Data Protection Board of India.
            </Note>
          </Section>

          {/* 5 */}
          <Section number={5} title={topics[4]}>
            <p className="text-sm leading-7 text-slate-600">
              Click any section to read its plain-English meaning
              and the related compliance focus. You can search by
              section number, subject or keyword.
            </p>

            <LegalCards data={actSections} prefix="Section" />
          </Section>

          {/* 6 */}
          <Section number={6} title={topics[5]}>
            <DataTable
              headers={["Requirement", "Legal Reference", "Implementation"]}
              rows={obligations}
            />

            <Note>
              Security safeguards, breach reporting, children's
              data and SDF duties are among the areas associated
              with the highest statutory penalty ceilings.
            </Note>
          </Section>

          {/* 7 */}
          <Section number={7} title={topics[6]}>
            <p className="text-sm leading-7 text-slate-600">
              The 2025 Rules translate the Act's requirements into
              operational processes. Open any Rule to see its
              explanation and implementation focus.
            </p>

            <LegalCards data={rules} prefix="Rule" />
          </Section>

          {/* 8 */}
          <Section number={8} title={topics[7]}>
            <DataTable
              headers={["Schedule", "Coverage", "Practical Significance"]}
              rows={scheduleRows}
            />
          </Section>

          {/* 9 */}
          <Section number={9} title={topics[8]}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-900 p-5 text-white">
                <Scale className="mb-3 text-cyan-400" size={26} />
                <p className="text-3xl font-extrabold">₹250 crore</p>
                <p className="mt-2 text-sm text-slate-300">
                  Highest listed statutory penalty ceiling
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-5">
                <AlertTriangle
                  className="mb-3 text-amber-500"
                  size={26}
                />
                <p className="text-lg font-bold text-slate-900">
                  Not an automatic fine
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Section 33 requires consideration of relevant
                  statutory factors.
                </p>
              </div>
            </div>

            <DataTable
              headers={["Legal Reference", "Non-Conformance", "Maximum"]}
              rows={penaltyRows}
            />

            <Note warning>
              Penalty assessment factors include nature, gravity,
              duration, data type, repetition, gain or loss,
              mitigation, proportionality, deterrence and likely
              impact. Section 33 is scheduled to commence on
              13 May 2027 under the notification described
              in the source guide.
            </Note>
          </Section>

          {/* 10 */}
          <Section number={10} title={topics[9]}>
            <div className="space-y-3">
              {[
                ["1", "Trigger", "Breach intimation, complaint, Government reference or other statutory trigger."],
                ["2", "Board assessment", "The Board assesses whether sufficient grounds exist."],
                ["3", "Inquiry", "Records, evidence and relevant persons may be examined under statutory powers."],
                ["4", "Hearing", "Relevant parties receive an opportunity to be heard."],
                ["5", "Order", "The matter may close or directions and penalties may follow."],
                ["6", "Appeal", "Appeal to the Appellate Tribunal within 60 days, subject to statutory conditions."],
                ["7", "Further legal route", "Further appeal provisions connect with the applicable tribunal framework."],
              ].map(([step, title, detail]) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-xl border border-slate-200 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-800">
                    {step}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{title}</p>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* 11 */}
          <Section number={11} title={topics[10]}>
            <p className="text-sm leading-7 text-slate-600">
              DPDP compliance does not eliminate obligations
              under other cyber, sectoral, contractual or
              public-information frameworks.
            </p>

            <DataTable
              headers={["Law / Instrument", "Why It Matters", "Compliance Action"]}
              rows={relatedLaws}
            />
          </Section>

          {/* 12 */}
          <Section number={12} title={topics[11]}>
            <DataTable
              headers={[
                "Issue",
                "DPDP Framework",
                "Other Framework",
                "Practical Approach",
              ]}
              rows={comparisonRows}
            />

            <Note>
              <strong>Breach reporting example:</strong> A single
              incident can create separate DPDP and CERT-In
              obligations, each with its own legal trigger,
              deadline and recipient.
            </Note>
          </Section>

          {/* 13 */}
          <Section number={13} title={topics[12]}>
            <p className="text-sm leading-7 text-slate-600">
              A workable compliance programme needs ownership,
              documents, controls and evidence across the business.
            </p>

            <DataTable
              headers={["Workstream", "Key Deliverables", "Evidence to Maintain"]}
              rows={workstreams}
            />
          </Section>

          {/* 14 */}
          <Section number={14} title={topics[13]}>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Critical", "Immediate risk reduction", "bg-red-50 text-red-800"],
                ["High", "Priority implementation", "bg-amber-50 text-amber-800"],
                ["Medium", "Structured preparation", "bg-cyan-50 text-cyan-800"],
              ].map(([label, detail, style]) => (
                <div
                  key={label}
                  className={`rounded-xl p-4 ${style}`}
                >
                  <p className="font-bold">{label}</p>
                  <p className="mt-1 text-sm">{detail}</p>
                </div>
              ))}
            </div>

            <DataTable
              headers={["Priority", "Area", "Recommended Preparation"]}
              rows={priorities}
            />
          </Section>

          {/* 15 */}
          <Section number={15} title={topics[14]}>
            <p className="text-sm leading-7 text-slate-600">
              Tick each item after reviewing actual implementation
              and evidence. This is a self-assessment aid, not
              a formal compliance certification.
            </p>

            <AuditChecklist />
          </Section>

          {/* 16 */}
          <Section number={16} title={topics[15]}>
            <BulletList
              items={[
                "Treat DPDP as a business-wide governance programme, not just an IT project.",
                "Start compliance preparation before the applicable commencement dates.",
                "Prioritise security, breach reporting, children's data and SDF obligations.",
                "Translate the Rules into notices, controls, procedures and evidence.",
                "Maintain separate CERT-In and sectoral reporting obligations.",
                "Use robust processor contracts for security, breach support and deletion.",
                "Base retention on purpose and applicable legal obligations.",
                "Maintain auditable evidence of notices, consent, rights requests, incidents, vendors and management approvals.",
              ]}
            />
          </Section>

          {/* 17 */}
          <Section number={17} title={topics[16]}>
            <p className="text-sm leading-7 text-slate-600">
              Quick reference to the legal consequences and
              operational timelines highlighted in the PDF.
            </p>

            <DataTable
              headers={["Reference", "Topic", "Key Point"]}
              rows={[
                ...penaltyRows,
                ["Section 33(2)", "Penalty assessment", "Gravity, data type, repetition, gain/loss, mitigation, proportionality and impact"],
                ["Section 29", "Appeal", "60-day window, subject to statutory conditions"],
                ["Rule 7", "Breach notification", "Affected individuals without delay; detailed Board information within 72 hours unless extended"],
                ["Rule 14", "Grievances", "Reasonable response period not exceeding 90 days"],
                ["Rule 6", "Security", "Specified safeguards and certain one-year retention requirements"],
              ]}
            />
          </Section>

          {/* 18 */}
          <Section number={18} title={topics[17]}>
            <BulletList
              items={[
                "Statutory penalty amounts are maximum ceilings, not automatic fines.",
                "The DPDP Rules, 2025 were notified on 13 November 2025, with phased commencement.",
                "This guide explains the law but does not reproduce the full statutory text.",
                "Sectoral laws, contracts, court orders and later Government notifications can add obligations.",
                "A future-commencing provision must not be described as already enforceable.",
                "Legal decisions should be based on authenticated legislation and current official notifications.",
              ]}
            />

            <Note warning>
              This is educational and compliance-reference
              material, not legal advice. The underlying Polivexa
              PDF reflects the position as of 1 September 2026.
              Verify subsequent legal changes before publication
              or regulatory reliance.
            </Note>
          </Section>

          {/* FINAL TAKEAWAY */}
          <div className="rounded-2xl bg-slate-900 p-7 text-white sm:p-9">
            <ShieldCheck size={32} className="mb-4 text-cyan-400" />

            <h2 className="text-2xl font-bold">
              From Legal Requirements to Practical Compliance
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Understanding DPDP is only the first step.
              Organisations should connect each applicable legal
              requirement to clear ownership, technical controls,
              documented processes, vendor contracts and
              auditable evidence.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
              >
                Talk to Polivexa
              </a>

              <a
                href="/dpdp-act-guide"
                className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore DPDP Act Guide
              </a>
            </div>
          </div>

          <div className="flex justify-center pt-3">
            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700"
            >
              <ArrowUp size={16} />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
