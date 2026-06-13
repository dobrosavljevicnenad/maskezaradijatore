import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';

@Component({
  selector: 'app-cena',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './cena.component.html',
  styleUrl: './cena.component.scss'
})
export class CenaComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  readonly phoneDisplay = '065 977 5995';
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Maska za radijator cena 2026 – od 10.980 do 14.480 RSD | maskezaradijatore.rs');
    this.meta.updateTag({ name: 'description', content: 'Koliko košta maska za radijator? Od 10.980 RSD (standardna) do 14.480+ RSD (jumbo format). Izrada po meri, dostava Srbija. ☎ 065 977 5995 za ponudu.' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.canonical.set('https://maskezaradijatore.rs/maske-za-radijatore-cena');

    this.schema.inject('cena-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maska za radijator cena', item: 'https://maskezaradijatore.rs/maske-za-radijatore-cena' }
      ]
    });

    this.schema.inject('cena-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Koliko košta maska za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cena maske za radijator kreće se od 10.980 RSD za standardne dimenzije (do 60 cm širine) do 14.480+ RSD za jumbo format (120 cm+). Konačna cena zavisi od dimenzija, uzorka i boje.'
          }
        },
        {
          '@type': 'Question',
          name: 'Šta je uključeno u cenu maske za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'U cenu je uključena izrada od plastificiranog lima, CNC rezanje, prašno lakiranje u odabranoj boji i dostava kurirskom službom na adresu u Srbiji.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li postoji dodatna naknada za nestandardne dimenzije?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Svaka maska se izrađuje po meri – nema dodatnih troškova za nestandardne dimenzije. Cena zavisi samo od veličine (površine) i odabranog uzorka, ne od toga da li su dimenzije standardne.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('cena-breadcrumb');
    this.schema.remove('cena-faq');
  }

  stavke = [
    { naziv: 'Standardna maska (do 60cm širine)', cenaOd: 10980, cenaDo: 11980 },
    { naziv: 'Maska srednje veličine (60–90cm)', cenaOd: 11980, cenaDo: 12980 },
    { naziv: 'Velika maska (90–120cm)', cenaOd: 12480, cenaDo: 14480 },
    { naziv: 'Maska jumbo format (120cm+)', cenaOd: 14480, cenaDo: null },
  ];
}
