import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';
import { SocialMetaService } from '../../core/services/social-meta.service';

@Component({
  selector: 'app-kako-izabrati',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './kako-izabrati.component.html',
  styleUrl: './kako-izabrati.component.scss'
})
export class KakoIzabratiComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);
  private social = inject(SocialMetaService);

  constructor(private meta: Meta, private title: Title) {
    const seoTitle = 'Kako izabrati masku za radijator – vodič za kupovinu';
    const description = 'Vodič: kako izabrati pravu masku za radijator. Šta meriti, koji materijal, perforisana ili lamelna maska – sve na jednom mestu.';
    const url = 'https://maskezaradijatore.rs/kako-izabrati-masku-za-radijator';

    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.canonical.set(url);
    this.social.set({ title: seoTitle, description, url });

    this.schema.inject('kako-izabrati-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://maskezaradijatore.rs/blog' },
        { '@type': 'ListItem', position: 3, name: 'Kako izabrati masku za radijator', item: 'https://maskezaradijatore.rs/kako-izabrati-masku-za-radijator' }
      ]
    });

    this.schema.inject('kako-izabrati-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Šta prvo treba uraditi pre kupovine maske za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Izmeriti radijator – širinu, visinu i dubinu, kao i razmak od zida i položaj cevi. Tačne mere su ključ za savršen rezultat.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koji materijal je bolji – metalna ili drvena maska za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Metalne maske od plastificiranog lima su najtrajniji izbor, otporne na temperaturu i lako se čiste. Drvene maske su lepše na dodir, ali zahtevaju više održavanja i manje su otporne na vlagu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li je bolja perforisana ili lamelna maska za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oba tipa podjednako dobro griju prostoriju kada su pravilno izrađeni. Perforisane imaju sitne otvore, a lamelne horizontalne trake i nešto su bolje za visoke radijatore.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kada je potrebna maska za radijator po meri umesto gotove?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ako radijator ima nestandardne dimenzije, izrada po meri je jedino rešenje koje garantuje estetiku bez kompromisa.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('kako-izabrati-breadcrumb');
    this.schema.remove('kako-izabrati-faq');
  }
}
