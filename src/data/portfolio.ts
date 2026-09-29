/* =====================================================================
   ANDREA ALBERICI — PORTFOLIO DATA (IT / EN)
   Contenuti ricavati da https://albe2004.github.io
   ---------------------------------------------------------------------
   ▶ PDF DEI PROGETTI: metti i file in  public/downloads/  con ESATTAMENTE
     i nomi indicati nel campo `file` qui sotto (vedi public/downloads/README.md).
   ▶ EMAIL: compila `contact.email` per mostrare il pulsante mail nei contatti.
   ===================================================================== */

export type Lang = "it" | "en";

export const contact = {
  github: "https://github.com/albe2004",
  linkedin: "https://www.linkedin.com/in/andrea-alberici-595816347/",
  instagram: "https://www.instagram.com/andre.alberici/",
  email: "", // es. "ciao@andreaalberici.it" — lascia vuoto per nasconderla
};

/* ------------------------------------------------------------------ */
/*  UI STRINGS                                                         */
/* ------------------------------------------------------------------ */

export const t = {
  it: {
    nav: { home: "Home", projects: "Progetti", contact: "Contatti", cv: "CV" },
    langLabel: "EN",
    hero: {
      badge: "UX/UI Designer — Roma, IT",
      availability: "Disponibile per nuovi progetti",
      titleA: "ANDREA",
      titleB: "ALBERICI",
      lead: "UX/UI designer orientato al design, dedicato a creare esperienze utente intuitive e coinvolgenti.",
      ctaProjects: "Vedi i progetti",
      ctaCv: "Scarica il CV",
      scroll: "scroll",
      stats: [
        { value: "10+", label: "progetti completati" },
        { value: "07", label: "collaborazioni" },
        { value: "02", label: "lingue parlate" },
      ],
      cardTag: "design × ricerca × codice",
    },
    marquee: [
      "UX DESIGN",
      "UI DESIGN",
      "BRAND IDENTITY",
      "ACCESSIBILITÀ",
      "DESIGN SYSTEM",
      "COPYWRITING",
      "USER TESTING",
      "WIREFRAMING",
    ],
    about: {
      kicker: "Su di me",
      title: "Curioso per natura,",
      titleAccent: "designer per scelta.",
      p1: "Sono Andrea, UX/UI designer di Roma, classe 2004, cresciuto in una grande famiglia con sei fratelli. La mia passione per i videogiochi ha acceso fin da piccolo la curiosità per l'arte e il mondo digitale.",
      p2: "A 15 anni mi sono iscritto allo Stendhal, un liceo di grafica a Roma, dove ho scoperto l'amore per la comunicazione visiva. Dopo il diploma ho iniziato il mio percorso in start2impact University (2023), dove ho completato la formazione in UX/UI Design e AI.",
      p3: "Lungo la strada ho lavorato a diversi progetti — dall'accessibilità al wireframing, dalla UI al copywriting e allo sviluppo end-to-end. Continuo a studiare nuovi trend e strumenti per diventare un designer migliore, ogni giorno.",
      interests: "Interessi",
      interestsList: ["Corsa", "Arte", "Lettura", "Cinema", "Design", "Calcio"],
      based: "basato a Roma, Italia",
      edu: "Master UX/UI & AI · start2impact",
    },
    projects: {
      kicker: "Portfolio",
      title: "Ultimi progetti",
      sub: "Alcuni dei progetti su cui ho lavorato: ognuno un passo avanti nel mio percorso creativo e professionale.",
      download: "Scarica la presentazione",
      downloadShort: "Presentazione",
      allLabel: "Tutti",
      count: (n: number) => `${n} progetti`,
      filters: {
        all: "Tutti",
        brand: "Brand Design",
        research: "UX Research & Accessibilità",
        uxui: "UX/UI Design",
        webdev: "Sviluppo Web",
        copy: "Copywriting",
        graphic: "Graphic Design",
      } as Record<string, string>,
      hint: "I progetti si aprono in PDF — presentazioni complete, case study e processo.",
    },
    cv: {
      kicker: "Curriculum",
      title: "Esperienza & Formazione",
      sub: "Identità di brand, sistemi editoriali, funnel e interfacce: ecco dove ho messo le mani finora.",
      download: "Scarica il CV (PDF)",
      downloaded: "Download del CV avviato",
      experience: "Esperienza",
      education: "Formazione",
      skills: "Competenze",
      interests: "Interessi",
      skillGroups: [
        { title: "Design tools", items: ["Figma", "Canva", "Adobe Illustrator"] },
        { title: "Web & Code", items: ["HTML", "CSS / SCSS", "JavaScript", "Bootstrap", "WordPress", "ClickFunnels"] },
        { title: "Editing", items: ["CapCut", "DaVinci Resolve"] },
        { title: "Lingue", items: ["Italiano — madrelingua", "Inglese"] },
      ],
    },
    contact: {
      kicker: "Contatti",
      title: "Hai un progetto in mente?",
      accent: "Parliamone.",
      sub: "Mettiamoci in contatto e diamo vita alla tua visione, insieme.",
      ctaLinkedin: "Scrivimi su LinkedIn",
      email: "Scrivimi una mail",
      copyEmail: "Copia email",
      copied: "Email copiata!",
      socials: "Altri canali",
      footer: "© 2026 Andrea Alberici — Tutti i diritti riservati.",
      footerNote: "Progettato e sviluppato con cura a Roma.",
      backTop: "Torna su",
    },
    cookie: "",
  },

  en: {
    nav: { home: "Home", projects: "Projects", contact: "Contact", cv: "CV" },
    langLabel: "IT",
    hero: {
      badge: "UX/UI Designer — Rome, IT",
      availability: "Available for new projects",
      titleA: "ANDREA",
      titleB: "ALBERICI",
      lead: "Design-focused UX/UI designer dedicated to creating intuitive and engaging user experiences.",
      ctaProjects: "View projects",
      ctaCv: "Download CV",
      scroll: "scroll",
      stats: [
        { value: "10+", label: "projects completed" },
        { value: "07", label: "collaborations" },
        { value: "02", label: "languages spoken" },
      ],
      cardTag: "design × research × code",
    },
    marquee: [
      "UX DESIGN",
      "UI DESIGN",
      "BRAND IDENTITY",
      "ACCESSIBILITY",
      "DESIGN SYSTEMS",
      "COPYWRITING",
      "USER TESTING",
      "WIREFRAMING",
    ],
    about: {
      kicker: "About me",
      title: "Curious by nature,",
      titleAccent: "designer by choice.",
      p1: "I'm Andrea, a UX/UI designer from Rome, born in 2004 and raised in a big family with six siblings. My childhood passion for video games sparked my curiosity for art and the digital world.",
      p2: "At 15, I enrolled in Stendhal, a graphic design high school in Rome, where I discovered my love for visual communication. After graduating, I began studying at start2impact University (2023), where I completed my UX/UI Design & AI journey.",
      p3: "Along the way, I've completed several projects — from accessibility and wireframing to UI design, copywriting, and end-to-end development. I keep learning new design trends and tools to become a better designer, every single day.",
      interests: "Interests",
      interestsList: ["Running", "Art", "Reading", "Movies", "Design", "Football"],
      based: "based in Rome, Italy",
      edu: "Master UX/UI & AI · start2impact",
    },
    projects: {
      kicker: "Portfolio",
      title: "Latest projects",
      sub: "Take a look at some of the projects I've worked on, each one a step forward in my creative and professional journey.",
      download: "Download presentation",
      downloadShort: "Presentation",
      allLabel: "All",
      count: (n: number) => `${n} projects`,
      filters: {
        all: "All",
        brand: "Brand Design",
        research: "UX Research & Accessibility",
        uxui: "UX/UI Design",
        webdev: "Web Development",
        copy: "Copywriting",
        graphic: "Graphic Design",
      } as Record<string, string>,
      hint: "Projects open as PDF — full presentations, case studies and process.",
    },
    cv: {
      kicker: "Curriculum",
      title: "Experience & Education",
      sub: "Brand identities, editorial systems, funnels and interfaces: where I've put my hands so far.",
      download: "Download CV (PDF)",
      downloaded: "CV download started",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      interests: "Interests",
      skillGroups: [
        { title: "Design tools", items: ["Figma", "Canva", "Adobe Illustrator"] },
        { title: "Web & Code", items: ["HTML", "CSS / SCSS", "JavaScript", "Bootstrap", "WordPress", "ClickFunnels"] },
        { title: "Editing", items: ["CapCut", "DaVinci Resolve"] },
        { title: "Languages", items: ["Italian — native", "English"] },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Have a project in mind?",
      accent: "Let's talk.",
      sub: "Let's connect and bring your vision to life, together.",
      ctaLinkedin: "Message me on LinkedIn",
      email: "Send me an email",
      copyEmail: "Copy email",
      copied: "Email copied!",
      socials: "Other channels",
      footer: "© 2026 Andrea Alberici — All rights reserved.",
      footerNote: "Designed & built with care in Rome.",
      backTop: "Back to top",
    },
    cookie: "",
  },
};

export type TStrings = (typeof t)["it"];

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                           */
/* ------------------------------------------------------------------ */

export type CatKey = "brand" | "research" | "uxui" | "webdev" | "copy" | "graphic";

export interface Project {
  slug: string;
  cat: CatKey;
  img: string;
  file: string; // in public/downloads
  tint: string; // accent tint for overlay chip
  title: { it: string; en: string };
  desc: { it: string; en: string };
}

export const projects: Project[] = [
  {
    slug: "sunnee-branding",
    cat: "brand",
    img: "img/p-sunnee.png",
    file: "downloads/sunnee-brand-identity.pdf",
    tint: "#f2b63c",
    title: { it: "Sunnee — Identità visiva", en: "Sunnee — Brand Identity" },
    desc: {
      it: "Identità visiva completa per Sunnee: logo, palette colori, tipografia, set di icone, asset social e brand guidelines.",
      en: "Developed Sunnee's visual identity: logo, color palette, typography, icon set, social assets, and brand guidelines.",
    },
  },
  {
    slug: "barilla-rebrand",
    cat: "brand",
    img: "img/p-barilla.png",
    file: "downloads/barilla-rebrand-visual-identity-ux.pdf",
    tint: "#4368f2",
    title: { it: "Barilla Rebrand — Visual Identity & UX", en: "Barilla Rebrand — Visual Identity & UX" },
    desc: {
      it: "Rebrand di Barilla e redesign dell'esperienza del sito: discovery, wireframe, prototipo interattivo e test di usabilità per validare le scelte.",
      en: "Rebranded Barilla and redesigned the website experience: discovery, wireframes, interactive prototype, and usability testing to validate choices.",
    },
  },
  {
    slug: "lifestyle-archive",
    cat: "brand",
    img: "img/p-archive.png",
    file: "downloads/lifestyle-archive.pdf",
    tint: "#b08968",
    title: { it: "Lifestyle Archive", en: "Lifestyle Archive" },
    desc: {
      it: "Brand editoriale e sistema social riutilizzabile per contenuti culturali: dall'art direction ai template di layout e al content design.",
      en: "Built an editorial brand and a reusable social system for culture content, from art direction to layout templates and content design.",
    },
  },
  {
    slug: "lost-frame",
    cat: "brand",
    img: "img/p-lostframe.png",
    file: "downloads/lost-frame.pdf",
    tint: "#6c46f0",
    title: { it: "Lost Frame", en: "Lost Frame" },
    desc: {
      it: "Sistema visivo cinematografico (palette, tipografia, componenti) applicato a schermate UI chiave e template social riutilizzabili.",
      en: "Designed a cinematic visual system (palette, type, components) and applied it to key UI screens and reusable social templates.",
    },
  },
  {
    slug: "accessibility-1",
    cat: "research",
    img: "img/p-research.png",
    file: "downloads/accessibility-audit-1.pdf",
    tint: "#6c46f0",
    title: { it: "Accessibility Audit — Pt. 1", en: "Accessibility Audit — Pt. 1" },
    desc: {
      it: "Audit di accessibilità su un e-commerce: barriere chiave identificate e proposte di miglioramento per layout, navigazione e contenuti.",
      en: "Accessibility audit on an e-commerce: identified key barriers and proposed layout, navigation, and content improvements.",
    },
  },
  {
    slug: "accessibility-2",
    cat: "research",
    img: "img/p-research.png",
    file: "downloads/accessibility-audit-2.pdf",
    tint: "#4368f2",
    title: { it: "Accessibility Audit — Pt. 2", en: "Accessibility Audit — Pt. 2" },
    desc: {
      it: "Analisi basata su persona e journey con correzioni concrete per contrasto, struttura e navigazione, per una maggiore inclusività.",
      en: "Persona + journey-based analysis with actionable fixes for contrast, structure, and navigation to improve inclusivity.",
    },
  },
  {
    slug: "discovery-1",
    cat: "research",
    img: "img/p-research.png",
    file: "downloads/discovery-1.pdf",
    tint: "#7a5cf0",
    title: { it: "Discovery — Pt. 1", en: "Discovery — Pt. 1" },
    desc: {
      it: "Valutazione euristica e benchmarking dei competitor per individuare gap di usabilità e accessibilità, tradotti in raccomandazioni.",
      en: "Heuristic evaluation + competitor benchmarking to spot usability/accessibility gaps and translate insights into recommendations.",
    },
  },
  {
    slug: "discovery-2",
    cat: "research",
    img: "img/p-research.png",
    file: "downloads/discovery-2.pdf",
    tint: "#9a6ee8",
    title: { it: "Discovery — Pt. 2", en: "Discovery — Pt. 2" },
    desc: {
      it: "Analisi approfondita con personas e journey: CTA più chiare, contenuti semplificati, wishlist e live chat.",
      en: "Deepened the analysis with personas/journeys and proposed clearer CTAs, simplified content, wishlist and live chat features.",
    },
  },
  {
    slug: "user-test-1",
    cat: "research",
    img: "img/p-research.png",
    file: "downloads/user-test-1.pdf",
    tint: "#5530d6",
    title: { it: "User Test — Pt. 1", en: "User Test — Pt. 1" },
    desc: {
      it: "Pianificazione di un First Click Test moderato da remoto: obiettivi, utenti target, prototipo e script per valutare le interazioni iniziali.",
      en: "Planned a remote moderated First Click Test: goals, target users, prototype, and script to evaluate initial interactions.",
    },
  },
  {
    slug: "user-test-2",
    cat: "research",
    img: "img/p-research.png",
    file: "downloads/user-test-2.pdf",
    tint: "#4368f2",
    title: { it: "User Test — Pt. 2", en: "User Test — Pt. 2" },
    desc: {
      it: "Analisi delle sessioni remote, problemi di usabilità e pattern di primo click trasformati in miglioramenti prioritizzati.",
      en: "Analyzed remote sessions, captured usability issues and first-click patterns, and turned insights into prioritized improvements.",
    },
  },
  {
    slug: "wireframing-1",
    cat: "uxui",
    img: "img/p-screens.png",
    file: "downloads/wireframing-1.pdf",
    tint: "#8b8b96",
    title: { it: "Wireframing — Pt. 1", en: "Wireframing — Pt. 1" },
    desc: {
      it: "Wireframe desktop e wireflow per migliorare architettura dell'informazione, scopribilità e interazioni chiave dello shopping.",
      en: "Created desktop wireframes and wireflow to improve information architecture, discoverability, and key shopping interactions.",
    },
  },
  {
    slug: "wireframing-2",
    cat: "uxui",
    img: "img/p-screens.png",
    file: "downloads/wireframing-2.pdf",
    tint: "#a3a3ae",
    title: { it: "Wireframing — Pt. 2", en: "Wireframing — Pt. 2" },
    desc: {
      it: "Adattamento mobile dell'esperienza: layout responsive, tipografia raffinata, spaziature migliorate e touch target ottimizzati.",
      en: "Adapted the experience for mobile: responsive layouts, refined typography, better spacing, and optimized touch targets.",
    },
  },
  {
    slug: "user-interface-1",
    cat: "uxui",
    img: "img/p-screens.png",
    file: "downloads/user-interface-1.pdf",
    tint: "#6c46f0",
    title: { it: "User Interface — Pt. 1", en: "User Interface — Pt. 1" },
    desc: {
      it: "UI desktop ad alta fedeltà: dai wireframe a layout accessibili e componenti coerenti.",
      en: "Designed high-fidelity desktop UI, translating wireframes into accessible layouts and consistent UI components.",
    },
  },
  {
    slug: "user-interface-2",
    cat: "uxui",
    img: "img/p-screens.png",
    file: "downloads/user-interface-2.pdf",
    tint: "#5530d6",
    title: { it: "User Interface — Pt. 2", en: "User Interface — Pt. 2" },
    desc: {
      it: "Design della UI mobile: coerenza cross-device, leggibilità, spaziature e stati di interazione migliorati.",
      en: "Designed the mobile UI, ensuring cross-device consistency and improving readability, spacing, and interaction states.",
    },
  },
  {
    slug: "html-css-portfolio",
    cat: "webdev",
    img: "img/p-webdev.png",
    file: "downloads/html-css-portfolio.pdf",
    tint: "#d6ff4b",
    title: { it: "HTML & CSS — Portfolio", en: "HTML & CSS — Portfolio" },
    desc: {
      it: "Il mio portfolio progettato e sviluppato da un layout Figma con HTML, SCSS/Bootstrap e JavaScript, con struttura modulare e responsive.",
      en: "Designed and built my portfolio from a Figma layout using HTML, SCSS/Bootstrap, and JavaScript with a responsive, modular structure.",
    },
  },
  {
    slug: "copywriting-vestito-verde",
    cat: "copy",
    img: "img/p-copy.png",
    file: "downloads/copywriting-vestito-verde.pdf",
    tint: "#4a7c59",
    title: { it: "Copywriting — Il Vestito Verde", en: "Copywriting — Il Vestito Verde" },
    desc: {
      it: "Copy orientato alla conversione per un brand di moda sostenibile: analisi del pubblico, storytelling e principi di persuasione.",
      en: "Wrote conversion-focused copy for a sustainable fashion brand, combining audience analysis, storytelling, and persuasion principles.",
    },
  },
  {
    slug: "poster-collection",
    cat: "graphic",
    img: "img/p-posters.png",
    file: "downloads/graphic-design-posters.pdf",
    tint: "#e05252",
    title: { it: "Graphic Design — Poster Collection", en: "Graphic Design — Poster Collection" },
    desc: {
      it: "Raccolta di lavori grafici personali: poster cinematografici, studi di lettering, loghi per contest e illustrazioni editoriali.",
      en: "A collection of personal graphic works: movie posters, lettering studies, contest logos and editorial illustrations.",
    },
  },
];

export const catKeys: CatKey[] = ["brand", "research", "uxui", "webdev", "copy", "graphic"];

/* ------------------------------------------------------------------ */
/*  CV DATA                                                            */
/* ------------------------------------------------------------------ */

export interface CvItem {
  org: string;
  role: { it: string; en: string };
  desc: { it: string; en: string };
}

export const experience: CvItem[] = [
  {
    org: "Lost Frame",
    role: { it: "Brand Identity Designer", en: "Brand Identity Designer" },
    desc: {
      it: "Costruzione di brand identity e design system (colore, tipografia, componenti), applicati a template social riutilizzabili in più formati.",
      en: "Built brand identity + design system (color, type, components) and applied it to reusable social templates across formats.",
    },
  },
  {
    org: "Lifestyle Archive",
    role: { it: "Art Director & Content Designer", en: "Art Director & Content Designer" },
    desc: {
      it: "Art direction e content design editoriale (carousel/reel), video editing e sistema visivo per un archivio lifestyle digitale.",
      en: "Art direction and editorial content design (carousels/reels), plus video editing and visual system for a digital lifestyle archive.",
    },
  },
  {
    org: "Growtize",
    role: { it: "UX/UI & Web Designer", en: "UX/UI & Web Designer" },
    desc: {
      it: "Progettazione e sviluppo di landing page e funnel (Figma → ClickFunnels/WordPress) e asset visivi per social e YouTube.",
      en: "Designed and built landing pages and funnels (Figma → ClickFunnels/WordPress), plus supporting visual assets for social and YouTube.",
    },
  },
  {
    org: "Growtize Training",
    role: { it: "Funnel Designer & CRO", en: "Funnel Designer & CRO" },
    desc: {
      it: "Pagine di vendita/opt-in e strutture funnel complete con principi CRO; redesign completo del sito per un'azienda del gruppo.",
      en: "Created sales/opt-in pages and complete funnel structures, applying CRO principles; delivered a full website redesign for a group company.",
    },
  },
  {
    org: "Satirae",
    role: { it: "Editorial & Graphic Designer", en: "Editorial & Graphic Designer" },
    desc: {
      it: "Impaginazione editoriale e design di post per il magazine, in collaborazione con il team su Figma e Canva.",
      en: "Editorial layout and visual post design for the magazine, collaborating with the team using Figma and Canva.",
    },
  },
  {
    org: "OgniDoveViaggi",
    role: { it: "Social Media Graphic Designer", en: "Social Media Graphic Designer" },
    desc: {
      it: "Post social e asset grafici allineati allo stile del brand.",
      en: "Created social posts and graphic assets aligned with brand style.",
    },
  },
  {
    org: "Oro, Incenso & Mirra",
    role: { it: "Graphic Designer", en: "Graphic Designer" },
    desc: {
      it: "Grafiche promozionali e contenuti social.",
      en: "Designed promotional graphics and social content.",
    },
  },
];

export interface EduItem {
  org: string;
  period: string;
  title: { it: string; en: string };
  desc: { it: string; en: string };
}

export const education: EduItem[] = [
  {
    org: "start2impact University",
    period: "2023 — 2025",
    title: { it: "Master in UX/UI Design & AI", en: "Master in UX/UI Design & AI" },
    desc: {
      it: "Programma incentrato su un solido mindset progettuale attraverso progetti pratici, dall'intero processo UX/UI — dalla ricerca alla progettazione di interfacce. Skills sviluppate lavorando su 10 progetti individuali di portfolio.",
      en: "Program focused on building a strong design mindset through hands-on projects, covering the full UX/UI process from research to interface design. Practical skills developed across 10 individual portfolio projects.",
    },
  },
  {
    org: "Stendhal High School — Roma",
    period: "2018 — 2023",
    title: { it: "Grafica & Comunicazione Visiva", en: "Graphic Design Specialization" },
    desc: {
      it: "Diploma di maturità con specializzazione in Graphic Design e voto finale 80/100 all'esame di stato.",
      en: "Graduated with a specialization in Graphic Design, achieving a final score of 80/100 in the national exam.",
    },
  },
];

export const interests = {
  it: ["Corsa", "Arte", "Lettura", "Cinema", "Design", "Calcio"],
  en: ["Running", "Art", "Reading", "Movies", "Design", "Football"],
};
