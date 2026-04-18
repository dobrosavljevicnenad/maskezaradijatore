import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';

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

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Da li maska za radijator smanjuje grejanje? – odgovor stručnjaka');
    this.meta.updateTag({ name: 'description', content: 'Da li maska za radijator smanjuje grejanje? Kratki odgovor: ne, ako je pravilno izrađena. Pročitajte detaljan odgovor i savete.' });

    this.schema.inject('da-li-smanjuje-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://maskezaradijatore.rs/blog' },
        { '@type': 'ListItem', position: 3, name: 'Da li maska smanjuje grejanje', item: 'https://maskezaradijatore.rs/da-li-maska-smanjuje-grejanje' }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('da-li-smanjuje-breadcrumb');
  }
}
