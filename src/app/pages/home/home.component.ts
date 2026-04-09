import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  phoneHref = 'tel:+381659775995';
  phoneDisplay = '065 977 5995';

  product = {
    naziv: 'Dekorativna maska za radijator',
    slug: 'maska-za-radijator',
    opis:
      'Metalna maska za radijator od plastificiranog lima, moderna zaštita i elegantno rešenje za lepši enterijer.',
    cena: 12480,
    popust: 0,
    novo: true,
    slika: [
      {
        url: 'assets/maska-za-radijator.png'
      }
    ]
  };

  get priceFormatted(): string {
    return this.product.cena.toLocaleString('sr-RS');
  }
}
