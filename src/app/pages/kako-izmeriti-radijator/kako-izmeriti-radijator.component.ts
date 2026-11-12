import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';
import { SocialMetaService } from '../../core/services/social-meta.service';

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
  private social = inject(SocialMetaService);

  constructor(private meta: Meta, private title: Title) {
    const seoTitle = 'Kako izmeriti masku za radijator – uputstvo sa slikama';
    const description = 'Pogledajte kako da izmerite radijator, pripremite skicu i zabeležite mere lajsni i cevi. Uputstvo sa slikama za izradu maske po meri.';
    const url = 'https://maskezaradijatore.rs/kako-izmeriti-radijator-za-masku';

    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.canonical.set(url);
    this.social.set({ title: seoTitle, description, url });

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
            text: 'Izmerite širinu zajedno sa ventilom, visinu od poda do vrha radijatora i dubinu od zida do najudaljenije tačke. Pošaljite skicu sa merama, položajem i prečnikom cevi. Ako imate podne lajsne, obavezno navedite njihovu visinu i koliko izlaze od zida; ako ih nema, napišite to uz skicu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Šta treba izmeriti ako radijator ima dve cevi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Za svaku cev posebno izmerite visinu od poda do donje ivice cevi i njen spoljašnji prečnik. Tačne visine i prečnici obe cevi potrebni su nam da napravimo odgovarajuće usečke.'
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
