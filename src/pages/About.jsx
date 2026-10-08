import { motion } from "framer-motion";
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  Lightbulb,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import abhishekImage from "../assets/abhishek.jpg";
import ajayImage from "../assets/ajay.jpeg";
import meghaImage from "../assets/megha.jpeg";
import saritaImage from "../assets/sarita.jpeg";
import ujwalImage from "../assets/ujwal.jpeg";

/* =========================================================
   FOUNDER / CO-FOUNDER CARD
========================================================= */

function FounderCard({
  name,
  designation,
  image,
  reverse = false,
  children,
  tags = [],
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="grid lg:grid-cols-5">
        {/* =====================================================
            IMAGE
        ===================================================== */}
        <div
          className={`relative h-[480px] overflow-hidden bg-[#06152f] sm:h-[560px] lg:col-span-2 ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <img
            src={image}
            alt={`${name} - ${designation}`}
            className="h-full w-full object-cover object-top"
          />

          {/* Image Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06152f] via-[#06152f]/80 to-transparent px-7 pb-7 pt-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              {designation}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              {name}
            </h3>
          </div>
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}
        <div
          className={`flex flex-col justify-center p-7 sm:p-10 lg:col-span-3 lg:p-12 ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-600 sm:text-sm">
            {designation}
          </p>

          <h3 className="mt-3 text-3xl font-bold leading-tight text-[#06152f] sm:text-4xl">
            {name}
          </h3>

          {/* Biography */}
          <div className="mt-7 space-y-5 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
            {children}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-700 sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

function About() {
  return (
    <div className="bg-white text-slate-900">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#06152f] py-24 sm:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              <ShieldCheck size={17} />
              ABOUT POLIVEXA
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building Trust Through{" "}
              <span className="text-cyan-300">
                Better Data Protection
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Polivexa is focused on helping organizations strengthen their
              approach to data protection, privacy, cybersecurity and
              compliance through practical and business-focused solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ===================================================== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-bold tracking-[0.2em] text-cyan-600">
                WHO WE ARE
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06152f] sm:text-4xl">
                Practical Solutions for a Changing Digital World
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                At Polivexa, we understand that data protection and
                cybersecurity are not only about technology. They are also
                about people, processes, governance and building trust.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Our approach focuses on understanding an organization's
                requirements, identifying gaps and providing practical
                solutions that support stronger privacy, security and
                compliance frameworks.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                We believe that effective compliance should be clear,
                practical and aligned with the organization's business
                objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-[#06152f] p-8 sm:p-10"
            >
              <ShieldCheck size={45} className="text-cyan-300" />

              <h3 className="mt-6 text-2xl font-bold text-white">
                Data. Privacy. Trust.
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                We work towards creating stronger security and privacy
                practices that help organizations protect information,
                manage risks and build long-term trust with their customers
                and stakeholders.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <ShieldCheck className="text-cyan-300" size={25} />
                  <p className="mt-3 font-semibold text-white">
                    Security
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Users className="text-cyan-300" size={25} />
                  <p className="mt-3 font-semibold text-white">
                    People
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Target className="text-cyan-300" size={25} />
                  <p className="mt-3 font-semibold text-white">
                    Strategy
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <TrendingUp className="text-cyan-300" size={25} />
                  <p className="mt-3 font-semibold text-white">
                    Growth
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOUNDERS
      ===================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-cyan-600">
              LEADERSHIP
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#06152f] sm:text-4xl lg:text-5xl">
              Meet Our Founders
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Meet the leadership team driving the vision, growth and
              direction of Polivexa.
            </p>
          </div>

          {/* =================================================
              1. ABHISHEK BHARTI — FOUNDER
          ================================================= */}
          <div className="mt-14">
            <FounderCard
              name="Abhishek Bharti"
              designation="CTO"
              image={abhishekImage}
              tags={[
                "Entrepreneur",
                "Innovation",
                "Technology",
                "Sustainability",
              ]}
            >
              <p>
                He was named Times Man of the Year in 2019 for his
                groundbreaking work in AgroTech. He founded Biogreen to
                connect consumers with natural and organic products,
                blending technology and sustainability to empower
                eco-conscious choices.
              </p>

              <p>
                Abhishek's vision for Biogreen goes beyond offering organic
                products; it is about creating a community focused on
                sustainability.
              </p>

              <p>
                By empowering individuals to make conscious choices, he has
                made a significant impact on the environment and continues
                to support both their health and the planet.
              </p>
            </FounderCard>
          </div>

          {/* =================================================
              2. AJAY KUMAR PASWAN — CO-FOUNDER
          ================================================= */}
          <div className="mt-10">
            <FounderCard
              name="Ajay Kumar Paswan"
              designation="Co-Founder"
              image={ajayImage}
              reverse
              tags={[
                "Leadership",
                "Media",
                "International Trade",
                "Social Development",
              ]}
            >
              <p>
                Mr. Ajay Kumar Paswan is a young, dynamic, and
                forward-looking professional with extensive experience in
                media, international trade, renewable energy, government
                projects, and social development initiatives. A postgraduate
                from the University of Allahabad, he has built a diverse
                professional career through leadership roles across multiple
                sectors.
              </p>

              <p>
                From 2010 to 2013, Mr. Paswan served as the Managing Director
                of <strong>DAP Pvt. Ltd.</strong>, where he contributed to
                the company's strategic growth and business development.
              </p>

              <p>
                Between 2013 and 2015, he served as the Managing Director of{" "}
                <strong>Geekfix International Pvt. Ltd.</strong>, overseeing
                projects related to renewable energy and electrification
                implemented in collaboration with state governments in Uttar
                Pradesh and other parts of India.
              </p>

              <p>
                Mr. Paswan is also associated with the{" "}
                <strong>Rashtriya Vikas Samiti</strong>, where he serves as
                Chairman and contributes to various government initiatives
                and development-oriented programmes.
              </p>

              <p>
                In the field of journalism and digital media, he is the
                Publisher and Editor-in-Chief of{" "}
                <strong>Newsline Network</strong>, a media organisation with
                a presence across several states of India.
              </p>

              <p>
                He is also the Chief Executive Officer of{" "}
                <strong>Link Globe Line LLP</strong>, an international
                trading company engaged in cross-border business and trade
                activities with a presence in multiple countries.
              </p>

              <p>
                Known for his optimism, strategic vision, and commitment to
                public and business development, Mr. Ajay Kumar Paswan
                continues to work towards creating meaningful opportunities
                in media, commerce, infrastructure, and social development.
              </p>
            </FounderCard>
          </div>

          {/* =================================================
              3. MEGHA KUMARI — CO-FOUNDER
          ================================================= */}
          <div className="mt-10">
            <FounderCard
              name="Megha Kumari"
              designation="Co-Founder"
              image={meghaImage}
              tags={[
                "Leadership",
                "Strategy",
                "Collaboration",
                "Innovation",
              ]}
            >
              <p>
                Megha Kumari is a passionate and result-oriented professional
                having Postgraduate qualifications.
              </p>

              <p>
                She has demonstrated a strong ability to work across diverse
                teams, support strategic decision-making, and contribute to
                business transformation initiatives.
              </p>

              <p>
                With exposure to stakeholder management, process improvement,
                and organizational development, she is committed to driving
                growth through innovation and collaboration.
              </p>

              <p>
                She believes in continuous learning and creating sustainable
                value through leadership and excellence.
              </p>
            </FounderCard>
          </div>

          {/* =================================================
              4. SARITA SINGH — CO-FOUNDER
          ================================================= */}
          <div className="mt-10">
            <FounderCard
              name="Sarita Singh"
              designation="Co-Founder"
              image={saritaImage}
              reverse
              tags={[
                "Public Service",
                "Social Impact",
                "Leadership",
                "Community Development",
              ]}
            >
              <p>
                Sarita Singh is a postgraduate professional with over 15 years
                of experience in social work and public service.
              </p>

              <p>
                She has served as a Member of the Legislative Assembly (MLA)
                from Rohtash Nagar, Delhi. She has also served as
                Parliamentary Secretary for Employment, working towards
                employment and opportunity-related initiatives.
              </p>

              <p>
                Her work has been strongly focused on the empowerment of
                women and development of youth. She has actively supported
                job fairs, student counselling and employment-oriented
                programmes.
              </p>

              <p>
                She has promoted women's safety, self-defence, education and
                empowerment initiatives, along with community outreach,
                public engagement and grassroots social development.
              </p>

              <p>
                Sarita Singh is a confident communicator and leader with
                strengths in programme coordination, leadership and public
                relations. She is known for her commitment, compassion,
                determination and people-centric approach.
              </p>

              <p>
                Her vision is to create meaningful opportunities for women,
                youth and communities and contribute to inclusive social
                development.
              </p>
            </FounderCard>
          </div>

          {/* =================================================
              5. UJJAWAL RAJ — CO-FOUNDER
          ================================================= */}
          <div className="mt-10">
            <FounderCard
              name="Ujjawal Raj"
              designation="Co-Founder"
              image={ujwalImage}
              tags={[
                "Young Achiever",
                "Entrepreneur",
                "Business & Operations",
                "Technology",
              ]}
            >
              <p>
                Ujjawal Raj is a young entrepreneur and business professional
                known for his work in entrepreneurship, technology,
                operations, and innovation. With a strong focus on building
                scalable business solutions, he has been actively involved
                in developing ventures that connect technology with
                real-world business and consumer needs.
              </p>

              <p>
                He has played an important role in the development of{" "}
                <strong>Biosprout Technologies Private Limited</strong> and
                its digital initiatives, including{" "}
                <strong>OQART</strong>, a platform focused on promoting
                authentic organic and GI-certified products and creating
                better market access for producers and consumers.
              </p>

              <p>
                Ujjawal's professional journey reflects his interest in{" "}
                <em>
                  entrepreneurship, digital transformation, business
                  operations, process development, and technology-driven
                  solutions
                </em>
                . He has also been involved in startup development, team
                coordination, project execution, compliance initiatives, and
                building structured operational systems.
              </p>

              <p>
                His work has received recognition through the{" "}
                <strong>Young Achiever Award</strong>, acknowledging his
                contribution and achievements at a young stage of his
                professional journey.
              </p>

              <p>
                With a vision of creating meaningful businesses that combine
                innovation, technology, and social impact, Ujjawal Raj
                continues to work toward building sustainable ventures and
                contributing to India's growing startup ecosystem.
              </p>
            </FounderCard>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ===================================================== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-[#06152f] p-8 sm:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                <Target className="text-cyan-300" size={28} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-white">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                To help organizations build stronger privacy, security and
                compliance practices through practical guidance, innovation
                and collaborative solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                <Eye className="text-cyan-600" size={28} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#06152f]">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To create a trusted digital ecosystem where organizations
                can confidently protect data, manage risks and embrace
                responsible innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-cyan-600">
              OUR VALUES
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#06152f] sm:text-4xl">
              What Drives Us
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Trust",
                text: "We believe trust is the foundation of every strong business relationship.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                text: "We continuously look for smarter and more practical ways to solve problems.",
              },
              {
                icon: Users,
                title: "Collaboration",
                text: "We work closely with teams and stakeholders to create meaningful outcomes.",
              },
              {
                icon: TrendingUp,
                title: "Excellence",
                text: "We focus on continuous improvement and delivering sustainable value.",
              },
            ].map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon className="text-cyan-600" size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#06152f]">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#06152f] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's Build a More Trusted Digital Future
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Connect with Polivexa to discuss your privacy, cybersecurity and
            compliance requirements.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-[#06152f] transition hover:bg-cyan-300"
          >
            Talk to an Expert
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;