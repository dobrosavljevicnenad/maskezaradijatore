import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';
import { SocialMetaService } from '../../core/services/social-meta.service';

@Component({
  selector: 'app-zastita-za-decu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './zastita-za-decu.component.html',
  styleUrl: './zastita-za-decu.component.scss'
})
export class ZastitaZaDecuComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);
  private social = inject(SocialMetaService);

  constructor(private meta: Meta, private title: Title) {
    const seoTitle = 'Maska za radijator – zaštita za decu od vrelog radijatora';
    const description = 'Kako maska za radijator štiti decu od opekotina, oštrih rebara i ventila. Saveti za dečiju sobu i grejnu sezonu, izrada po meri od plastificiranog lima.';
    const url = 'https://maskezaradijatore.rs/maska-za-radijator-zastita-za-decu';

    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.canonical.set(url);
    this.social.set({ title: seoTitle, description, url });

    this.schema.inject('deca-article', {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Maska za radijator kao zaštita za decu',
      description,
      url,
      inLanguage: 'sr-RS',
      datePublished: '2026-10-04',
      dateModified: '2026-10-04',
      author: { '@type': 'Organization', name: 'Maske za radijatore', url: 'https://maskezaradijatore.rs/' },
      publisher: { '@type': 'Organization', name: 'Maske za radijatore – SZMR Đorđević', url: 'https://maskezaradijatore.rs/' }
    });

    this.schema.inject('deca-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://maskezaradijatore.rs/blog' },
        { '@type': 'ListItem', position: 3, name: 'Maska za radijator – zaštita za decu', item: url }
      ]
    });

    this.schema.inject('deca-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li se maska za radijator zagreje?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Maska postaje topla jer toplota prolazi kroz nju, ali nije u direktnom kontaktu sa radijatorom, pa je njena površina znatno hladnija od rebara i cevi samog radijatora. Glavna zaštita je to što dete ne može direktno da dodirne vrela rebra, cevi i ventil.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li dete može da obori masku za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Maska se postavlja na nosače koji se kače na radijator ili se oslanjaju o pod i zid. Ako u kući imate malu decu koja se penju i vuku nameštaj, recite nam pri naručivanju – predložićemo dodatno učvršćivanje.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li maska za radijator ima oštre ivice?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne. Ivice se savijaju i obrađuju, a lim se plastificira (prah-farba pečena na visokoj temperaturi), pa je površina glatka i bez oštrih delova.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li maska za radijator smanjuje grejanje u dečijoj sobi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pravilno izrađena perforisana maska sa otvorenim gornjim delom propušta toplotu gotovo neometano, pa razlika u temperaturi prostorije nije primetna.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('deca-article');
    this.schema.remove('deca-breadcrumb');
    this.schema.remove('deca-faq');
  }
}
