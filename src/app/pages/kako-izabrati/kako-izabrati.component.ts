import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';

@Component({
  selector: 'app-kako-izabrati',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './kako-izabrati.component.html',
  styleUrl: './kako-izabrati.component.scss'
})
export class KakoIzabratiComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  private schema = inject(SchemaService);

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Kako izabrati masku za radijator – vodič za kupovinu');
    this.meta.updateTag({ name: 'description', content: 'Vodič: kako izabrati pravu masku za radijator. Šta meriti, koji materijal, perforisana ili lamelna maska – sve na jednom mestu.' });

    this.schema.inject('kako-izabrati-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://maskezaradijatore.rs/blog' },
        { '@type': 'ListItem', position: 3, name: 'Kako izabrati masku za radijator', item: 'https://maskezaradijatore.rs/kako-izabrati-masku-za-radijator' }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('kako-izabrati-breadcrumb');
  }
}
