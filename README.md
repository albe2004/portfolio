# Andrea Alberici — Portfolio

Portfolio personale bilingue (IT/EN) — React + Vite + Tailwind v4 + Framer Motion.
Design ispirato a **dymasalfin.web.id** · Contenuti reali da **albe2004.github.io**.

## Sezioni

- **Home** — hero animato, statistiche, bio
- **Progetti** — 17 progetti con filtri e download delle presentazioni PDF
- **CV** — esperienza, formazione, competenze + **download istantaneo del CV PDF** (generato nel browser, bilingue)
- **Contatti** — LinkedIn / GitHub / Instagram (+ email, se configurata)
- **Lingua IT/EN** — toggle in alto a destra, salvato nel browser

---

## 🚀 Pubblicarlo su GitHub (scegli UNA delle due strade)

### ✅ Strada A — AUTOMATICA (consigliata): fai push e basta

Il workflow già incluso fa tutto: installa, compila e pubblica da solo.

1. Carica **tutto il progetto** (src, public, package.json, index.html, la cartella
   `.github`, …) nel tuo repository, branch `main`.
2. Vai su **Settings → Pages → Build and deployment → Source: `GitHub Actions`**.
3. Fai `git push` (oppure carica i file da web).
4. Apri la scheda **Actions**: quando il workflow è verde, il sito è online.

> Se usi il repo `albe2004.github.io` l'indirizzo sarà `https://albe2004.github.io/`
> Il vecchio sito viene sostituito dalla nuova versione.

### 📦 Strada B — MANUALE: carica i file già compilati

1. In locale: `npm install` → `npm run build`
2. Cartella generata: **`dist/`**
3. Carica **il contenuto** di `dist/` (non la cartella stessa!) nella posizione
   che serve:
   - repo `username.github.io` → nella **root** del branch `main`
   - altro repo → in **`docs/`** su `main`, poi
     Settings → Pages → Source: *Deploy from a branch* → `main` → **`/docs`**

⚠️ **ERRORI CLASSICI SE IL SITO NON PARTE**

| Sintomo | Causa | Soluzione |
|---|---|---|
| Pagina bianca | Hai caricato il **sorgente**, non `dist/` | Usa la Strada A, oppure carica `dist/` |
| Testo ok ma immagini mancanti | Mancano le cartelle `img/` e `downloads/` | Carica *tutto* il contenuto di `dist/` |
| Workflow fallisce | Pages non è in modalità Actions | Settings → Pages → Source: **GitHub Actions** |
| 404 sulle pagine interne | — | Non succede: il sito è una pagina sola, niente router |

Tutti i percorsi sono **relativi**: funziona sia su `username.github.io`
sia su `username.github.io/repo/`.

---

## 📄 PDF dei progetti

I bottoni **"Scarica la presentazione"** puntano ai file dentro
[`public/downloads/`](public/downloads/README.md). Lì c'è la tabella con i nomi
richiesti e il corrispettivo file del vecchio sito: rinomina, incolla, fine.

Se un PDF manca, il bottone porta a una pagina 404 ma il resto del sito funziona
comunque (le immagini hanno un fallback grafico apposta).

## ✏️ Personalizzazioni rapide

Tutto in un solo file: **`src/data/portfolio.ts`**

| Cosa | Dove |
|---|---|
| Email di contatto | `contact.email` (vuota = pulsante nascosto) |
| Testi IT / EN | dizionario `t` |
| Progetti (titolo, descrizione, immagine, PDF) | array `projects` |
| CV | `experience`, `education`, `skillGroups` |

## 🎓 CV in PDF

Il pulsante **CV** (in alto a destra) genera e scarica subito un PDF
brandizzato, in italiano o inglese a seconda della lingua attiva.
Codice in `src/lib/cvPdf.ts`. Se preferisci il tuo PDF "fatto a mano":
mettilo in `public/downloads/CV-Andrea-Alberici.pdf` e sostituisci la chiamata
a `downloadCvPdf()` con un semplice `<a href="downloads/CV-Andrea-Alberici.pdf" download>`.

## 🛠 Sviluppo in locale

```bash
npm install
npm run dev      # anteprima
npm run build    # compila in dist/
```
