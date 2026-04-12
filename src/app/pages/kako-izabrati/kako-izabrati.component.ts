import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kako-izabrati',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './kako-izabrati.component.html',
  styleUrl: './kako-izabrati.component.scss'
})
export class KakoIzabratiComponent {
  readonly phoneHref = 'tel:+381659775995';

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Kako izabrati masku za radijator – vodič za kupovinu');
    this.meta.updateTag({ name: 'description', content: 'Vodič: kako izabrati pravu masku za radijator. Šta meriti, koji materijal, perforisana ili lamelna maska – sve na jednom mestu.' });
  }
}
