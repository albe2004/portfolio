/* =====================================================================
   CV PDF GENERATOR — Andrea Alberici
   Genera a runtime un PDF brandizzato (IT/EN) con jsPDF.
   Se preferisci un CV fatto a mano, metti il file in
   public/downloads/CV-Andrea-Alberici.pdf e usa quello al posto di questo.
   ===================================================================== */
import { jsPDF } from "jspdf";
import { education, experience, t } from "@/data/portfolio";
import type { Lang } from "@/data/portfolio";

const VIOLET = { r: 108, g: 70, b: 240 };
const INK = { r: 20, g: 20, b: 23 };
const SOFT = { r: 96, g: 96, b: 106 };
const MIST = { r: 150, g: 150, b: 160 };
const LINE = { r: 231, g: 231, b: 225 };
const VOLT = { r: 214, g: 255, b: 75 };
const LAVENDER = { r: 237, g: 231, b: 252 };

/* jsPDF standard fonts = Latin-1 only: puliamo i caratteri non supportati */
const clean = (s: string) =>
  s
    .replace(/→/g, "->")
    .replace(/[—–]/g, "-")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/×/g, "x")
    .replace(/·/g, "-")
    .replace(/∞/g, "inf")
    .replace(/[^\x00-\xFF]/g, "");

export function downloadCvPdf(lang: Lang) {
  const S = t[lang];
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const W = 210;
  const M = 16; // margin
  let y = 0;

  /* ---------------- header band ---------------- */
  doc.setFillColor(VIOLET.r, VIOLET.g, VIOLET.b);
  doc.rect(0, 0, W, 38, "F");

  doc.setFillColor(VOLT.r, VOLT.g, VOLT.b);
  doc.roundedRect(W - M - 16, 11, 16, 16, 3, 3, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(INK.r, INK.g, INK.b);
  doc.text("AA.", W - M - 8, 21.5, { align: "center" });

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(21);
  doc.text("ANDREA ALBERICI", M, 16.5);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(LAVENDER.r, LAVENDER.g, LAVENDER.b);
  doc.text(clean(lang === "it" ? "UX/UI Designer - Roma, Italia" : "UX/UI Designer - Rome, Italy"), M, 24);
  doc.setFontSize(9);
  doc.text(clean(S.hero.lead), M, 30.5);

  y = 48;

  const sectionTitle = (label: string) => {
    if (y > 262) newPage();
    doc.setFillColor(VIOLET.r, VIOLET.g, VIOLET.b);
    doc.roundedRect(M, y - 3.4, 3.2, 3.2, 0.8, 0.8, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(INK.r, INK.g, INK.b);
    doc.text(clean(label.toUpperCase()), M + 5.5, y);
    doc.setDrawColor(LINE.r, LINE.g, LINE.b);
    doc.setLineWidth(0.3);
    doc.line(M, y + 3, W - M, y + 3);
    y += 8.5;
  };

  const footer = (page: number, total: number) => {
    doc.setDrawColor(LINE.r, LINE.g, LINE.b);
    doc.line(M, 287, W - M, 287);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(MIST.r, MIST.g, MIST.b);
    doc.text(
      clean(
        `github.com/albe2004   |   linkedin.com/in/andrea-alberici-595816347   |   instagram.com/andre.alberici   |   albe2004.github.io`
      ),
      M,
      292
    );
    doc.text(`${page}/${total}`, W - M, 292, { align: "right" });
  };

  const newPage = () => {
    doc.addPage();
    y = 20;
  };

  /* ---------------- profile ---------------- */
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(SOFT.r, SOFT.g, SOFT.b);
  const profile = clean(
    lang === "it"
      ? `${S.about.p1} ${S.about.p3}`
      : `${S.about.p1} ${S.about.p3}`
  );
  const plines = doc.splitTextToSize(profile, W - M * 2);
  doc.text(plines, M, y);
  y += plines.length * 4.4 + 6;

  /* ---------------- experience ---------------- */
  sectionTitle(S.cv.experience);
  experience.forEach((e, i) => {
    const desc = clean(e.desc[lang]);
    const dlines = doc.splitTextToSize(desc, W - M * 2 - 6);
    const blockH = 5 + 4.2 + dlines.length * 4.1 + 3;
    if (y + blockH > 270) newPage();

    doc.setFillColor(VIOLET.r, VIOLET.g, VIOLET.b);
    doc.circle(M + 1.1, y - 1.1, 1.1, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(INK.r, INK.g, INK.b);
    doc.text(clean(e.org), M + 5, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(MIST.r, MIST.g, MIST.b);
    doc.text(clean(`- ${e.role[lang]}`), M + 5, y + 4.4);

    doc.setFontSize(9);
    doc.setTextColor(SOFT.r, SOFT.g, SOFT.b);
    doc.text(dlines, M + 5, y + 9);
    y += blockH;
    if (i === experience.length - 1) y += 2;
  });

  /* ---------------- education ---------------- */
  sectionTitle(S.cv.education);
  education.forEach((ed) => {
    const desc = clean(ed.desc[lang]);
    const dlines = doc.splitTextToSize(desc, W - M * 2 - 6);
    const blockH = 5 + 4.2 + dlines.length * 4.1 + 4;
    if (y + blockH > 270) newPage();

    doc.setFillColor(VOLT.r, VOLT.g, VOLT.b);
    doc.circle(M + 1.1, y - 1.1, 1.1, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(INK.r, INK.g, INK.b);
    doc.text(clean(ed.title[lang]), M + 5, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(MIST.r, MIST.g, MIST.b);
    doc.text(clean(`${ed.org}  |  ${ed.period}`), M + 5, y + 4.4);
    doc.setTextColor(SOFT.r, SOFT.g, SOFT.b);
    doc.text(dlines, M + 5, y + 9);
    y += blockH;
  });

  /* ---------------- skills ---------------- */
  sectionTitle(S.cv.skills);
  S.cv.skillGroups.forEach((g) => {
    const items = clean(g.items.join("   -   "));
    const ilines = doc.splitTextToSize(items, W - M * 2 - 34);
    const blockH = 4.5 + ilines.length * 4.1 + 2.5;
    if (y + blockH > 270) newPage();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(INK.r, INK.g, INK.b);
    doc.text(clean(g.title), M + 5, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(SOFT.r, SOFT.g, SOFT.b);
    doc.text(ilines, M + 34, y);
    y += blockH;
  });

  /* ---------------- interests ---------------- */
  sectionTitle(S.cv.interests);
  const chips = clean(S.about.interestsList.join("     "));
  if (y + 6 > 270) newPage();
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(SOFT.r, SOFT.g, SOFT.b);
  doc.text(chips, M + 5, y);

  /* page numbers */
  const total = doc.getNumberOfPages();
  for (let p = 1; p <= total; p++) {
    doc.setPage(p);
    footer(p, total);
  }

  doc.save(`CV-Andrea-Alberici-${lang.toUpperCase()}.pdf`);
}
