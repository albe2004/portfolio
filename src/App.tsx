import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Check, X } from "lucide-react";
import { LangProvider, useLang } from "@/lib/lang";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SideWorks from "@/components/SideWorks";
import CvSection from "@/components/CvSection";
import Contact from "@/components/Contact";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-violet via-violet-deep to-volt"
      style={{ scaleX }}
    />
  );
}

function Shell() {
  const { lang, strings: S } = useLang();
  const [toast, setToast] = useState<null | "ok" | "missing">(null);
  const timer = useRef<number | null>(null);

  /* Il CV è un file che carichi tu in public/downloads: cv-it.pdf e cv-en.pdf */
  const handleCv = useCallback(async () => {
    const file = lang === "it" ? "downloads/cv-it.pdf" : "downloads/cv-en.pdf";
    let status: "ok" | "missing" = "missing";
    try {
      const r = await fetch(file, { method: "HEAD" });
      if (r.ok && (r.headers.get("content-type") ?? "").includes("pdf")) status = "ok";
    } catch {
      /* file non raggiungibile */
    }
    if (status === "ok") {
      const a = document.createElement("a");
      a.href = file;
      a.download = lang === "it" ? "Andrea-Alberici-CV-IT.pdf" : "Andrea-Alberici-CV-EN.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
    setToast(status);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(null), 2600);
  }, [lang]);

  return (
    <div className="grain relative min-h-screen">
      <ScrollProgress />
      <Cursor />
      <Nav onCv={handleCv} />

      <main>
        <Hero onCv={handleCv} />
        <About />
        <Marquee />
        <Projects />
        <SideWorks />
        <CvSection onCv={handleCv} />
        <Contact />
      </main>

      {/* toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 left-1/2 z-[90] flex -translate-x-1/2 items-center gap-3 rounded-full bg-ink px-5 py-3.5 text-sm font-bold text-paper shadow-lift"
            role="status"
          >
            <span className={`flex h-5.5 w-5.5 items-center justify-center rounded-full ${toast === "ok" ? "bg-volt" : "bg-white/80"}`}>
              {toast === "ok" ? (
                <Check className="h-3.5 w-3.5 text-ink" strokeWidth={3} />
              ) : (
                <X className="h-3.5 w-3.5 text-ink" strokeWidth={3} />
              )}
            </span>
            {toast === "ok"
              ? S.cv.downloaded
              : lang === "it"
                ? "CV non ancora disponibile"
                : "CV not available yet"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Shell />
    </LangProvider>
  );
}
