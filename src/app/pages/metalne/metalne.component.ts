import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';
import { SocialMetaService } from '../../core/services/social-meta.service';

@Component({
  selector: 'app-metalne',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './metalne.component.html',
  styleUrl: './metalne.component.scss'
})
export class MetalneComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  readonly phoneDisplay = '065 977 5995';
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);
  private social = inject(SocialMetaService);

  constructor(private meta: Meta, private title: Title) {
    const seoTitle = 'Metalne maske za radijatore – plastificirani lim, CNC izrada po meri';
    const description = 'Metalne maske za radijatore od plastificiranog lima – trajne, otporne na vlagu, lako se čiste. CNC izrada po meri, bela i antracit boja. Dostava Srbija.';
    const url = 'https://maskezaradijatore.rs/metalne-maske-za-radijatore';

    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.canonical.set(url);
    this.social.set({ title: seoTitle, description, url });

    this.schema.inject('metalne-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Metalne maske za radijatore', item: 'https://maskezaradijatore.rs/metalne-maske-za-radijatore' }
      ]
    });

    this.schema.inject('metalne-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Zašto su metalne maske za radijatore bolje od drvenih?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Metalne maske za radijatore od plastificiranog lima su otpornije na vlagu, temperaturu i ogrebotine od drvenih. Ne bubre, ne pucaju i ne zahtevaju farbanje. Idealne su za kupatila, kuhinje i sve prostorije sa centralnim grejanjem.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koje boje su dostupne za metalne maske za radijatore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Metalne maske za radijatore dostupne su u beloj, antracit, crnoj i RAL bojama po izboru. Površina je prašno lakovana (powder coating) što daje trajnu i otpornu završnicu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li metalna maska za radijator smanjuje grejanje?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne. Naše metalne maske za radijatore imaju perforiranu ili lamelnu površinu koja propušta topao vazduh. Gubitak toplotne efikasnosti je manji od 5%, što je zanemarljivo za svakodnevnu upotrebu.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('metalne-breadcrumb');
    this.schema.remove('metalne-faq');
  }
}
