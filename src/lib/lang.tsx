import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { t, type Lang, type TStrings } from "@/data/portfolio";

interface LangCtx {
  lang: Lang;
  strings: TStrings;
  toggle: () => void;
  setLang: (l: Lang) => void;
}

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "it";
    const saved = window.localStorage.getItem("aa-lang");
    return saved === "en" || saved === "it" ? (saved as Lang) : "it";
  });

  useEffect(() => {
    window.localStorage.setItem("aa-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LangCtx>(
    () => ({
      lang,
      strings: t[lang],
      toggle: () => setLang((l) => (l === "it" ? "en" : "it")),
      setLang,
    }),
    [lang]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
