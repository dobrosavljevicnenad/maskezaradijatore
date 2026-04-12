export interface Maska {
  id: string;
  naziv: string;
  slug: string;
  kratakOpis: string;
  opis: string;
  slike: string[];          // prva slika = glavna
  materijal: string;
  cena: number;
  novo: boolean;
  dostupno: boolean;
  karakteristike: string[];
  schemaAlt: string;        // alt tekst za SEO structured data
}
