import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { MaskeService } from '../../core/services/maske.service';
import { Maska } from '../../core/models/maska.model';

@Component({
  selector: 'app-katalog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './katalog.component.html',
  styleUrl: './katalog.component.scss'
})
export class KatalogComponent {
  private maskeService = inject(MaskeService);

  readonly phoneHref = 'tel:+381659775995';
  readonly phoneDisplay = '065 977 5995';

  maske: Maska[] = this.maskeService.getAll();

  formatCena(cena: number): string {
    return this.maskeService.formatCena(cena);
  }

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Maske za radijatore – svi modeli i dimenzije | maskezaradijatore.rs');
    this.meta.updateTag({ name: 'description', content: 'Pogledajte sve modele maski za radijatore od plastificiranog lima. Metalne maske po meri, izbor boja i dimenzija. Dostava širom Srbije.' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
