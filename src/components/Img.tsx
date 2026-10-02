import { useState } from "react";

interface ImgProps {
  src: string;
  alt: string;
  className?: string;
  /** testo mostrato al posto dell'immagine se il file manca */
  label?: string;
  /** classe extra solo per il fallback */
  fallbackClassName?: string;
  priority?: boolean;
}

/**
 * Immagine con fallback grafico: se il file non viene trovato
 * (es. manca in /img) viene mostrata una superficie disegnata
 * invece di un buco bianco.
 */
export default function Img({
  src,
  alt,
  className = "",
  label,
  fallbackClassName = "",
  priority,
}: ImgProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-[linear-gradient(135deg,#ede7fc_0%,#e4eaff_55%,#f6f6f4_100%)] ${className} ${fallbackClassName}`}
      >
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet text-lg font-extrabold text-white">
            AA
          </span>
          <span className="max-w-[16rem] text-[11px] font-bold uppercase tracking-[0.18em] text-violet">
            {label ?? alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      draggable={false}
      onError={() => setFailed(true)}
    />
  );
}
