import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';

@Component({
  selector: 'app-maska-za-panel-radijator',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './maska-za-panel-radijator.component.html',
  styleUrl: './maska-za-panel-radijator.component.scss'
})
export class MaskaZaPanelRadijatorComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Maska za panel radijator – izrada po meri | maskezaradijatore.rs');
    this.meta.updateTag({ name: 'description', content: 'Maske za panel radijatore izrađujemo po meri – uz otvor za ventil i termostat. Cena od 6.000 din. Dostava širom Srbije.' });
    this.canonical.set('https://maskezaradijatore.rs/maska-za-panel-radijator');

    this.schema.inject('panel-radijator-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://maskezaradijatore.rs/blog' },
        { '@type': 'ListItem', position: 3, name: 'Maska za panel radijator', item: 'https://maskezaradijatore.rs/maska-za-panel-radijator' }
      ]
    });

    this.schema.inject('panel-radijator-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li pravite maske za panel radijatore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Maske za panel radijatore su naš najčešći proizvod. Svaka se radi po meri, uz otvor ili urez za ventile i termostatsku glavu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kako da naručim masku za panel radijator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pozovite nas na 065 977 5995, saopštite mere (širina, visina, dubina) i položaj ventila. Dobićete ponudu odmah.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li maska ometa termostatsku glavu na panel radijatoru?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne, ako je maska pravilno projektovana. Termostatska glava mora biti van maske – pravimo otvor ili bočni izrez na odgovarajućem mestu.'
          }
        }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('panel-radijator-breadcrumb');
    this.schema.remove('panel-radijator-faq');
  }
}
