import { Component, inject, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';

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

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Kontakt – naručite masku za radijator | maskezaradijatore.rs');
    this.meta.updateTag({ name: 'description', content: 'Kontaktirajte nas za ponudu ili porudžbinu maske za radijator. Pozovite 065 977 5995 ili pošaljite upit. Smederevo, dostava Srbija.' });
    this.canonical.set('https://maskezaradijatore.rs/kontakt');

    this.schema.inject('kontakt-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Kontakt', item: 'https://maskezaradijatore.rs/kontakt' }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('kontakt-breadcrumb');
  }
}
