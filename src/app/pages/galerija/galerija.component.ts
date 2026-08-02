import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { MaskeService } from '../../core/services/maske.service';
import { Maska } from '../../core/models/maska.model';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';
import { SocialMetaService } from '../../core/services/social-meta.service';

@Component({
  selector: 'app-galerija',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './galerija.component.html',
  styleUrl: './galerija.component.scss'
})
export class GalerijaComponent implements OnDestroy {
  private maskeService = inject(MaskeService);
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);
  private social = inject(SocialMetaService);

  readonly phoneHref = 'tel:+381659775995';

  maske: Maska[] = this.maskeService.getAll();

  constructor(private meta: Meta, private title: Title) {
    const seoTitle = 'Galerija maski za radijatore – primeri iz prakse';
    const description = 'Pogledajte galeriju naših maski za radijatore. Primeri iz stvarnih enterijera – dnevne sobe, spavaće sobe, kancelarije.';
    const url = 'https://maskezaradijatore.rs/galerija';

    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.canonical.set(url);
    this.social.set({ title: seoTitle, description, url });

    this.schema.inject('galerija-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Galerija', item: 'https://maskezaradijatore.rs/galerija' }
      ]
    });

    this.schema.inject('galerija-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li fotografije u galeriji prikazuju stvarne maske za radijatore koje ste izradili?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, galerija prikazuje primere naših maski za radijatore u stvarnim enterijerima – dnevnim sobama, spavaćim sobama i kancelarijama.'
          }
        },
        {
          '@type': 'Question',
          name: 'Gde mogu videti još fotografija maski za radijatore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Više fotografija je dostupno na našem Instagram nalogu, ili nas pozovite i napravimo masku po meri za vaš radijator.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('galerija-breadcrumb');
    this.schema.remove('galerija-faq');
  }
}
