import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Img from "@/components/Img";
import { Reveal } from "@/components/Reveal";
import { EASE, useLang } from "@/lib/lang";
import { sideWorks } from "@/data/posters";

/** Spazio laterale che allinea la fila al resto della pagina (max-w-7xl + px-6) */
const SIDE = "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))";

/** velocità dello scorrimento automatico, in pixel al secondo */
const SPEED = 45;
/** quante volte viene ripetuto l'elenco per ottenere il giro infinito */
const SETS = 4;

export default function SideWorks() {
  const { lang } = useLang();
  const it = lang === "it";
  const n = sideWorks.length;

  /* con pochi lavori ripeto l'elenco, così la fila è sempre abbastanza lunga */
  const base = useMemo(() => {
    if (n === 0) return [];
    const len = n >= 6 ? n : n * Math.ceil(6 / n);
    return Array.from({ length: len }, (_, i) => sideWorks[i % n]);
  }, [n]);
  const B = base.length;
  const items = useMemo(() => Array.from({ length: SETS }, () => base).flat(), [base]);

  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, moved: false, x: 0, left: 0 });
  const st = useRef({
    pos: 0, // posizione "vera" (con decimali)
    last: 0, // ultimo scrollLeft impostato da noi
    ready: false,
    visible: false,
    hold: false, // cursore/dito sopra la fila
    modal: false, // ingrandimento aperto
    resumeAt: 0, // non ripartire prima di questo istante
  });
  const [dragging, setDragging] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  /** larghezza di un giro completo (distanza tra il primo elemento di due set consecutivi) */
  const loopWidth = useCallback(() => {
    const el = track.current;
    if (!el || el.children.length <= B) return 0;
    const a = el.children[0] as HTMLElement;
    const c = el.children[B] as HTMLElement;
    return c.offsetLeft - a.offsetLeft;
  }, [B]);

  /* scorrimento automatico */
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let prev = performance.now();

    const loop = (now: number) => {
      const dt = Math.min(now - prev, 64);
      prev = now;
      const s = st.current;
      const L = loopWidth();
      if (L > 0) {
        if (!s.ready && s.visible) {
          s.pos = L;
          el.scrollLeft = L;
          s.last = el.scrollLeft;
          s.ready = true;
        }
        if (s.ready && s.visible && !reduce && !s.hold && !s.modal && now >= s.resumeAt) {
          s.pos += (SPEED * dt) / 1000;
          s.pos = L + ((((s.pos - L) % L) + L) % L);
          el.scrollLeft = s.pos;
          s.last = el.scrollLeft;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const io = new IntersectionObserver(
      ([e]) => {
        st.current.visible = e.isIntersecting;
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [loopWidth]);

  /* scroll manuale (dito, trascinamento, frecce): tengo il giro infinito */
  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const s = st.current;
    const sl = el.scrollLeft;
    if (Math.abs(sl - s.last) <= 1.01) {
      s.last = sl;
      return;
    }
    s.resumeAt = performance.now() + 1800;
    const L = loopWidth();
    let v = sl;
    if (L > 0 && s.ready) {
      if (v >= 2.5 * L) v -= L;
      else if (v < 0.5 * L) v += L;
      if (v !== sl) {
        el.scrollLeft = v;
        if (drag.current.active) drag.current.left += v - sl;
      }
    }
    s.pos = v;
    s.last = el.scrollLeft;
  };

  const scrollByPage = (dir: number) => {
    const el = track.current;
    if (!el) return;
    st.current.resumeAt = performance.now() + 2500;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  /* pausa quando c'è il cursore o il dito sopra */
  const onPointerEnter = () => {
    st.current.hold = true;
  };
  const onPointerLeave = (e: React.PointerEvent) => {
    st.current.hold = false;
    st.current.resumeAt = performance.now() + (e.pointerType === "mouse" ? 250 : 2200);
    endDrag();
  };

  /* trascinamento con il mouse (su touch scorre già da solo) */
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !track.current) return;
    drag.current = { active: true, moved: false, x: e.clientX, left: track.current.scrollLeft };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.active || !track.current) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 6) {
      d.moved = true;
      setDragging(true);
    }
    if (d.moved) track.current.scrollLeft = d.left - dx;
  };
  const endDrag = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    setDragging(false);
  };

  /* ingrandimento: tastiera, blocco scroll e pausa dello scorrimento */
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + n) % n)), [n]);
  useEffect(() => {
    st.current.modal = open !== null;
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, step]);

  if (n === 0) return null;

  const arrowBtn =
    "flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white hover:text-ink";

  return (
    <section
      id="poster"
      className="mx-3 mb-24 overflow-hidden rounded-[32px] bg-ink py-20 text-paper md:mx-6 md:mb-36 md:rounded-[48px] md:py-28"
    >
      {/* intestazione */}
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
            <span className="h-2 w-2 rounded-[3px] bg-volt" />
            {it ? "Nel tempo libero" : "On the side"}
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            {it ? "Poster e grafiche, per piacere" : "Posters & graphics, just for fun"}
            <span className="text-volt">.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
            {it
              ? "Non sono progetti da presentare: sono lavori che mi piace fare nel tempo libero."
              : "Not projects to present: just work I enjoy making in my free time."}
          </p>
        </Reveal>

        <div className="hidden gap-3 md:flex">
          <button type="button" aria-label={it ? "Indietro" : "Previous"} onClick={() => scrollByPage(-1)} className={arrowBtn}>
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button type="button" aria-label={it ? "Avanti" : "Next"} onClick={() => scrollByPage(1)} className={arrowBtn}>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* fila a scorrimento automatico: si ferma con cursore/dito sopra */}
      <div
        ref={track}
        onScroll={onScroll}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={`mt-12 flex gap-5 overflow-x-auto overflow-y-hidden pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-7 ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ paddingInline: SIDE }}
      >
        {items.map((w, k) => {
          const dup = k >= B;
          return (
            <button
              key={k}
              type="button"
              tabIndex={dup ? -1 : 0}
              aria-hidden={dup || undefined}
              onClick={() => {
                if (!drag.current.moved) setOpen((k % B) % n);
              }}
              aria-label={w.title ?? `${it ? "Lavoro" : "Work"} ${(k % B) % n + 1}`}
              className="group relative shrink-0 overflow-hidden rounded-2xl bg-white/5 text-left ring-1 ring-white/10 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <Img
                src={w.src}
                alt={w.title ?? `${it ? "Lavoro" : "Work"} ${(k % B) % n + 1}`}
                priority
                className="block h-[360px] w-auto select-none md:h-[520px]"
                fallbackClassName="h-[360px] w-[250px] md:h-[520px] md:w-[360px]"
              />
            </button>
          );
        })}
      </div>

      <p className="mx-auto mt-8 max-w-7xl px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
        {it ? "Passa il cursore o tocca per fermare e scorrere" : "Hover or touch to pause and scroll"}
      </p>

      {/* ingrandimento */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
          >
            <button type="button" aria-label={it ? "Chiudi" : "Close"} onClick={() => setOpen(null)} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-ink md:right-6 md:top-6">
              <X className="h-5 w-5" />
            </button>
            {n > 1 && (
              <>
                <button type="button" aria-label={it ? "Precedente" : "Previous"} onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-ink md:left-6">
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button type="button" aria-label={it ? "Successivo" : "Next"} onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-ink md:right-6">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </>
            )}
            <motion.figure
              key={open}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="flex max-h-full max-w-full flex-col items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={sideWorks[open].src} alt={sideWorks[open].title ?? `${it ? "Lavoro" : "Work"} ${open + 1}`} className="max-h-[84vh] max-w-[92vw] rounded-xl object-contain" />
              <figcaption className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                {sideWorks[open].title ? `${sideWorks[open].title} · ` : ""}
                {open + 1} / {n}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
