import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';
import { SocialMetaService } from '../../core/services/social-meta.service';

@Component({
  selector: 'app-liveni-radijator',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './liveni-radijator.component.html',
  styleUrl: './liveni-radijator.component.scss'
})
export class LiveniRadijatorComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);
  private social = inject(SocialMetaService);

  constructor(private meta: Meta, private title: Title) {
    const seoTitle = 'Maska za liveni i člankasti radijator – izrada po meri';
    const description = 'Maska za stari liveni (člankasti, rebrasti) radijator po meri: kako se meri, kako se postavlja bez bušenja i da li smanjuje grejanje. Plastificirani lim 1,5 mm, 13.480 RSD.';
    const url = 'https://maskezaradijatore.rs/maska-za-liveni-radijator';

    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.canonical.set(url);
    this.social.set({ title: seoTitle, description, url });

    this.schema.inject('liveni-article', {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Maska za liveni i člankasti radijator',
      description,
      url,
      inLanguage: 'sr-RS',
      datePublished: '2026-10-17',
      dateModified: '2026-10-17',
      author: { '@type': 'Organization', name: 'Maske za radijatore', url: 'https://maskezaradijatore.rs/' },
      publisher: { '@type': 'Organization', name: 'Maske za radijatore – SZMR Đorđević', url: 'https://maskezaradijatore.rs/' }
    });

    this.schema.inject('liveni-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://maskezaradijatore.rs/blog' },
        { '@type': 'ListItem', position: 3, name: 'Maska za liveni radijator', item: url }
      ]
    });

    this.schema.inject('liveni-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li može maska na stari liveni radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Može. Svaku masku radimo po meri, pa dubina, visina i položaj ventila livenog radijatora nisu problem. Potrebne su nam širina, visina i dubina radijatora i položaj cevi i ventila.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li maska smanjuje grejanje livenog radijatora?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perforisana maska sa otvorenim gornjim delom propušta topao vazduh naviše, pa razlika u temperaturi prostorije nije primetna. Važno je da gornji deo ne bude zatvoren i da na maski ne stoje stvari koje pokrivaju otvore.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kako se maska postavlja na člankasti radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bez bušenja zida – maska se kači nosačima na cev radijatora ili stoji ispred njega sa osloncem na pod. Način montaže dogovaramo prema tipu radijatora i položaju cevi.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko košta maska za liveni radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cena je fiksna i iznosi 13.480 RSD, isto kao i za ostale tipove radijatora, bez obzira na dimenzije i odabrani uzorak.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('liveni-article');
    this.schema.remove('liveni-breadcrumb');
    this.schema.remove('liveni-faq');
  }
}
