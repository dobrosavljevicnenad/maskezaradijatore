import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-drvene',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './drvene.component.html',
  styleUrl: './drvene.component.scss'
})
export class DrveneComponent {
  readonly phoneHref = 'tel:+381659775995';

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Drvene maske za radijatore – prirodni materijali za enterijer');
    this.meta.updateTag({ name: 'description', content: 'Drvene maske za radijatore za topao i prirodan izgled enterijera. Saznajte razlike u odnosu na metalne maske i šta je bolje za vas.' });
  }
}
