import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';
import { SocialMetaService } from '../../core/services/social-meta.service';

@Component({
  selector: 'app-po-meri',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './po-meri.component.html',
  styleUrl: './po-meri.component.scss'
})
export class PoMeriComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  readonly phoneDisplay = '065 977 5995';
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);
  private social = inject(SocialMetaService);

  constructor(private meta: Meta, private title: Title) {
    const seoTitle = 'Maska za radijator po meri – izrada prema vašim dimenzijama';
    const description = 'Naručite masku za radijator po meri. Pošaljite dimenzije, mi izradimo i dostavimo na adresu. CNC izrada, plastificirani lim, Srbija.';
    const url = 'https://maskezaradijatore.rs/maska-za-radijator-po-meri';

    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.canonical.set(url);
    this.social.set({ title: seoTitle, description, url });

    this.schema.inject('po-meri-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maska za radijator po meri', item: 'https://maskezaradijatore.rs/maska-za-radijator-po-meri' }
      ]
    });

    this.schema.inject('po-meri-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kako se naručuje maska za radijator po meri?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Izmerite radijator (širinu, visinu i dubinu), pošaljite nam dimenzije i željenu boju ili uzorak, a mi izrađujemo CNC tehnologijom i dostavljamo u roku od 5 do 10 radnih dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koje mere su potrebne za izradu maske po meri?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Potrebne su tri mere: širina, visina i dubina radijatora, kao i razmak od zida.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li se maska po meri dostavlja u sve gradove Srbije?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo gotovu masku direktno na adresu bilo gde u Srbiji – Beograd, Novi Sad, Niš, Kragujevac i ostali gradovi.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('po-meri-breadcrumb');
    this.schema.remove('po-meri-faq');
  }

  koraci = [
    { broj: '01', naziv: 'Izmerite radijator', opis: 'Izmervite širinu, visinu i dubinu radijatora. Zabeležite i razmak do zida.' },
    { broj: '02', naziv: 'Pošaljite dimenzije', opis: 'Pozovite nas ili pošaljite poruku sa dimenzijama i željenom bojom/uzorkom.' },
    { broj: '03', naziv: 'Izrada i dostava', opis: 'Maska se izrađuje CNC tehnologijom i šalje na vašu adresu u roku 5–10 dana.' },
  ];
}
