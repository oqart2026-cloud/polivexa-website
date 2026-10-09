import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import dpdpHero1 from "../assets/dpdp-hero-1.png";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => {
      if (direction === "next") return prev === 0 ? 1 : 0;
      return prev === 0 ? 1 : 0;
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#061126]">
      <AnimatePresence mode="wait">
        {/* SLIDE 1: FULL IMAGE */}
        {currentSlide === 0 && (
          <motion.div
            key="slide-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full"
          >
            <img
              src={dpdpHero1}
              alt="Polivexa DPDP Compliance and Data Protection Solutions"
              fetchPriority="high"
              className="block h-auto w-full max-w-full object-contain"
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        )}

        {/* SLIDE 2: RESPONSIVE TEXT */}
        {currentSlide === 1 && (
          <motion.div
            key="slide-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-[390px] w-full items-center justify-center bg-gradient-to-br from-[#061126] via-[#0a1c3d] to-[#03101f] px-14 py-14 sm:min-h-[430px] sm:px-16 md:min-h-[500px] md:px-20"
          >
            <div className="mx-auto w-full max-w-4xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
                Privacy &amp; Data Security
              </p>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">
                Protect Every
                <span className="mt-1 block text-cyan-400">Piece of Data.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:mt-6 md:text-lg md:leading-8">
                Build stronger privacy frameworks, reduce compliance risks, and
                create trust through responsible data protection.
              </p>

              <a
                href="/contact"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#061126] transition hover:bg-cyan-300 sm:text-base"
              >
                Talk to an Expert
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SLIDE NAVIGATION ARROWS */}
      <button
        type="button"
        onClick={() => changeSlide("previous")}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm sm:left-4 sm:h-11 sm:w-11"
      >
        <ChevronLeft size={19} />
      </button>

      <button
        type="button"
        onClick={() => changeSlide("next")}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm sm:right-4 sm:h-11 sm:w-11"
      >
        <ChevronRight size={19} />
      </button>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-5">
        <button
          type="button"
          onClick={() => setCurrentSlide(0)}
          aria-label="Show first slide"
          className={`h-2 rounded-full transition-all ${
            currentSlide === 0 ? "w-7 bg-cyan-400" : "w-2 bg-white/50"
          }`}
        />

        <button
          type="button"
          onClick={() => setCurrentSlide(1)}
          aria-label="Show second slide"
          className={`h-2 rounded-full transition-all ${
            currentSlide === 1 ? "w-7 bg-cyan-400" : "w-2 bg-white/50"
          }`}
        />
      </div>
    </section>
  );
}

export default Hero;
