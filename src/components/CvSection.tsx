import { Briefcase, Download, FileCheck2, GraduationCap, Shapes } from "lucide-react";
import { Kicker, Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/lang";
import { education, experience } from "@/data/portfolio";

interface CvSectionProps {
  onCv: () => void;
}

export default function CvSection({ onCv }: CvSectionProps) {
  const { strings: S, lang } = useLang();

  return (
    <section id="cv" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 pb-24 md:pb-36">
      <div className="rounded-[40px] bg-[linear-gradient(150deg,#ede7fc33_0%,#ffffff00_60%)] p-1">
        <div className="grid grid-cols-1 gap-12 p-2 md:p-6 lg:grid-cols-12 lg:gap-10">
          {/* sticky intro */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Kicker>{S.cv.kicker}</Kicker>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
                  {S.cv.title}
                  <span className="text-violet">.</span>
                </h2>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-soft">{S.cv.sub}</p>
              </Reveal>

              <Reveal delay={0.15}>
                <button
                  onClick={onCv}
                  className="group mt-8 flex items-center gap-3 rounded-full bg-violet px-7 py-4 text-sm font-bold text-white shadow-violet transition-all duration-300 hover:bg-violet-deep hover:shadow-lift"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </span>
                  {S.cv.download}
                </button>
                <p className="mt-4 flex items-center gap-2 text-xs text-mist">
                  <FileCheck2 className="h-3.5 w-3.5 text-violet" />
                  PDF · IT/EN · A4
                </p>
              </Reveal>
            </div>
          </div>

          {/* content */}
          <div className="space-y-14 lg:col-span-8">
            {/* experience */}
            <div>
              <Reveal>
                <h3 className="mb-5 flex items-center gap-2.5 text-sm font-extrabold uppercase tracking-[0.16em] text-ink">
                  <Briefcase className="h-4 w-4 text-violet" />
                  {S.cv.experience}
                </h3>
              </Reveal>
              <div className="border-t border-hairline">
                {experience.map((e, i) => (
                  <Reveal key={e.org} delay={Math.min(i * 0.05, 0.25)} y={18}>
                    <div className="group grid grid-cols-[44px_1fr] gap-3 border-b border-hairline py-5 md:grid-cols-[56px_1fr]">
                      <span className="pt-1 text-xs font-bold tracking-widest text-mist transition-colors group-hover:text-violet">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <h4 className="text-[17px] font-bold tracking-tight text-ink">{e.org}</h4>
                          <span className="rounded-full bg-lavender px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-violet">
                            {e.role[lang]}
                          </span>
                        </div>
                        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-mist">
                          <span className="text-ink">{e.period[lang]}</span>
                          <span className="mx-2">·</span>
                          {e.type[lang]}
                        </p>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                          {e.desc[lang]}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* education */}
            <div>
              <Reveal>
                <h3 className="mb-5 flex items-center gap-2.5 text-sm font-extrabold uppercase tracking-[0.16em] text-ink">
                  <GraduationCap className="h-4 w-4 text-violet" />
                  {S.cv.education}
                </h3>
              </Reveal>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {education.map((ed, i) => (
                  <Reveal key={ed.org} delay={i * 0.08} y={22}>
                    <div className="h-full rounded-3xl border border-hairline bg-white p-6 shadow-card transition-shadow duration-500 hover:shadow-lift">
                      <span className="inline-block rounded-full bg-volt px-3 py-1 text-[11px] font-extrabold tracking-wide text-ink">
                        {ed.period}
                      </span>
                      <h4 className="mt-4 text-lg font-bold leading-snug tracking-tight text-ink">
                        {ed.title[lang]}
                      </h4>
                      <div className="mt-1 text-xs font-bold uppercase tracking-wider text-mist">
                        {ed.org}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{ed.desc[lang]}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* skills */}
            <div>
              <Reveal>
                <h3 className="mb-5 flex items-center gap-2.5 text-sm font-extrabold uppercase tracking-[0.16em] text-ink">
                  <Shapes className="h-4 w-4 text-violet" />
                  {S.cv.skills}
                </h3>
              </Reveal>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" key={lang}>
                {S.cv.skillGroups.map((g, i) => (
                  <Reveal key={g.title} delay={i * 0.06} y={20}>
                    <div className="h-full rounded-3xl border border-hairline bg-white p-6 shadow-card">
                      <div className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.18em] text-mist">
                        {g.title}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {g.items.map((it) => (
                          <span
                            key={it}
                            className="rounded-full bg-paper px-3.5 py-2 text-xs font-bold text-ink ring-1 ring-hairline transition-colors duration-300 hover:bg-ink hover:text-paper"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
