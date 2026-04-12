import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-da-li-smanjuje-grejanje',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './da-li-smanjuje-grejanje.component.html',
  styleUrl: './da-li-smanjuje-grejanje.component.scss'
})
export class DaLiSmanjujeGrejanjeComponent {
  readonly phoneHref = 'tel:+381659775995';

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Da li maska za radijator smanjuje grejanje? – odgovor stručnjaka');
    this.meta.updateTag({ name: 'description', content: 'Da li maska za radijator smanjuje grejanje? Kratki odgovor: ne, ako je pravilno izrađena. Pročitajte detaljan odgovor i savete.' });
  }
}
