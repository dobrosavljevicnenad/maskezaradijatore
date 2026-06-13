import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { MaskeService } from '../../core/services/maske.service';
import { Maska } from '../../core/models/maska.model';
import { SchemaService } from '../../core/services/schema.service';
import { CanonicalService } from '../../core/services/canonical.service';

@Component({
  selector: 'app-katalog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './katalog.component.html',
  styleUrl: './katalog.component.scss'
})
export class KatalogComponent implements OnDestroy {
  private maskeService = inject(MaskeService);
  private schema = inject(SchemaService);
  private canonical = inject(CanonicalService);

  readonly phoneHref = 'tel:+381659775995';
  readonly phoneDisplay = '065 977 5995';

  maske: Maska[] = this.maskeService.getAll();

  formatCena(cena: number): string {
    return this.maskeService.formatCena(cena);
  }

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Maske za radijatore – gotove i po meri, cene od 10.980 RSD | maskezaradijatore.rs');
    this.meta.updateTag({ name: 'description', content: 'Svi modeli maski za radijatore – standardne (gotove) i po meri, bela i antracit boja, CNC izrada od plastificiranog lima. Cene od 10.980 RSD, dostava Srbija.' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.canonical.set('https://maskezaradijatore.rs/maske-za-radijatore');

    this.schema.inject('katalog-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maske za radijatore – svi modeli i cene', item: 'https://maskezaradijatore.rs/maske-za-radijatore' }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('katalog-breadcrumb');
  }
}
