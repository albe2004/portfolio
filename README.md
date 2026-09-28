# Andrea Alberici — Portfolio (React + Vite + Tailwind CSS)

Portfolio personale bilingue (IT/EN) ispirato allo stile minimal/dark del sito
[dymasalfin.web.id](https://www.dymasalfin.web.id/), con i contenuti reali del
portfolio di Andrea Alberici ([albe2004.github.io](https://albe2004.github.io/)).

## ✨ Funzionalità

- **Sezioni**: Home (hero + chi sono), Progetti (con filtri per categoria e modale di
  dettaglio), Contatti.
- **Download CV**: il bottone "Scarica CV" nella navbar avvia subito il download del
  PDF in `public/cv/Andrea_Alberici_CV.pdf`.
- **Download progetti**: ogni progetto ha un pulsante "Scarica presentazione" che
  scarica il file collegato in `public/downloads/`.
- **Lingua IT/EN**: switch lingua in navbar, con rilevamento automatico della lingua
  del browser al primo accesso (salvata poi in `localStorage`).
- **Font**: Inter (con fallback Roboto), caricati da Google Fonts.
- **Animazioni**: reveal on scroll, marquee, micro-interazioni con Framer Motion.
- **Responsive**: ottimizzato da mobile a desktop.

## 🚀 Avvio in locale

```bash
npm install
npm run dev
```

Build di produzione:

```bash
npm run build
npm run preview
```

## 🖊️ Come personalizzare i contenuti

Tutti i contenuti testuali (IT/EN) sono centralizzati in:

- `src/i18n/translations.ts` → testi di navbar, hero, chi sono, progetti, contatti, footer.
- `src/data/projects.ts` → elenco progetti (titolo, descrizione, categoria, immagine,
  link al file scaricabile).
- `src/data/profile.ts` → email e link social (GitHub, LinkedIn, Behance, Instagram).

### Sostituire foto e file reali

1. **Foto progetti**: sostituisci i file in `public/images/projects/` (stessi nomi) o
   aggiorna i percorsi `image` in `src/data/projects.ts`.
2. **File scaricabili dei progetti**: aggiungi i tuoi PDF/allegati in
   `public/downloads/` con lo stesso nome indicato in `downloadUrl`, oppure incolla
   link esterni (Drive, Behance, Notion...).
3. **Curriculum**: sostituisci `public/cv/Andrea_Alberici_CV.pdf` con il tuo CV reale
   (stesso nome file) — il bottone in navbar lo scaricherà automaticamente.
4. **Immagine hero**: sostituisci `public/images/hero-graphic.jpg` con una tua foto o
   grafica.

## 🎨 Palette e stile

Colori e font sono definiti in `src/index.css` tramite `@theme` (Tailwind CSS v4):

- `--color-ink` — nero quasi puro, testo principale.
- `--color-paper` — bianco caldo, sfondo principale.
- `--color-accent` / `--color-accent-dark` — verde acido, colore di accento.
- `--font-sans` — Inter / Roboto.

## 📁 Struttura principale

```
src/
  components/     → componenti UI (Navbar, Hero, About, Projects, Contact, Footer, ...)
  data/           → dati progetti e profilo
  i18n/           → traduzioni e contesto lingua
  utils/          → utility (cn per classNames)
public/
  cv/             → CV scaricabile
  downloads/      → file scaricabili dei progetti
  images/         → immagini hero e progetti
```

## 📦 Come importare su GitHub

1. Scarica/esporta questo progetto dall'ambiente di sviluppo.
2. Crea un nuovo repository su GitHub (es. `andrea-alberici-portfolio`).
3. Nella cartella del progetto in locale:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio Andrea Alberici"
   git branch -M main
   git remote add origin https://github.com/<tuo-utente>/<nome-repo>.git
   git push -u origin main
   ```

4. **Pubblicare su GitHub Pages** (opzionale):
   - Installa `gh-pages`: `npm install -D gh-pages`
   - Aggiungi negli script di `package.json`: `"deploy": "vite build && gh-pages -d dist"`
   - Se pubblichi su `https://<utente>.github.io/<repo>/` (progetto, non user page),
     imposta `base: "/<repo>/"` in `vite.config.ts`.
   - Esegui `npm run deploy`.

   In alternativa puoi collegare il repository a **Vercel** o **Netlify** per un
   deploy automatico ad ogni push, senza configurazioni aggiuntive.

## 🔧 Stack tecnico

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- Framer Motion (animazioni)
- lucide-react (icone)
