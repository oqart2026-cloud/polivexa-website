import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import dpdpHero1 from "../assets/dpdp-hero-1.png";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // First image stays for 5 seconds
  // Then it can move to the next slide
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, currentSlide === 0 ? 5000 : 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="relative w-full overflow-hidden bg-[#061126]">
      <AnimatePresence mode="wait">

        {/* ================= FIRST SLIDE ================= */}
        {currentSlide === 0 && (
          <motion.div
            key="slide-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-full"
          >
            <img
              src={dpdpHero1}
              alt="DPDP Compliance and Data Protection"
              className="block h-auto w-full"
            />
          </motion.div>
        )}

        {/* ================= SECOND SLIDE ================= */}
        {currentSlide === 1 && (
          <motion.div
            key="slide-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex min-h-[500px] w-full items-center justify-center bg-gradient-to-br from-[#061126] via-[#0a1c3d] to-[#03101f]"
          >
            <div className="px-6 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Privacy & Data Security
              </p>

              <h2 className="text-4xl font-bold text-white md:text-6xl">
                Protect Every
                <span className="block text-cyan-400">
                  Piece of Data.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Build stronger privacy frameworks, reduce compliance risks,
                and create trust through responsible data protection.
              </p>
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* Previous Button */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? 1 : 0))
        }
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition hover:bg-black/60"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next Button */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? 1 : 0))
        }
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition hover:bg-black/60"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => setCurrentSlide(0)}
          className={`h-2.5 rounded-full transition-all ${
            currentSlide === 0
              ? "w-8 bg-cyan-400"
              : "w-2.5 bg-white/40"
          }`}
          aria-label="Slide 1"
        />

        <button
          onClick={() => setCurrentSlide(1)}
          className={`h-2.5 rounded-full transition-all ${
            currentSlide === 1
              ? "w-8 bg-cyan-400"
              : "w-2.5 bg-white/40"
          }`}
          aria-label="Slide 2"
        />
      </div>
    </section>
  );
}

export default Hero;