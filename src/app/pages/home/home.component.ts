import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MaskeService } from '../../core/services/maske.service';
import { Maska } from '../../core/models/maska.model';
import { SchemaService } from '../../core/services/schema.service';

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
