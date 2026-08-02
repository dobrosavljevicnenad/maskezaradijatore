import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';
import { SocialMetaService } from '../../core/services/social-meta.service';

@Component({
  selector: 'app-gde-kupiti',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gde-kupiti.component.html',
  styleUrl: './gde-kupiti.component.scss'
})
export class GdeKupitiComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  readonly phoneDisplay = '065 977 5995';
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);
  private social = inject(SocialMetaService);

  constructor(private meta: Meta, private title: Title) {
    const seoTitle = 'Maska za radijator Beograd, Novi Sad, Niš – dostava po Srbiji';
    const description = 'Kupite masku za radijator direktno od proizvođača. Dostavljamo u Beograd, Novi Sad, Niš, Kragujevac i celu Srbiju. Izrada po meri, rok 5–10 radnih dana.';
    const url = 'https://maskezaradijatore.rs/gde-kupiti-masku-za-radijator';

    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.canonical.set(url);
    this.social.set({ title: seoTitle, description, url });

    this.schema.inject('gde-kupiti-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Gde kupiti masku za radijator', item: 'https://maskezaradijatore.rs/gde-kupiti-masku-za-radijator' }
      ]
    });

    this.schema.inject('gde-kupiti-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Gde mogu da kupim masku za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Direktno od proizvođača u Smederevu, sa dostavom na adresu u celoj Srbiji – bez posrednika i uz garanciju kvaliteta.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje dostava maske za radijator u Beograd?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dostava u Beograd traje 2–4 radna dana kurirskom službom, direktno na kućnu adresu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za radijatore u Novi Sad i Niš?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Dostava u Novi Sad traje 2–3 radna dana, a u Niš i okolinu takođe redovno dostavljamo, bez obzira na tip radijatora.'
          }
        },
        {
          '@type': 'Question',
          name: 'U koje sve gradove dostavljate maske za radijatore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pored Beograda, Novog Sada i Niša, redovno dostavljamo u Kragujevac, Suboticu, Zrenjanin, Čačak, Pančevo, Valjevo, Šabac, Leskovac, Požarevac, Vranje, Užice i sve ostale gradove u Srbiji.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('gde-kupiti-breadcrumb');
    this.schema.remove('gde-kupiti-faq');
  }

  gradovi = ['Beograd', 'Novi Sad', 'Niš', 'Kragujevac', 'Subotica', 'Zrenjanin', 'Čačak', 'Smederevo', 'Pančevo', 'Valjevo', 'Šabac', 'Leskovac', 'Požarevac', 'Vranje', 'Užice'];
}
