import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';

@Component({
  selector: 'app-po-meri',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './po-meri.component.html',
  styleUrl: './po-meri.component.scss'
})
export class PoMeriComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  readonly phoneDisplay = '065 977 5995';
  private schema = inject(SchemaService);

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Maska za radijator po meri – izrada prema vašim dimenzijama');
    this.meta.updateTag({ name: 'description', content: 'Naručite masku za radijator po meri. Pošaljite dimenzije, mi izradimo i dostavimo na adresu. CNC izrada, plastificirani lim, Srbija.' });

    this.schema.inject('po-meri-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maska za radijator po meri', item: 'https://maskezaradijatore.rs/maska-za-radijator-po-meri' }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('po-meri-breadcrumb');
  }

  koraci = [
    { broj: '01', naziv: 'Izmerite radijator', opis: 'Izmervite širinu, visinu i dubinu radijatora. Zabeležite i razmak do zida.' },
    { broj: '02', naziv: 'Pošaljite dimenzije', opis: 'Pozovite nas ili pošaljite poruku sa dimenzijama i željenom bojom/uzorkom.' },
    { broj: '03', naziv: 'Izrada i dostava', opis: 'Maska se izrađuje CNC tehnologijom i šalje na vašu adresu u roku 5–10 dana.' },
  ];
}
