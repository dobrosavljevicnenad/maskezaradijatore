import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { MaskeService } from '../../core/services/maske.service';
import { Maska } from '../../core/models/maska.model';

@Component({
  selector: 'app-galerija',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './galerija.component.html',
  styleUrl: './galerija.component.scss'
})
export class GalerijaComponent {
  private maskeService = inject(MaskeService);

  readonly phoneHref = 'tel:+381659775995';

  maske: Maska[] = this.maskeService.getAll();

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Galerija maski za radijatore – primeri iz prakse');
    this.meta.updateTag({ name: 'description', content: 'Pogledajte galeriju naših maski za radijatore. Primeri iz stvarnih enterijera – dnevne sobe, spavaće sobe, kancelarije.' });
  }
}
