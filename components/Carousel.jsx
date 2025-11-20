"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: (direction) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction < 0 ? 80 : -80, opacity: 0 })
};

export default function Carousel({ images = [], alt = "", className = "" }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!images || images.length === 0) return null;

  const go = (dir) => {
    setDirection(dir);
    setIndex((prev) => {
      const next = (prev + dir + images.length) % images.length;
      return next;
    });
  };

  return (
    <div className={`relative w-full sm:max-w-[360px] ${className}`}>
      <div className="relative overflow-hidden rounded-2xl border-2 border-peach/60">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={index}
            src={images[index]}
            alt={alt}
            className="w-full h-40 xs:h-44 sm:h-56 md:h-60 object-cover select-none"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            draggable={false}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-peach w-8 h-8 rounded-full grid place-items-center border border-peach/60"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-peach w-8 h-8 rounded-full grid place-items-center border border-peach/60"
            >
              ›
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-2 py-1 rounded-full border border-peach/50">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to image ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === index ? "bg-peach w-6" : "bg-peach/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
