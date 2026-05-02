import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';

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

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Maska za radijator Beograd, Novi Sad, Niš – dostava po Srbiji');
    this.meta.updateTag({ name: 'description', content: 'Kupite masku za radijator direktno od proizvođača. Dostavljamo u Beograd, Novi Sad, Niš, Kragujevac i celu Srbiju. Izrada po meri, rok 5–10 radnih dana.' });

    this.schema.inject('gde-kupiti-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Gde kupiti masku za radijator', item: 'https://maskezaradijatore.rs/gde-kupiti-masku-za-radijator' }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('gde-kupiti-breadcrumb');
  }

  gradovi = ['Beograd', 'Novi Sad', 'Niš', 'Kragujevac', 'Subotica', 'Zrenjanin', 'Čačak', 'Smederevo', 'Pančevo', 'Valjevo', 'Šabac', 'Leskovac', 'Požarevac', 'Vranje', 'Užice'];
}
