import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';

@Component({
  selector: 'app-montaza-maske-za-radijator',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './montaza-maske-za-radijator.component.html',
  styleUrl: './montaza-maske-za-radijator.component.scss'
})
export class MontazaMaskeZaRadijatorComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Montaža maske za radijator – korak po korak vodič');
    this.meta.updateTag({ name: 'description', content: 'Kako se montira maska za radijator? Postavljanje je jednostavno, traje 15–30 minuta i ne zahteva majstora ni bušenje. Detaljan vodič.' });
    this.canonical.set('https://maskezaradijatore.rs/montaza-maske-za-radijator');

    this.schema.inject('montaza-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://maskezaradijatore.rs/blog' },
        { '@type': 'ListItem', position: 3, name: 'Montaža maske za radijator', item: 'https://maskezaradijatore.rs/montaza-maske-za-radijator' }
      ]
    });

    this.schema.inject('montaza-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li je potrebno bušiti zid za montažu maske za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne. Maske za radijatore se postavljaju pomoću nosača koji se kače na cev radijatora ili se oslanjaju o pod. Bušenje zida nije potrebno.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje montaža maske za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Montaža standardnog radijatora traje 15 do 30 minuta. Nije potreban majstor – posao može obaviti bilo ko.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li se maska za radijator može skinuti?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, maska se može skinuti bez alata u svakom trenutku – za servis radijatora, čišćenje ili preuređenje prostorije.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('montaza-breadcrumb');
    this.schema.remove('montaza-faq');
  }
}
