import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



import dpdpHero1 from "../assets/dpdp-hero-1.png";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const changeSlide = (direction) => {
    setCurrentSlide((prev) =>
      direction === "next" ? (prev + 1) % 2 : (prev + 1) % 2
    );
  };

  return (
    <section
      aria-label="Polivexa homepage highlights"
      className="relative w-full overflow-hidden bg-[#061126]"
    >
      {/*
        IMPORTANT:
        Same outer height for BOTH slides.

        Mobile: enough room for readable text.
        Desktop: matches the wide banner proportions.

        Slide 1 uses object-contain, never object-cover,
        so the image is not cropped.
      */}
      <div
        className="
          relative w-full
          h-[440px]
          sm:h-[520px]
          md:h-[560px]
          lg:h-[620px]
          xl:h-[680px]
        "
      >
        <AnimatePresence mode="wait">
          {/* SLIDE 1: FULL IMAGE — NO CROPPING */}
          {currentSlide === 0 && (
            <motion.div
              key="slide-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center bg-[#061126]"
            >
             <img
  src={dpdpHero1}
  alt="Polivexa DPDP Compliance and Data Protection Solutions"
  className="hidden h-full w-full object-contain md:block"
/>
              {/* The desktop artwork contains baked-in text; on narrow screens
                  reproduce its message as readable, responsive HTML. */}
              <div className="flex h-full w-full flex-col justify-center px-12 pb-9 pt-7 text-center text-white md:hidden">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-cyan-400">The real risk</p>
                <h2 className="text-[clamp(23px,6.5vw,34px)] font-bold leading-[1.14]">
                  Non-compliance can cost up to <span className="text-emerald-400">₹250 crore</span> per breach
                </h2>
                <p className="mx-auto mt-4 max-w-sm text-[13px] leading-[1.55] text-slate-300">
                  Protect data principal rights, manage consent, and maintain audit-ready compliance.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-cyan-500/30 bg-white/5 px-1 py-3"><strong className="block text-base text-white">₹250 Cr</strong><span className="mt-1 block text-[10px] leading-tight text-slate-300">Max penalty</span></div>
                  <div className="rounded-xl border border-cyan-500/30 bg-white/5 px-1 py-3"><strong className="block text-base text-white">22</strong><span className="mt-1 block text-[10px] leading-tight text-slate-300">Languages</span></div>
                  <div className="rounded-xl border border-cyan-500/30 bg-white/5 px-1 py-3"><strong className="block text-base text-white">72 hrs</strong><span className="mt-1 block text-[10px] leading-tight text-slate-300">Notification</span></div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SLIDE 2: RESPONSIVE CONTENT */}
          {currentSlide === 1 && (
            <motion.div
              key="slide-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="
                absolute inset-0
                flex items-center justify-center
                bg-gradient-to-br
                from-[#061126]
                via-[#0a1c3d]
                to-[#03101f]
                px-12 py-10
                sm:px-16
                md:px-20
              "
            >
              <div className="mx-auto w-full max-w-4xl text-center">
                <p
                  className="
                    mb-4
                    text-[10px] font-semibold uppercase
                    tracking-[0.2em] text-cyan-400
                    sm:text-sm sm:tracking-[0.3em]
                  "
                >
                  Privacy &amp; Data Security
                </p>

                <h2
                  className="
                    text-[clamp(26px,7vw,34px)] font-bold leading-tight text-white
                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                  "
                >
                  Protect Every
                  <span className="mt-1 block text-cyan-400">
                    Piece of Data.
                  </span>
                </h2>

                <p
                  className="
                    mx-auto mt-4 max-w-2xl
                    text-[13px] leading-6 text-slate-300
                    sm:text-base sm:leading-7
                    md:mt-6 md:text-lg md:leading-8
                  "
                >
                  Build stronger privacy frameworks, reduce compliance
                  risks, and create trust through responsible data
                  protection.
                </p>

                <a
                  href="/contact"
                  className="
                    mt-6 inline-flex items-center justify-center
                    rounded-full bg-cyan-400
                    px-6 py-3
                    text-sm font-semibold text-[#061126]
                    transition hover:bg-cyan-300
                    sm:text-base
                  "
                >
                  Talk to an Expert
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* NAVIGATION ARROWS */}
      <button
        type="button"
        onClick={() => changeSlide("previous")}
        aria-label="Previous slide"
        className="
          absolute left-2 top-1/2 z-20
          flex h-8 w-8 -translate-y-1/2
          items-center justify-center
          rounded-full border border-white/20
          bg-black/50 text-white backdrop-blur-sm
          transition hover:bg-black/70
          sm:left-4 sm:h-11 sm:w-11
        "
      >
        <ChevronLeft size={19} />
      </button>

      <button
        type="button"
        onClick={() => changeSlide("next")}
        aria-label="Next slide"
        className="
          absolute right-2 top-1/2 z-20
          flex h-8 w-8 -translate-y-1/2
          items-center justify-center
          rounded-full border border-white/20
          bg-black/50 text-white backdrop-blur-sm
          transition hover:bg-black/70
          sm:right-4 sm:h-11 sm:w-11
        "
      >
        <ChevronRight size={19} />
      </button>

      {/* SLIDE INDICATORS */}
      <div
        className="
          absolute bottom-4 left-1/2 z-20
          flex -translate-x-1/2 items-center gap-2
          sm:bottom-5
        "
      >
        <button
          type="button"
          onClick={() => setCurrentSlide(0)}
          aria-label="Show first slide"
          aria-current={currentSlide === 0 ? "true" : undefined}
          className={`h-2 rounded-full transition-all ${
            currentSlide === 0
              ? "w-7 bg-cyan-400"
              : "w-2 bg-white/50"
          }`}
        />

        <button
          type="button"
          onClick={() => setCurrentSlide(1)}
          aria-label="Show second slide"
          aria-current={currentSlide === 1 ? "true" : undefined}
          className={`h-2 rounded-full transition-all ${
            currentSlide === 1
              ? "w-7 bg-cyan-400"
              : "w-2 bg-white/50"
          }`}
        />
      </div>
    </section>
  );
}

export default Hero;