import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';

@Component({
  selector: 'app-kako-izmeriti-radijator',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './kako-izmeriti-radijator.component.html',
  styleUrl: './kako-izmeriti-radijator.component.scss'
})
export class KakoIzmeritiRadijatorComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Kako izmeriti radijator za masku – vodič korak po korak');
    this.meta.updateTag({ name: 'description', content: 'Kako izmeriti radijator za masku za radijator? Potrebne su vam tri mere: širina, visina i dubina. Detaljan vodič sa primerima i savetima.' });
    this.canonical.set('https://maskezaradijatore.rs/kako-izmeriti-radijator-za-masku');

    this.schema.inject('kako-izmeriti-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://maskezaradijatore.rs/blog' },
        { '@type': 'ListItem', position: 3, name: 'Kako izmeriti radijator za masku', item: 'https://maskezaradijatore.rs/kako-izmeriti-radijator-za-masku' }
      ]
    });

    this.schema.inject('kako-izmeriti-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Koje mere su potrebne za masku za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Potrebne su tri mere: širina radijatora, visina radijatora i dubina (koliko strši od zida). Maska se pravi 2–3 cm šira i viša od radijatora.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li postoje standardne dimenzije maski za radijatore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne, maske za radijatore se rade isključivo po meri svakog radijatora. Svaki radijator ima specifičnu kombinaciju visine, širine i dubine.'
          }
        },
        {
          '@type': 'Question',
          name: 'Šta ako nisam siguran u mere?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pozovite nas na 065 977 5995 i vodimo vas kroz merenje telefonom. Možete nam i poslati fotografiju radijatora sa metrom.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('kako-izmeriti-breadcrumb');
    this.schema.remove('kako-izmeriti-faq');
  }
}
