import { Asterisk } from "lucide-react";
import { useLang } from "@/lib/lang";

function Row({ anim, className }: { anim: string; className: string }) {
  const { strings: S } = useLang();
  const seq = [...S.marquee, ...S.marquee];
  return (
    <div className={`flex w-max ${anim} ${className}`}>
      {seq.map((w, i) => (
        <span
          key={i}
          className="flex items-center gap-7 whitespace-nowrap px-5 py-4 text-xl font-extrabold tracking-[0.02em] md:text-2xl"
        >
          {w}
          <Asterisk className="h-5 w-5 opacity-70" strokeWidth={2.6} />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-hidden className="marquee-paused relative z-10 my-16 select-none overflow-hidden py-8 md:my-24">
      <div className="w-[120vw] -translate-x-[10vw] -rotate-[1.6deg] shadow-violet">
        <div className="overflow-hidden bg-violet text-paper">
          <Row anim="animate-marquee-a" className="" />
        </div>
      </div>
      <div className="-mt-2 w-[120vw] -translate-x-[10vw] rotate-[1.2deg]">
        <div className="overflow-hidden bg-ink text-volt">
          <Row anim="animate-marquee-b" className="" />
        </div>
      </div>
    </section>
  );
}
