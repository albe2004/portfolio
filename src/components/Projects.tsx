import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";
import Img from "@/components/Img";
import { Kicker, Reveal } from "@/components/Reveal";
import { EASE, useLang } from "@/lib/lang";
import { catKeys, projects, type CatKey, type Project } from "@/data/portfolio";

const pad = (n: number) => String(n).padStart(2, "0");

function Card({ p, index }: { p: Project; index: number }) {
  const { strings: S, lang } = useLang();
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.3, ease: EASE } }}
      transition={{ duration: 0.65, ease: EASE }}
      className="group flex flex-col overflow-hidden rounded-[28px] border border-hairline bg-white shadow-card transition-shadow duration-500 hover:shadow-lift"
    >
      <a href={p.file} download className="block" aria-label={`${p.title[lang]} — PDF`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Img
            src={p.img}
            alt={p.title[lang]}
            label={p.title[lang]}
            className="h-full w-full object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-60" />
          <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/25 px-2.5 py-1 text-[11px] font-bold tracking-wider text-white backdrop-blur-md">
            {pad(index + 1)}
          </span>
          <span
            className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full ring-2 ring-white/50"
            style={{ background: p.tint }}
          />
          {/* hover download pill */}
          <span className="absolute bottom-4 right-4 flex translate-y-3 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[11px] font-bold text-ink opacity-0 shadow-lift transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
            <Download className="h-3.5 w-3.5" />
            PDF
          </span>
        </div>
      </a>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: p.tint === "#d6ff4b" ? "#7c9b10" : p.tint }}>
          {S.projects.filters[p.cat]}
        </span>
        <h3 className="text-lg font-bold leading-snug tracking-tight text-ink">{p.title[lang]}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc[lang]}</p>

        <div className="mt-auto pt-5">
          <a
            href={p.file}
            download
            className="group/dl inline-flex items-center gap-2 text-[13px] font-bold text-ink transition-colors hover:text-violet"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline transition-all duration-300 group-hover/dl:border-violet group-hover/dl:bg-violet">
              <Download className="h-3.5 w-3.5 transition-colors group-hover/dl:text-white" />
            </span>
            <span className="link-sweep">{S.projects.download}</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { strings: S } = useLang();
  const [filter, setFilter] = useState<CatKey | "all">("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects.map((p, i) => ({ p, i }))
        : projects.map((p, i) => ({ p, i })).filter(({ p }) => p.cat === filter),
    [filter]
  );

  return (
    <section id="projects" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-20 md:py-28">
      {/* header */}
      <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <Kicker>{S.projects.kicker}</Kicker>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
              {S.projects.title}
              <span className="text-violet">.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="md:max-w-md">
          <p className="text-base leading-relaxed text-ink-soft">{S.projects.sub}</p>
        </Reveal>
      </div>

      {/* filters */}
      <Reveal delay={0.05}>
        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {["all", ...catKeys].map((k) => {
            const key = k as CatKey | "all";
            const active = filter === key;
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`relative whitespace-nowrap rounded-full px-4.5 py-2.5 text-[13px] font-bold transition-colors duration-300 ${
                  active ? "text-white" : "border border-hairline bg-white text-ink-soft hover:text-ink"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {S.projects.filters[key]}
                  {active && (
                    <span className="ml-2 text-volt">
                      {key === "all" ? projects.length : projects.filter((p) => p.cat === key).length}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* grid */}
      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map(({ p, i }) => (
            <Card key={p.slug} p={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      <Reveal delay={0.1}>
        <p className="mt-12 text-center text-sm text-mist">{S.projects.hint}</p>
      </Reveal>
    </section>
  );
}
