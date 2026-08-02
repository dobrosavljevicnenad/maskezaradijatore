import { Component, inject, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';
import { SocialMetaService } from '../../core/services/social-meta.service';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  readonly phoneDisplay = '065 977 5995';
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);
  private social = inject(SocialMetaService);

  constructor(private meta: Meta, private title: Title) {
    const seoTitle = 'Kontakt – naručite masku za radijator | maskezaradijatore.rs';
    const description = 'Kontaktirajte nas za ponudu ili porudžbinu maske za radijator. Pozovite 065 977 5995 ili pošaljite upit. Smederevo, dostava Srbija.';
    const url = 'https://maskezaradijatore.rs/kontakt';

    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.canonical.set(url);
    this.social.set({ title: seoTitle, description, url });

    this.schema.inject('kontakt-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Kontakt', item: 'https://maskezaradijatore.rs/kontakt' }
      ]
    });

    this.schema.inject('kontakt-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kako mogu da naručim masku za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Izmerite radijator (širina, visina, dubina), pozovite nas i saopštite dimenzije, dogovorite uzorak i boju, a mi izrađujemo i šaljemo masku na vašu adresu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koje je radno vreme za naručivanje maske za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dostupni smo radnim danima od 09:00 do 17:00. Subotom i nedeljom smo zatvoreni.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za radijatore van Smedereva?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo maske za radijatore na adrese u celoj Srbiji. Rok isporuke je obično 5–10 radnih dana od potvrde porudžbine.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('kontakt-breadcrumb');
    this.schema.remove('kontakt-faq');
  }
}
