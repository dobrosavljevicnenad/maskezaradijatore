import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent {
  readonly phoneHref = 'tel:+381659775995';
  readonly phoneDisplay = '065 977 5995';

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Kontakt – naručite masku za radijator | maskezaradijatore.rs');
    this.meta.updateTag({ name: 'description', content: 'Kontaktirajte nas za ponudu ili porudžbinu maske za radijator. Pozovite 065 977 5995 ili pošaljite upit. Smederevo, dostava Srbija.' });
  }
}
