/**
 * Sezione "Nel tempo libero": poster e grafiche fatti per piacere.
 *
 * COME FUNZIONA
 *  - Metti le immagini in  public/img/posters/  chiamandole
 *      poster-1, poster-2, poster-3 ... fino a poster-20
 *    (va bene jpg, jpeg, png o webp: non serve scrivere l'estensione).
 *  - Il sito mostra solo i file che esistono davvero, nell'ordine dei numeri.
 *    Se ne metti 12 compaiono 12; se ne aggiungi altri compaiono in coda.
 *
 * VUOI PIU' DI 20 POSTI?  Cambia il numero  SLOTS  qui sotto.
 *
 * VUOI DARE UN TITOLO A UN LAVORO?  (compare quando lo ingrandisci)
 *  Aggiungi in fondo all'elenco una riga come:
 *      { src: "img/posters/nome-del-file", title: "Il mio titolo" },
 *  (i file con un nome diverso da poster-N si aggiungono così)
 */
export interface SideWork {
  /** percorso da img/..., con o senza estensione */
  src: string;
  title?: string;
}

const SLOTS = 20;

export const sideWorks: SideWork[] = [
  ...Array.from({ length: SLOTS }, (_, i) => ({ src: `img/posters/poster-${i + 1}` })),
  // { src: "img/posters/nome-del-file", title: "Il mio titolo" },
];
