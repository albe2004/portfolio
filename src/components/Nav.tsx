import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { EASE, useLang } from "@/lib/lang";

interface NavProps {
  onCv: () => void;
}

export default function Nav({ onCv }: NavProps) {
  const { lang, strings: S, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* scroll spy */
  useEffect(() => {
    const ids = ["home", "projects", "cv", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const links = [
    { id: "home", label: S.nav.home },
    { id: "projects", label: S.nav.projects },
    { id: "contact", label: S.nav.contact },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <div
          className={`flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border px-3 py-2 pl-5 transition-all duration-500 ${
            scrolled
              ? "border-hairline bg-white/80 shadow-card backdrop-blur-xl"
              : "border-transparent bg-white/0"
          }`}
        >
          {/* logo */}
          <a href="#home" className="group flex items-baseline gap-1" aria-label="Andrea Alberici">
            <span className="text-lg font-extrabold tracking-tight text-ink">AA</span>
            <span className="inline-block h-2 w-2 rounded-full bg-violet transition-transform duration-500 group-hover:scale-150" />
          </a>

          {/* desktop links */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`relative rounded-full px-4 py-2 text-[13px] font-semibold transition-colors duration-300 ${
                  active === l.id ? "text-ink" : "text-mist hover:text-ink"
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-lavender"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* lang toggle */}
            <button
              onClick={toggle}
              className="hidden items-center rounded-full border border-hairline bg-white p-1 text-[11px] font-bold sm:flex"
              aria-label="Switch language"
            >
              {(["it", "en"] as const).map((l) => (
                <span
                  key={l}
                  className={`relative rounded-full px-2.5 py-1 uppercase transition-colors duration-300 ${
                    lang === l ? "text-white" : "text-mist"
                  }`}
                >
                  {lang === l && (
                    <motion.span
                      layoutId="lang-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative">{l}</span>
                </span>
              ))}
            </button>

            {/* CV download */}
            <button
              onClick={onCv}
              className="group flex items-center gap-2 rounded-full bg-violet px-4 py-2.5 text-[13px] font-bold text-white shadow-violet transition-all duration-300 hover:bg-violet-deep hover:shadow-lift"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              <span className="hidden sm:inline">{S.nav.cv}</span>
            </button>

            {/* mobile burger */}
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-4.5 w-4.5 text-ink" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-[70] flex flex-col bg-paper/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-7">
              <span className="text-lg font-extrabold tracking-tight">
                AA<span className="text-violet">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
              {[...links, { id: "cv", label: `${S.nav.cv} — PDF` }].map((l, i) => (
                <motion.div
                  key={l.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: EASE }}
                >
                  {l.id === "cv" ? (
                    <button
                      onClick={() => {
                        setOpen(false);
                        onCv();
                      }}
                      className="text-left text-4xl font-extrabold tracking-tight text-ink"
                    >
                      {l.label}
                    </button>
                  ) : (
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className="text-4xl font-extrabold tracking-tight text-ink"
                    >
                      {l.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </nav>
            <div className="px-8 pb-10">
              <button
                onClick={toggle}
                className="rounded-full border border-hairline bg-white px-5 py-2.5 text-sm font-bold"
              >
                {lang === "it" ? "Switch to English" : "Passa all'italiano"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
