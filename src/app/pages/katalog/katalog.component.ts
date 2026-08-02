import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { MaskeService } from '../../core/services/maske.service';
import { Maska } from '../../core/models/maska.model';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';
import { SocialMetaService } from '../../core/services/social-meta.service';

@Component({
  selector: 'app-katalog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './katalog.component.html',
  styleUrl: './katalog.component.scss'
})
export class KatalogComponent implements OnDestroy {
  private maskeService = inject(MaskeService);
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);
  private social = inject(SocialMetaService);

  readonly phoneHref = 'tel:+381659775995';
  readonly phoneDisplay = '065 977 5995';

  maske: Maska[] = this.maskeService.getAll();

  formatCena(cena: number): string {
    return this.maskeService.formatCena(cena);
  }

  constructor(private meta: Meta, private title: Title) {
    const seoTitle = 'Maske za radijatore – gotove i po meri, cene od 10.980 RSD | maskezaradijatore.rs';
    const description = 'Svi modeli maski za radijatore – standardne (gotove) i po meri, bela i antracit boja, CNC izrada od plastificiranog lima. Dostava širom Srbije.';
    const url = 'https://maskezaradijatore.rs/maske-za-radijatore';

    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.canonical.set(url);
    this.social.set({ title: seoTitle, description, url });

    this.schema.inject('katalog-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maske za radijatore – svi modeli i cene', item: 'https://maskezaradijatore.rs/maske-za-radijatore' }
      ]
    });

    this.schema.inject('katalog-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Koji modeli maski za radijatore su dostupni?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Modeli od plastificiranog lima, perforisani i lamelni, izrađeni CNC tehnologijom u beloj i antracit boji. Dostupni su u standardnim dimenzijama i po meri.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li su gotove maske za radijatore zaista gotove ili se prave nakon narudžbine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Svaka maska, uključujući modele sa standardnim dimenzijama, izrađuje se tek nakon prijema vaših mera – tako garantujemo savršeno prileganje.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li maske za radijatore iz kataloga smanjuju grejanje?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne. Perforisani i lamelni modeli omogućavaju nesmetano strujanje toplog vazduha, bez gubitka efikasnosti grejanja.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('katalog-breadcrumb');
    this.schema.remove('katalog-faq');
  }
}
