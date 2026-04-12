import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-metalne',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './metalne.component.html',
  styleUrl: './metalne.component.scss'
})
export class MetalneComponent {
  readonly phoneHref = 'tel:+381659775995';

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Metalne maske za radijatore od plastificiranog lima');
    this.meta.updateTag({ name: 'description', content: 'Metalne maske za radijatore od plastificiranog lima – trajne, moderne, lako se čiste. CNC izrada po meri, dostava Srbija.' });
  }
}
