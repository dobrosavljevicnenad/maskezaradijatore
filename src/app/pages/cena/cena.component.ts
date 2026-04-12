import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cena',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './cena.component.html',
  styleUrl: './cena.component.scss'
})
export class CenaComponent {
  readonly phoneHref = 'tel:+381659775995';
  readonly phoneDisplay = '065 977 5995';

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Maske za radijatore cena – koliko košta maska za radijator?');
    this.meta.updateTag({ name: 'description', content: 'Koliko košta maska za radijator? Cene maski od plastificiranog lima kreću se od 10.980 RSD. Izrada po meri, dostava Srbija.' });
  }

  stavke = [
    { naziv: 'Standardna maska (do 60cm širine)', cenaOd: 10980, cenaDo: 11980 },
    { naziv: 'Maska srednje veličine (60–90cm)', cenaOd: 11980, cenaDo: 12980 },
    { naziv: 'Velika maska (90–120cm)', cenaOd: 12480, cenaDo: 14480 },
    { naziv: 'Maska jumbo format (120cm+)', cenaOd: 14480, cenaDo: null },
  ];
}
