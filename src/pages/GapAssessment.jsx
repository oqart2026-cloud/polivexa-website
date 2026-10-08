import { useState } from "react";
import {
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  ClipboardCheck,
  FileCheck2,
  UserCheck,
  Database,
  AlertTriangle,
  Building2,
  FileText,
  GraduationCap,
  MonitorCheck,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "DPDP Readiness Assessment",
    icon: ClipboardCheck,
    description:
      "Assess your organization's current privacy practices and identify areas that require attention for DPDP readiness. The assessment helps organizations understand their existing privacy position and identify important compliance gaps.",
  },
  {
    number: "02",
    title: "DPDP Compliance Implementation",
    icon: FileCheck2,
    description:
      "Support organizations in implementing practical privacy and data protection measures based on identified requirements and gaps. The focus is on building a structured and sustainable compliance framework.",
  },
  {
    number: "03",
    title: "DPO / Privacy Officer as a Service",
    icon: UserCheck,
    description:
      "Get dedicated privacy support for managing and strengthening your organization's privacy and data protection activities. This service provides ongoing guidance for privacy-related responsibilities.",
  },
  {
    number: "04",
    title: "Data Mapping & Inventory",
    icon: Database,
    description:
      "Understand what personal data your organization collects, processes, stores, and shares. Data mapping and inventory help create better visibility into data flows and privacy responsibilities.",
  },
  {
    number: "05",
    title: "Privacy Risk & Impact Assessment",
    icon: AlertTriangle,
    description:
      "Identify privacy risks associated with business processes, systems, and data processing activities. Assess potential impacts and establish appropriate measures to reduce privacy-related risks.",
  },
  {
    number: "06",
    title: "Vendor Privacy Assessment",
    icon: Building2,
    description:
      "Review privacy and data protection considerations associated with third-party vendors and service providers. This helps organizations understand and manage privacy risks across their vendor ecosystem.",
  },
  {
    number: "07",
    title: "Privacy Policies & SOPs",
    icon: FileText,
    description:
      "Develop and strengthen privacy policies, procedures, and standard operating processes to support consistent data protection practices across the organization.",
  },
  {
    number: "08",
    title: "Training & Awareness",
    icon: GraduationCap,
    description:
      "Build privacy awareness among employees and stakeholders through practical training and awareness initiatives. The objective is to promote responsible handling of personal data throughout the organization.",
  },
  {
    number: "09",
    title: "DPDP Compliance Platform",
    icon: MonitorCheck,
    description:
      "Support organizations with structured technology-driven approaches for managing privacy and compliance activities. A compliance platform can help organize privacy workflows, documentation, assessments, and ongoing activities.",
  },
  {
    number: "10",
    title: "Ongoing Privacy Advisory",
    icon: Headphones,
    description:
      "Receive continued guidance on privacy and data protection matters as your organization, processes, technology, and regulatory requirements evolve.",
  },
];

function GapAssessment() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#071126] pt-36 pb-24 lg:pt-44 lg:pb-28">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >

            {/* Label */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5">
              <ShieldCheck size={18} className="text-cyan-400" />

              <span className="text-sm font-semibold text-cyan-300">
                DPDP Compliance & Privacy Solutions
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              DPDP Gap
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Assessment
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Identify privacy gaps, understand your current readiness,
              and build a stronger foundation for data protection and
              DPDP compliance.
            </p>

          </motion.div>

        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
                Understand Your Readiness
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Know where you stand before you move forward.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                A structured assessment helps organizations understand
                their current privacy practices, identify gaps, evaluate
                risks, and establish a clear direction for strengthening
                their data protection framework.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Identify privacy and compliance gaps",
                  "Understand personal data processing activities",
                  "Evaluate privacy-related risks",
                  "Build a structured improvement roadmap",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-cyan-500"
                    />

                    <span className="text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </motion.div>


            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >

              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#071126] via-[#0b1b3b] to-[#071126] p-8 shadow-2xl md:p-10">

                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-cyan-400/10" />

                <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full border border-blue-400/10" />

                <div className="relative">

                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10">
                    <ShieldCheck
                      size={34}
                      className="text-cyan-400"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    A Structured Privacy Assessment
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    From understanding your data environment to
                    identifying risks and improvement opportunities,
                    the assessment provides a practical starting point
                    for your privacy journey.
                  </p>

                  <div className="mt-8 h-px bg-gradient-to-r from-cyan-400/50 via-blue-400/20 to-transparent" />

                  <p className="mt-6 text-sm font-medium text-cyan-300">
                    Assess. Understand. Strengthen.
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ACCORDION ================= */}
      <section className="bg-slate-50 py-20 lg:py-28">

        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Our Services
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Privacy & Data Protection Services
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore the services available to help your organization
              assess, strengthen, and continuously improve its privacy
              framework.
            </p>

          </div>


          {/* Accordion */}
          <div className="space-y-4">

            {services.map((service, index) => {

              const Icon = service.icon;
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-cyan-300 shadow-lg shadow-cyan-100/40"
                      : "border-slate-200 hover:border-cyan-200"
                  }`}
                >

                  {/* Header */}
                  <button
                    onClick={() => toggleService(index)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >

                    {/* Number */}
                    <span
                      className={`hidden text-sm font-bold sm:block ${
                        isOpen
                          ? "text-cyan-500"
                          : "text-slate-400"
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Icon */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${
                        isOpen
                          ? "bg-cyan-50 text-cyan-600"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    {/* Title */}
                    <span
                      className={`flex-1 text-base font-bold sm:text-lg ${
                        isOpen
                          ? "text-cyan-700"
                          : "text-slate-800"
                      }`}
                    >
                      {service.title}
                    </span>

                    {/* Arrow */}
                    <ChevronDown
                      size={22}
                      className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-cyan-500" : ""
                      }`}
                    />

                  </button>


                  {/* Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >

                    <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pl-[6.25rem]">

                      <p className="max-w-3xl text-base leading-7 text-slate-600">
                        {service.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-600">
                        <CheckCircle2 size={17} />
                        Privacy-focused support
                      </div>

                    </div>

                  </motion.div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* ================= PROCESS ================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              How We Help
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
              A practical approach to privacy readiness
            </h2>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Understand",
                text: "Understand your organization, data environment, processes, and privacy requirements.",
              },
              {
                number: "02",
                title: "Assess",
                text: "Identify compliance gaps, privacy risks, and areas that require improvement.",
              },
              {
                number: "03",
                title: "Strengthen",
                text: "Create a practical roadmap to improve privacy practices and data protection.",
              },
            ].map((step) => (

              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
              >

                <span className="text-sm font-bold text-cyan-500">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#071126] py-20 lg:py-24">

        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">

          <ShieldCheck
            size={42}
            className="mx-auto text-cyan-400"
          />

          <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
            Ready to strengthen your privacy framework?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Start with a structured assessment and understand the
            next steps for improving your organization's data protection
            practices.
          </p>

          <a
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
          >
            Talk to an Expert
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

        </div>

      </section>

    </div>
  );
}

export default GapAssessment;