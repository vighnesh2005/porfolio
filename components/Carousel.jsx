"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const variants = {
  enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction < 0 ? 1000 : -1000, opacity: 0 })
};

export default function Carousel({ images = [], alt = "", className = "", imageClassName = "" }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const go = useCallback((dir) => {
    setDirection(dir);
    setIndex((prev) => {
      const next = (prev + dir + images.length) % images.length;
      return next;
    });
  }, [images.length]);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  // Keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, go]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-sm border-2 border-[#c5a059] h-full group cursor-pointer" onClick={openLightbox}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={index}
            src={images[index]}
            alt={alt}
            className={`w-full h-full object-cover select-none bg-white ${imageClassName}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            draggable={false}
          />
        </AnimatePresence>

        {/* Hover Overlay hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 text-white/80 bg-black/50 px-3 py-1 rounded-full text-sm pointer-events-none transition-opacity duration-300">
            Click to Expand
          </span>
        </div>

        {/* Carousel Controls (only if > 1 image) */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-[#F5D04C] w-8 h-8 rounded-full grid place-items-center border border-[#F5D04C]/60 z-10 transition-colors"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); go(1); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-[#F5D04C] w-8 h-8 rounded-full grid place-items-center border border-[#F5D04C]/60 z-10 transition-colors"
            >
              ›
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-2 py-1 rounded-full border border-[#F5D04C]/50 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to image ${i + 1}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? "bg-[#F5D04C] w-6" : "bg-[#F5D04C]/50"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-[#F5D04C] transition-colors p-2 z-50 bg-black/20 rounded-full backdrop-blur-sm"
            >
              <X size={32} />
            </button>

            {/* Lightbox Content */}
            <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={index}
                  src={images[index]}
                  alt={alt}
                  className="max-w-full max-h-full object-contain shadow-2xl border-2 border-[#F5D04C]/20 rounded-sm bg-black"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  draggable={false}
                />
              </AnimatePresence>

              {/* Lightbox Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => go(-1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-[#F5D04C] bg-black/20 hover:bg-black/50 p-3 rounded-full transition-all backdrop-blur-sm"
                  >
                    <ChevronLeft size={40} />
                  </button>
                  <button
                    onClick={() => go(1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-[#F5D04C] bg-black/20 hover:bg-black/50 p-3 rounded-full transition-all backdrop-blur-sm"
                  >
                    <ChevronRight size={40} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 font-cinzel tracking-widest bg-black/40 px-4 py-2 rounded-full border border-white/10">
                {index + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
