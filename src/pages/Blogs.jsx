
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  ShieldCheck,
  FileText,
  ArrowRight,
  Calendar,
} from "lucide-react";

const blogs = [
  {
    icon: ShieldCheck,
    category: "DPDP",
    title: "Understanding DPDP Compliance",
    description:
      "A practical overview of the key areas organizations should consider when preparing for data protection requirements.",
    slug: "understanding-dpdp-compliance",
  },
  {
    icon: FileText,
    category: "Privacy",
    title: "Why Privacy Policies Matter",
    description:
      "Understand how clear privacy documentation can help organizations communicate responsible data handling practices.",
    slug: "why-privacy-policies-matter",
  },
  {
    icon: BookOpen,
    category: "Data Protection",
    title: "Building a Stronger Data Protection Framework",
    description:
      "Explore practical steps organizations can take to understand, assess and strengthen their data protection processes.",
    slug: "data-protection-framework",
  },
];

function Blogs() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 pb-24 pt-40">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              BLOGS & UPDATES
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              Privacy Insights &
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Data Protection Updates
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Explore insights, practical guidance and updates around
              privacy, DPDP compliance and responsible data protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-slate-950 p-8 md:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10">
                <ShieldCheck className="text-cyan-300" size={28} />
              </div>

              <div className="mt-7 flex items-center gap-3 text-sm text-cyan-300">
                <span>Featured Insight</span>
                <span className="h-1 w-1 rounded-full bg-cyan-300" />
                <span>DPDP</span>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Preparing Your Organization for Data Protection
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Understanding your data, reviewing existing practices and
                identifying areas for improvement are important steps
                towards building a structured privacy framework.
              </p>

              <Link
                to="/blogs/understanding-dpdp-compliance"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                Read More
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <div>
              <span className="text-sm font-semibold tracking-wider text-cyan-600">
                LATEST INSIGHTS
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                Knowledge That Helps You
                <span className="block text-cyan-600">
                  Navigate Privacy
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Privacy and data protection are continuously evolving.
                Our updates aim to simplify important concepts and
                provide practical perspectives for organizations.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
                <Calendar size={18} className="text-cyan-600" />
                <span>Insights & updates from Polivexa</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold tracking-wider text-cyan-600">
              EXPLORE
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Latest Articles
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              Practical perspectives on privacy, compliance and data
              protection.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => {
              const Icon = blog.icon;

              return (
                <motion.article
                  key={blog.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                      <Icon className="text-cyan-600" size={25} />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {blog.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {blog.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {blog.description}
                  </p>

                  {/* Clickable Read Article Link */}
                  <Link
                    to={`/blogs/${blog.slug}`}
                    aria-label={`Read article: ${blog.title}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
                  >
                    Read Article
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Stay Informed About
            <span className="block text-cyan-300">
              Privacy & Data Protection
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            Follow Polivexa for practical insights and updates around
            privacy and data protection.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Talk to Us
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Blogs;
