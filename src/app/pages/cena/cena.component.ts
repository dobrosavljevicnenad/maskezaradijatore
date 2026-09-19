import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';
import { SocialMetaService } from '../../core/services/social-meta.service';

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
  private social = inject(SocialMetaService);

  constructor(private meta: Meta, private title: Title) {
    const seoTitle = 'Maska za radijator cena 2026 – fiksno 13.480 RSD za sve modele | maskezaradijatore.rs';
    const description = 'Cena maske za radijator je fiksna – 13.480 RSD za sve dimenzije i modele, bez skrivenih troškova. Izrada po meri, dostava Srbija. ☎ 065 977 5995 za ponudu.';
    const url = 'https://maskezaradijatore.rs/maske-za-radijatore-cena';

    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.canonical.set(url);
    this.social.set({ title: seoTitle, description, url });

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
            text: 'Cena maske za radijator je fiksna i iznosi 13.480 RSD, bez obzira na dimenzije radijatora, uzorak ili odabranu boju.'
          }
        },
        {
          '@type': 'Question',
          name: 'Šta je uključeno u cenu maske za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'U cenu je uključena izrada od plastificiranog lima debljine 1,5mm, CNC rezanje, prašno lakiranje u odabranoj boji i dostava kurirskom službom na adresu u Srbiji.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li postoji dodatna naknada za nestandardne dimenzije?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne. Cena je ista za sve dimenzije i modele – 13.480 RSD. Svaka maska se izrađuje po meri, bez dodatnih troškova ili skrivenih naknada.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li je JYSK jeftiniji od izrade po meri?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gotovi modeli iz prodavnica mogu izgledati jeftinije, ali dolaze u fiksnim dimenzijama koje retko odgovaraju tačno vašem radijatoru. Naša fiksna cena od 13.480 RSD uključuje izradu po meri, tako da nema neuklapanja ni naknadnih troškova.'
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
    { naziv: 'Klasična maska – sve dimenzije', cena: 13480 },
    { naziv: 'Maska sa linijama – sve dimenzije', cena: 13480 },
    { naziv: 'Glatka maska – sve dimenzije', cena: 13480 },
    { naziv: 'Izrada po meri (nestandardne dimenzije)', cena: 13480 },
  ];
}
