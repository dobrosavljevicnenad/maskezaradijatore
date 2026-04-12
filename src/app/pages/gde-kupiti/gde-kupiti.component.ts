import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gde-kupiti',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gde-kupiti.component.html',
  styleUrl: './gde-kupiti.component.scss'
})
export class GdeKupitiComponent {
  readonly phoneHref = 'tel:+381659775995';
  readonly phoneDisplay = '065 977 5995';

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Gde kupiti masku za radijator u Srbiji – Beograd, Novi Sad i ostali gradovi');
    this.meta.updateTag({ name: 'description', content: 'Gde kupiti masku za radijator u Srbiji? Naručite online, dostavljamo u Beograd, Novi Sad, Niš, Kragujevac i celu Srbiju.' });
  }

  gradovi = ['Beograd', 'Novi Sad', 'Niš', 'Kragujevac', 'Subotica', 'Zrenjanin', 'Čačak', 'Smederevo', 'Pančevo', 'Valjevo', 'Šabac', 'Leskovac', 'Požarevac', 'Vranje', 'Užice'];
}
