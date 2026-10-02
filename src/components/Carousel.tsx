import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Img from "@/components/Img";
import { EASE } from "@/lib/lang";

interface CarouselProps {
  images: string[];
  alt: string;
  label?: string;
}

const variants = {
  enter: (d: number) => ({ x: d >= 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d >= 0 ? "-100%" : "100%", opacity: 0 }),
};

/** Carosello di immagini: scorre da solo, con frecce, puntini e swipe. */
export default function Carousel({ images, alt, label }: CarouselProps) {
  const n = images.length;
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (d: number) => setState(([i]) => [(i + d + n) % n, d]),
    [n]
  );

  useEffect(() => {
    if (paused || n < 2) return;
    const t = setInterval(() => go(1), 3500);
    return () => clearInterval(t);
  }, [paused, n, go]);

  const arrow =
    "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-lift transition-all duration-300 hover:scale-105 md:opacity-0 md:group-hover:opacity-100";

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden bg-[#efede8]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} custom={dir} mode="popLayout">
        <motion.div
          key={index}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: EASE }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) go(1);
            else if (info.offset.x > 50) go(-1);
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <Img
            src={images[index]}
            alt={`${alt} ${index + 1}/${n}`}
            label={label}
            className="h-full w-full object-contain p-3"
          />
        </motion.div>
      </AnimatePresence>

      {n > 1 && (
        <>
          <button type="button" aria-label="Precedente" onClick={() => go(-1)} className={`${arrow} left-3`}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Successiva" onClick={() => go(1)} className={`${arrow} right-3`}>
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-1.5 backdrop-blur-md">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Immagine ${i + 1}`}
                onClick={() => setState([i, i >= index ? 1 : -1])}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
