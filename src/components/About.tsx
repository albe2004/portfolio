import { GraduationCap, MapPin } from "lucide-react";
import { Kicker, Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/lang";

export default function About() {
  const { strings: S, lang } = useLang();
  const interests = S.about.interestsList;

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-8 md:pb-16" aria-label="About">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <Kicker>{S.about.kicker}</Kicker>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.04] tracking-tight text-ink md:text-5xl">
              {S.about.title}
              <br />
              <span className="italic text-violet">{S.about.titleAccent}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="mt-8 flex flex-wrap gap-2">
            <span className="flex items-center gap-2 rounded-full border border-hairline bg-white px-4 py-2.5 text-xs font-bold text-ink">
              <MapPin className="h-3.5 w-3.5 text-violet" />
              {S.about.based}
            </span>
            <span className="flex items-center gap-2 rounded-full border border-hairline bg-white px-4 py-2.5 text-xs font-bold text-ink">
              <GraduationCap className="h-3.5 w-3.5 text-violet" />
              {S.about.edu}
            </span>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft">
            <Reveal delay={0.05}>
              <p>{S.about.p1}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>{S.about.p2}</p>
            </Reveal>
            <Reveal delay={0.19}>
              <p>{S.about.p3}</p>
            </Reveal>
          </div>

          <Reveal delay={0.26}>
            <div className="mt-9 border-t border-hairline pt-6">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-mist">
                {S.about.interests}
              </div>
              <div className="flex flex-wrap gap-2" key={lang}>
                {interests.map((i, k) => (
                  <span
                    key={i}
                    className="rounded-full bg-lavender px-4 py-2 text-xs font-bold text-violet transition-colors duration-300 hover:bg-violet hover:text-white"
                    style={{ transitionDelay: `${k * 15}ms` }}
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
