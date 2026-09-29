import { ArrowUp, Copy, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons";
import { useLang } from "@/lib/lang";
import { contact } from "@/data/portfolio";

export default function Contact() {
  const { strings: S } = useLang();
  const [copied, setCopied] = useState(false);
  const hasEmail = contact.email.trim().length > 3;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 pb-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-[40px] bg-ink px-7 py-16 text-paper md:rounded-[56px] md:px-16 md:py-24">
          {/* decor */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-violet/25 blur-3xl" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 bottom-2 select-none text-[18vw] font-extrabold leading-none tracking-tight text-white/[0.045] md:text-[9rem]"
          >
            CIAO_
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
              <span className="h-2 w-2 rounded-[3px] bg-volt" />
              {S.contact.kicker}
            </span>

            <h2 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
              {S.contact.title}{" "}
              <span className="italic text-volt">{S.contact.accent}</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              {S.contact.sub}
            </p>

            {/* CTA row */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-full bg-volt px-7 py-4 text-sm font-extrabold text-ink transition-all duration-300 hover:scale-[1.03] hover:shadow-lift"
              >
                {S.contact.ctaLinkedin}
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {hasEmail && (
                <>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2.5 rounded-full border border-white/25 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/5"
                  >
                    <Mail className="h-4 w-4" />
                    {S.contact.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-2.5 rounded-full border border-white/15 px-5 py-4 text-sm font-bold text-white/70 transition-all duration-300 hover:border-white hover:text-white"
                  >
                    <Copy className="h-4 w-4" />
                    {copied ? S.contact.copied : S.contact.copyEmail}
                  </button>
                </>
              )}
            </div>

            {/* socials */}
            <div className="mt-12 flex items-center gap-3">
              <span className="mr-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
                {S.contact.socials}
              </span>
              {[
                { href: contact.github, Icon: GithubIcon, label: "GitHub" },
                { href: contact.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
                { href: contact.instagram, Icon: InstagramIcon, label: "Instagram" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-volt hover:bg-volt hover:text-ink"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* footer */}
      <footer className="flex flex-col items-center justify-between gap-5 px-1 py-10 md:flex-row">
        <p className="text-xs font-semibold tracking-wide text-mist">{S.contact.footer}</p>
        <p className="text-xs text-mist">{S.contact.footerNote}</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 rounded-full border border-hairline bg-white px-5 py-2.5 text-xs font-bold text-ink transition-all duration-300 hover:border-ink hover:shadow-card"
        >
          {S.contact.backTop}
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </footer>
    </section>
  );
}
