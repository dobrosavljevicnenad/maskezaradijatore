import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';
import { SocialMetaService } from '../../core/services/social-meta.service';

@Component({
  selector: 'app-maska-za-cevi-radijatora',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './maska-za-cevi-radijatora.component.html'
})
export class MaskaZaCeviRadijatoraComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);
  private social = inject(SocialMetaService);

  constructor(private meta: Meta, private title: Title) {
    const seoTitle = 'Maska za cevi radijatora – obloga po meri | maskezaradijatore.rs';
    const description = 'Maska za cevi radijatora po meri uredno skriva vidljive cevi i uklapa se uz masku radijatora. Plastificirani lim, izrada po meri i dostava širom Srbije.';
    const url = 'https://maskezaradijatore.rs/maska-za-cevi-radijatora';

    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.canonical.set(url);
    this.social.set({ title: seoTitle, description, url });

    this.schema.inject('cevi-radijatora-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maska za cevi radijatora', item: url }
      ]
    });

    this.schema.inject('cevi-radijatora-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li izrađujete masku za cevi radijatora?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Izrađujemo oblogu za vidljive cevi radijatora po meri prostora i položaja cevi, kao samostalno rešenje ili zajedno sa maskom za radijator.'
          }
        },
        {
          '@type': 'Question',
          name: 'Šta treba izmeriti za masku za cevi radijatora?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pošaljite fotografiju mesta ugradnje i mere dužine, širine i udaljenosti cevi od zida. Važno je navesti i položaj ventila ili drugih delova kojima treba ostaviti pristup.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li obloga za cevi može da se uklopi sa maskom za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Možemo je uskladiti sa maskom za radijator po materijalu, boji i završnoj obradi, tako da prostor oko radijatora izgleda kao celina.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('cevi-radijatora-breadcrumb');
    this.schema.remove('cevi-radijatora-faq');
  }
}
