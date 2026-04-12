import { Injectable } from '@angular/core';
import { Maska } from '../models/maska.model';

const MASKE: Maska[] = [
    {
    id: 'maska-klasicna',
    naziv: 'Maska za radijator – Klasična',
    slug: 'maska-za-radijator-klasicna',
    kratakOpis: 'Klasičan uzorak koji se uklapa u svaki enterijer.',
    opis:
      'Dekorativna maska za radijator klasičnog dizajna od plastificiranog lima. ' +
      'Idealna za dnevne sobe, spavaće sobe i kancelarije. ' +
      'Laserski isečeni uzorak obezbeđuje estetiku uz nesmetan protok toplog vazduha.',
    slike: ['assets/maska-za-radijator.png'],
    materijal: 'Plastificirani lim',
    cena: 12480,
    novo: false,
    dostupno: true,
    karakteristike: [
      'Klasičan uzorak',
      'Laserski isečeni otvori',
      'CNC izrada',
      'Po meri',
    ],
    schemaAlt:
      'Klasična dekorativna maska za radijator od plastificiranog lima',
  },
  {
    id: 'maska-linije',
    naziv: 'Maska za radijator – Linije',
    slug: 'maska-za-radijator-linije',
    kratakOpis: 'Horizontalne linije za moderan i čist izgled.',
    opis:
      'Dekorativna maska za radijator sa uzorkom horizontalnih linija. ' +
      'Izrađena od plastificiranog lima CNC tehnologijom. ' +
      'Horizontalne lamele obezbeđuju optimalan protok toplog vazduha bez gubitka efikasnosti grejanja.',
    slike: ['assets/maska-za-radijator-linije.png'],
    materijal: 'Plastificirani lim',
    cena: 12480,
    novo: true,
    dostupno: true,
    karakteristike: [
      'Horizontalne lamele',
      'Optimalan protok vazduha',
      'CNC izrada',
      'Po meri',
    ],
    schemaAlt:
      'Maska za radijator sa uzorkom horizontalnih linija od plastificiranog lima',
  },
  {
    id: 'maska-bez-sare',
    naziv: 'Maska za radijator – Glatka',
    slug: 'maska-za-radijator-glatka',
    kratakOpis: 'Minimalistički dizajn bez uzorka – čist i elegantan.',
    opis:
      'Glatka dekorativna maska za radijator bez šare, za maksimalnu eleganciju i minimalistički enterijer. ' +
      'Izrađena od plastificiranog lima, dostupna u beloj, crnoj i antracit boji. ' +
      'Perforacije odozdo i odozgo obezbeđuju cirkulaciju toplog vazduha.',
    slike: ['assets/maska-za-radijator-bez-sare.png'],
    materijal: 'Plastificirani lim',
    cena: 12480,
    novo: false,
    dostupno: true,
    karakteristike: [
      'Bez uzorka – minimalistički',
      'Perforacije za protok vazduha',
      'CNC izrada',
      'Po meri',
    ],
    schemaAlt:
      'Glatka maska za radijator bez šare od plastificiranog lima – minimalistički dizajn',
  }
];

@Injectable({ providedIn: 'root' })
export class MaskeService {
  /** Vraća sve maske */
  getAll(): Maska[] {
    return MASKE;
  }

  /** Vraća jednu masku po slug-u */
  getBySlug(slug: string): Maska | undefined {
    return MASKE.find(m => m.slug === slug);
  }

  /** Vraća jednu masku po id-u */
  getById(id: string): Maska | undefined {
    return MASKE.find(m => m.id === id);
  }

  /** Formatira cenu u srpski format */
  formatCena(cena: number): string {
    return cena.toLocaleString('sr-RS');
  }
}
