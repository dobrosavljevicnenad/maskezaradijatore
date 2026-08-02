import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';
import { SocialMetaService } from '../../core/services/social-meta.service';

@Component({
  selector: 'app-da-li-smanjuje-grejanje',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './da-li-smanjuje-grejanje.component.html',
  styleUrl: './da-li-smanjuje-grejanje.component.scss'
})
export class DaLiSmanjujeGrejanjeComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);
  private social = inject(SocialMetaService);

  constructor(private meta: Meta, private title: Title) {
    const seoTitle = 'Da li maska za radijator smanjuje grejanje? – odgovor stručnjaka';
    const description = 'Da li maska za radijator smanjuje grejanje? Kratki odgovor: ne, ako je pravilno izrađena. Pročitajte detaljan odgovor i savete.';
    const url = 'https://maskezaradijatore.rs/da-li-maska-smanjuje-grejanje';

    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.canonical.set(url);
    this.social.set({ title: seoTitle, description, url });

    this.schema.inject('da-li-smanjuje-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://maskezaradijatore.rs/blog' },
        { '@type': 'ListItem', position: 3, name: 'Da li maska smanjuje grejanje', item: 'https://maskezaradijatore.rs/da-li-maska-smanjuje-grejanje' }
      ]
    });

    this.schema.inject('da-li-smanjuje-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li maska za radijator smanjuje grejanje?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne, ako je pravilno izrađena. Perforisane i lamelne maske propuštaju toplotu gotovo identično kao otvoren radijator, uz gubitak efikasnosti od svega 2–5%.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kako toplota prolazi kroz masku za radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prirodnom konvekcijom – hladan vazduh ulazi kroz otvore na dnu maske, zagreva se uz radijator i diže se, a topao vazduh izlazi kroz otvore na vrhu u prostoriju.'
          }
        },
        {
          '@type': 'Question',
          name: 'Šta treba izbegavati kod maske za radijator da ne bi smanjila grejanje?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pune, zatvorene maske bez otvora mogu smanjiti grejanje i do 20%. Treba izbegavati i maske bez donjeg ili gornjeg otvora, kao i predebele materijale koji akumuliraju toplotu.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('da-li-smanjuje-breadcrumb');
    this.schema.remove('da-li-smanjuje-faq');
  }
}
