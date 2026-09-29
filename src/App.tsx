import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Check } from "lucide-react";
import { LangProvider, useLang } from "@/lib/lang";
import { downloadCvPdf } from "@/lib/cvPdf";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
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
  const [toast, setToast] = useState(false);
  const timer = useRef<number | null>(null);

  const handleCv = useCallback(() => {
    downloadCvPdf(lang);
    setToast(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(false), 2600);
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
            <span className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-volt">
              <Check className="h-3.5 w-3.5 text-ink" strokeWidth={3} />
            </span>
            {S.cv.downloaded}
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
