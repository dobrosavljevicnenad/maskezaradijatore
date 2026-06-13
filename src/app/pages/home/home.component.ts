import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';
import { MaskeService } from '../../core/services/maske.service';
import { Maska } from '../../core/models/maska.model';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {
  private maskeService = inject(MaskeService);
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);
  private meta = inject(Meta);
  private titleService = inject(Title);

  phoneHref = 'tel:+381659775995';
  phoneDisplay = '065 977 5995';

  maske: Maska[] = this.maskeService.getAll();

  recenzije = [
    {
      ime: 'Marko Petrović',
      grad: 'Beograd',
      ocena: 5,
      tekst: 'Odlična maska, savršeno se uklapa u dnevnu sobu. Dimenzije su tačne, materijal kvalitetan. Preporučujem svima koji žele da urede radijator bez velikih troškova.'
    },
    {
      ime: 'Jelena Nikolić',
      grad: 'Novi Sad',
      ocena: 5,
      tekst: 'Naručila sam po meri za nestandardni radijator. Ekipa je bila jako ljubazna, sve isporučeno na vreme i tačno po dogovoru. Izgled je prelep.'
    },
    {
      ime: 'Stefan Jovanović',
      grad: 'Smederevo',
      ocena: 5,
      tekst: 'Brza dostava, bez problema. Maska izgleda skuplje nego što je koštala. Montaža je bila jednostavna i radijator sada izgleda kao deo nameštaja.'
    }
  ];

  constructor() {
    this.titleService.setTitle('Maska za radijator – maske za radijatore od 10.980 RSD | maskezaradijatore.rs');
    this.meta.updateTag({ name: 'description', content: 'Dekorativna maska za radijator od plastificiranog lima – izrada po vašim merama. Cene od 10.980 RSD, dostava 2–4 dana po Srbiji. Pozovite 065 977 5995.' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.canonical.set('https://maskezaradijatore.rs/');

    this.schema.inject('home-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li izrađujete maske za radijatore po meri?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Dimenzije, izgled i završna obrada mogu se prilagoditi prostoru i vašim željama. Pošaljite mere i dogovorimo se.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li maska smanjuje grejanje?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne, naše perforisane i lamelne maske propuštaju toplotu gotovo identično kao otvoren radijator. Gubitak je manje od 5%.'
          }
        },
        {
          '@type': 'Question',
          name: 'Od kog materijala su izrađene maske za radijatore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plastificirani lim, CNC rezanje. Otporan na temperaturu, vlagu i ogrebotine. Lako se čisti vlažnom krpom.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kako mogu da dobijem ponudu za masku za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pozovite 065 977 5995 ili nam pošaljite dimenzije radijatora. Odgovaramo brzo i dajemo konkretnu ponudu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za radijatore u Beograd i druge gradove Srbije?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo na adresu širom Srbije – Beograd, Novi Sad, Niš, Kragujevac, Subotica i ostale gradove. Dostava kurirskom službom, rok 2–4 radna dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koje boje i uzorci su dostupni za maske za radijatore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Maske su dostupne u beloj, antracit i RAL bojama. Uzorci uključuju geometrijske perforacije i lamelni dizajn. Prilagođavamo prema vašim željama.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li imate gotove maske za radijatore koje ne zahtevaju merenje?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Imamo standardne dimenzije koje odgovaraju većini radijatora, ali svaku masku izrađujemo tek nakon primanja vaših mera. Izradu po meri preporučujemo jer svaki radijator ima različite dimenzije, a maska po meri garantuje savršeno prileganje bez zazora.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje isporuka maske za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rok isporuke je 5–10 radnih dana od potvrde narudžbine. Dostavljamo kurirskom službom na adresu u Srbiji – Beograd, Novi Sad, Niš, Kragujevac i svi drugi gradovi.'
          }
        }
      ]
    });

    this.schema.inject('home-reviews', {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Maska za radijator',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '53',
        bestRating: '5',
        worstRating: '1'
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Marko Petrović' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Odlična maska, savršeno se uklapa u dnevnu sobu. Dimenzije su tačne, materijal kvalitetan.'
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Jelena Nikolić' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Naručila sam po meri za nestandardni radijator. Sve isporučeno na vreme i tačno po dogovoru.'
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Stefan Jovanović' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Brza dostava, bez problema. Maska izgleda skuplje nego što je koštala.'
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('home-faq');
    this.schema.remove('home-reviews');
  }

  formatCena(cena: number): string {
    return this.maskeService.formatCena(cena);
  }
}
