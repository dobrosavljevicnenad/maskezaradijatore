import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';
import { SocialMetaService } from '../../core/services/social-meta.service';

@Component({
  selector: 'app-drvene',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './drvene.component.html',
  styleUrl: './drvene.component.scss'
})
export class DrveneComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);
  private social = inject(SocialMetaService);

  constructor(private meta: Meta, private title: Title) {
    const seoTitle = 'Drvene maske za radijatore – prirodni materijali za enterijer';
    const description = 'Drvene maske za radijatore za topao i prirodan izgled enterijera. Saznajte razlike u odnosu na metalne maske i šta je bolje za vas.';
    const url = 'https://maskezaradijatore.rs/drvene-maske-za-radijatore';

    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.canonical.set(url);
    this.social.set({ title: seoTitle, description, url });

    this.schema.inject('drvene-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Drvene maske za radijatore', item: 'https://maskezaradijatore.rs/drvene-maske-za-radijatore' }
      ]
    });

    this.schema.inject('drvene-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Koje su prednosti drvenih maski za radijatore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prirodan i topao izgled koji se uklapa u drvene podove i nameštaj, mogućnost farbanja ili lakiranja po želji, i ekološki materijal.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koji su nedostaci drvenih maski za radijatore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Osetljive su na vlagu, mogu pucati ili se deformisati od toplote pri dužem kontaktu, zahtevaju više održavanja i skuplje su za izradu po meri.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li su drvene ili metalne maske za radijatore bolji izbor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Za kupatila, kuhinje i prostore sa visokom vlagom preporučujemo metalne maske od plastificiranog lima. Za dnevne sobe sa drvenim podom i rustičnim enterijerom, drvena maska može biti pravi izbor.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('drvene-breadcrumb');
    this.schema.remove('drvene-faq');
  }
}
