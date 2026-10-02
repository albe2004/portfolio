import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "@/lib/lang";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({ children, delay = 0, y = 28, className, once = true }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Kicker({ children, accent = "bg-violet" }: { children: ReactNode; accent?: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
      <span className={`h-2 w-2 rounded-[3px] ${accent}`} />
      {children}
    </span>
  );
}
