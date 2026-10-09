import { motion } from "framer-motion";
import {
  ClipboardCheck,
  ShieldCheck,
  FileSearch,
  Scale,
  Database,
  UserCheck,
} from "lucide-react";

function ServicesSection() {
  const services = [
    {
      icon: ClipboardCheck,
      title: "DPDP Compliance",
      text: "Assess your current privacy practices and identify areas that require attention under the DPDP framework.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy Compliance",
      text: "Build practical privacy processes and controls to support responsible handling of personal data.",
    },
    {
      icon: FileSearch,
      title: "Data Protection Advisory",
      text: "Get structured guidance on data protection requirements and privacy-related business processes.",
    },
    {
      icon: Scale,
      title: "Policy & Documentation",
      text: "Create and organize privacy-related policies, procedures and documentation for your organization.",
    },
    {
      icon: Database,
      title: "Data Mapping & Review",
      text: "Understand how personal data moves through your organization and identify potential privacy risks.",
    },
    {
      icon: UserCheck,
      title: "Privacy Awareness",
      text: "Help teams understand responsible data handling and build a stronger privacy-conscious culture.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Privacy & Data Protection
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Practical solutions designed to help organizations understand,
            manage and strengthen their data protection practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 transition-all duration-300 group-hover:bg-cyan-500">
                  <Icon
                    size={27}
                    strokeWidth={1.7}
                    className="text-cyan-300 transition-colors group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {service.text}
                </p>

                <a
                  href="/services"
                  className="mt-5 inline-flex text-sm font-semibold text-cyan-600 transition-colors hover:text-blue-600"
                >
                  Learn More →
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;