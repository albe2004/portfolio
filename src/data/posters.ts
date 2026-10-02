/**
 * Sezione "Nel tempo libero": poster e grafica fatti per piacere.
 *
 * Come aggiungere un lavoro:
 *  1. metti l'immagine in  public/img/posters/
 *  2. aggiungi una riga qui sotto con il nome esatto del file
 *
 * "title" è facoltativo: se lo scrivi compare quando ingrandisci l'immagine.
 * L'ordine dell'elenco è l'ordine in cui scorrono.
 */
export interface SideWork {
  src: string;
  title?: string;
}

export const sideWorks: SideWork[] = [
  { src: "img/posters/poster-1.jpg" },
  { src: "img/posters/poster-2.jpg" },
  { src: "img/posters/poster-3.jpg" },
  { src: "img/posters/poster-4.jpg" },
  { src: "img/posters/poster-5.jpg" },
  { src: "img/posters/poster-6.jpg" },
];
