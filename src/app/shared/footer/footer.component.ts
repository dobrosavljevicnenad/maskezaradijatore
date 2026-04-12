import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly phone = '+381659775995';
  readonly phoneHref = `tel:${this.phone}`;
  readonly phoneDisplay = '065 977 5995';

  pages = [
    { label: 'Maske za radijatore', path: '/maske-za-radijatore' },
    { label: 'Cena', path: '/maske-za-radijatore-cena' },
    { label: 'Maska po meri', path: '/maska-za-radijator-po-meri' },
    { label: 'Metalne maske', path: '/metalne-maske-za-radijatore' },
    { label: 'Drvene maske', path: '/drvene-maske-za-radijatore' },
    { label: 'Galerija', path: '/galerija' },
  ];

  info = [
    { label: 'Kako izabrati masku', path: '/kako-izabrati-masku-za-radijator' },
    { label: 'Da li maska smanjuje grejanje?', path: '/da-li-maska-smanjuje-grejanje' },
    { label: 'Gde kupiti masku', path: '/gde-kupiti-masku-za-radijator' },
    { label: 'Blog', path: '/blog' },
    { label: 'Kontakt', path: '/kontakt' },
  ];
}
