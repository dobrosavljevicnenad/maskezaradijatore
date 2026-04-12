import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-katalog',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './katalog.component.html',
  styleUrl: './katalog.component.scss'
})
export class KatalogComponent {
  readonly phoneHref = 'tel:+381659775995';
  readonly phoneDisplay = '065 977 5995';

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Maske za radijatore – svi modeli i dimenzije | maskezaradijatore.rs');
    this.meta.updateTag({ name: 'description', content: 'Pogledajte sve modele maski za radijatore od plastificiranog lima. Metalne maske po meri, izbor boja i dimenzija. Dostava širom Srbije.' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

  modeli = [
    { naziv: 'Klasična maska za radijator', materijal: 'Plastificirani lim', opis: 'Čist, moderan dizajn pogodan za sve tipove prostora.', cena: 10980 },
    { naziv: 'Perforirana maska za radijator', materijal: 'Plastificirani lim', opis: 'Geometrijski uzorak koji propušta toplotu bez gubitaka.', cena: 11980 },
    { naziv: 'Maska sa lamelama', materijal: 'Plastificirani lim', opis: 'Horizontalne lamele za maksimalan protok toplog vazduha.', cena: 12480 },
  ];
}
