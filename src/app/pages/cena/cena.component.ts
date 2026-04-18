import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';

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

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Maske za radijatore cena – koliko košta maska za radijator?');
    this.meta.updateTag({ name: 'description', content: 'Koliko košta maska za radijator? Cene maski od plastificiranog lima kreću se od 10.980 RSD. Izrada po meri, dostava Srbija.' });

    this.schema.inject('cena-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maske za radijatore cena', item: 'https://maskezaradijatore.rs/maske-za-radijatore-cena' }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('cena-breadcrumb');
  }

  stavke = [
    { naziv: 'Standardna maska (do 60cm širine)', cenaOd: 10980, cenaDo: 11980 },
    { naziv: 'Maska srednje veličine (60–90cm)', cenaOd: 11980, cenaDo: 12980 },
    { naziv: 'Velika maska (90–120cm)', cenaOd: 12480, cenaDo: 14480 },
    { naziv: 'Maska jumbo format (120cm+)', cenaOd: 14480, cenaDo: null },
  ];
}
