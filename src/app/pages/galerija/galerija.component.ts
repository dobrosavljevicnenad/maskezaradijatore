import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { MaskeService } from '../../core/services/maske.service';
import { Maska } from '../../core/models/maska.model';
import { SchemaService } from '../../core/services/schema.service';

@Component({
  selector: 'app-galerija',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './galerija.component.html',
  styleUrl: './galerija.component.scss'
})
export class GalerijaComponent implements OnDestroy {
  private maskeService = inject(MaskeService);
  private schema = inject(SchemaService);

  readonly phoneHref = 'tel:+381659775995';

  maske: Maska[] = this.maskeService.getAll();

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Galerija maski za radijatore – primeri iz prakse');
    this.meta.updateTag({ name: 'description', content: 'Pogledajte galeriju naših maski za radijatore. Primeri iz stvarnih enterijera – dnevne sobe, spavaće sobe, kancelarije.' });

    this.schema.inject('galerija-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Galerija', item: 'https://maskezaradijatore.rs/galerija' }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('galerija-breadcrumb');
  }
}
