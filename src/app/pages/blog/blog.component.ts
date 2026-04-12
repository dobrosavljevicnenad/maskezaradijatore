import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Blog – saveti i informacije o maskama za radijatore');
    this.meta.updateTag({ name: 'description', content: 'Blog o maskama za radijatore – saveti, vodiči i odgovori na najčešća pitanja. Kako izabrati, meriti i naručiti masku za radijator.' });
  }

  clanci = [
    { slug: 'da-li-maska-smanjuje-grejanje', naslov: 'Da li maska za radijator smanjuje grejanje?', opis: 'Razjašnjavamo najčešću zabludu – pravilno izrađena maska gotovo uopšte ne utiče na efikasnost grejanja.', datum: '2026-01-15' },
    { slug: 'kako-izabrati-masku-za-radijator', naslov: 'Kako izabrati pravu masku za radijator?', opis: 'Vodič kroz dimenzije, materijale, uzorke i boje – sve što treba znati pre kupovine.', datum: '2026-02-03' },
    { slug: 'metalne-maske-za-radijatore', naslov: 'Zašto su metalne maske za radijatore bolji izbor?', opis: 'Poredimo metalne i drvene maske – trajnost, cena, održavanje i estetika.', datum: '2026-02-20' },
    { slug: 'maska-za-radijator-po-meri', naslov: 'Kako naručiti masku za radijator po meri?', opis: 'Korak po korak: kako da izmerite radijator i naručite masku koja savršeno odgovara.', datum: '2026-03-10' },
  ];
}
