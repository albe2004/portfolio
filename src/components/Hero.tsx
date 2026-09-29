import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, Asterisk, Download } from "lucide-react";
import Img from "@/components/Img";
import { EASE, useLang } from "@/lib/lang";

interface HeroProps {
  onCv: () => void;
}

function TitleWord({
  word,
  outline,
  baseDelay,
}: {
  word: string;
  outline?: boolean;
  baseDelay: number;
}) {
  return (
    <span className="block whitespace-nowrap">
      {word.split("").map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.06em] align-bottom">
          <motion.span
            className={`inline-block font-extrabold ${outline ? "text-outline" : "text-ink"}`}
            initial={{ y: "112%", rotate: 6 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: baseDelay + i * 0.045, ease: EASE }}
          >
            {ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function TiltArt() {
  const { strings: S } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 120, damping: 16 });
  const ry = useSpring(useMotionValue(0), { stiffness: 120, damping: 16 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 9);
    rx.set(-py * 9);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      initial={{ opacity: 0, y: 60, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      className="relative mx-auto w-full max-w-md will-change-transform lg:max-w-none"
    >
      <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#ede7fc_0%,#f3effd_45%,#faf8ff_100%)] p-3 shadow-lift">
        <Img
          src="img/hero-art.png"
          alt="Abstract violet 3D artwork"
          label="Andrea Alberici — Art Direction"
          priority
          className="aspect-[4/5] w-full rounded-[22px] object-cover"
        />
        {/* floating chips */}
        <span className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/85 px-3.5 py-2 text-[11px] font-bold text-ink shadow-card backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-violet" />
          start2impact — UX/UI & AI
        </span>
        <span className="absolute bottom-6 left-6 rounded-full bg-ink px-4 py-2.5 text-[11px] font-bold text-paper shadow-lift">
          {S.hero.cardTag}
        </span>
      </div>

      {/* rotating volt badge */}
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1.1 }}
        className="absolute -right-5 -top-5 flex h-16 w-16 items-center justify-center rounded-full bg-volt shadow-lift md:-right-7 md:h-20 md:w-20"
      >
        <Asterisk className="h-7 w-7 animate-spin-slow text-ink md:h-9 md:w-9" strokeWidth={2.4} />
      </motion.div>
    </motion.div>
  );
}

export default function Hero({ onCv }: HeroProps) {
  const { strings: S } = useLang();

  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-40">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-lavender blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-64 h-[420px] w-[420px] rounded-full bg-sky-tint blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          {/* badges */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="mb-7 flex flex-wrap items-center gap-2"
          >
            <span className="flex items-center gap-2 rounded-full border border-hairline bg-white px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9ecb1f]" />
              </span>
              {S.hero.availability}
            </span>
            <span className="rounded-full bg-lavender px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-violet">
              {S.hero.badge}
            </span>
          </motion.div>

          {/* headline */}
          <h1 className="text-[clamp(3.6rem,12.5vw,9rem)] leading-[0.94] tracking-[-0.045em]">
            <TitleWord word={S.hero.titleA} baseDelay={0.35} />
            <span className="flex items-center gap-4 md:gap-6">
              <TitleWord word={S.hero.titleB} outline baseDelay={0.55} />
            </span>
          </h1>

          {/* lead */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
          >
            {S.hero.lead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.02, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-sm font-bold text-paper transition-all duration-300 hover:bg-violet hover:shadow-violet"
            >
              {S.hero.ctaProjects}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={onCv}
              className="group flex items-center gap-2.5 rounded-full border border-ink/15 bg-white px-7 py-4 text-sm font-bold text-ink transition-all duration-300 hover:border-ink hover:shadow-lift"
            >
              {S.hero.ctaCv}
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.14, ease: EASE }}
            className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-hairline pt-7"
          >
            {S.hero.stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                  {s.value}
                  <span className="text-violet">.</span>
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-mist">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* art column */}
        <div className="lg:col-span-5">
          <TiltArt />
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="relative mx-auto mt-16 flex max-w-7xl items-center gap-3 px-6 pb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-mist"
      >
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        {S.hero.scroll}
      </motion.div>
    </section>
  );
}
