import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnDestroy {
  private schema = inject(SchemaService);

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Blog – saveti i informacije o maskama za radijatore');
    this.meta.updateTag({ name: 'description', content: 'Blog o maskama za radijatore – saveti, vodiči i odgovori na najčešća pitanja. Kako izabrati, meriti i naručiti masku za radijator.' });

    this.schema.inject('blog-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://maskezaradijatore.rs/blog' }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('blog-breadcrumb');
  }

  clanci = [
    { slug: 'maska-za-panel-radijator', naslov: 'Maska za panel radijator – šta treba da znate', opis: 'Panel radijatori su najrasprostranjeniji tip u Srbiji. Saznajte kako se naručuje maska, gde idu ventili i koliko košta.', datum: '2026-04-28' },
    { slug: 'montaza-maske-za-radijator', naslov: 'Montaža maske za radijator – korak po korak', opis: 'Postavljanje maske za radijator traje 15–30 minuta i ne zahteva majstora ni bušenje zida. Detaljan vodič.', datum: '2026-04-15' },
    { slug: 'kako-izmeriti-radijator-za-masku', naslov: 'Kako izmeriti radijator za masku – tačan vodič', opis: 'Potrebne su vam tri mere: širina, visina i dubina. Evo kako da ih pravilno izmerite pre naručivanja.', datum: '2026-04-05' },
    { slug: 'da-li-maska-smanjuje-grejanje', naslov: 'Da li maska za radijator smanjuje grejanje?', opis: 'Razjašnjavamo najčešću zabludu – pravilno izrađena maska gotovo uopšte ne utiče na efikasnost grejanja.', datum: '2026-01-15' },
    { slug: 'kako-izabrati-masku-za-radijator', naslov: 'Kako izabrati pravu masku za radijator?', opis: 'Vodič kroz dimenzije, materijale, uzorke i boje – sve što treba znati pre kupovine.', datum: '2026-02-03' },
    { slug: 'metalne-maske-za-radijatore', naslov: 'Zašto su metalne maske za radijatore bolji izbor?', opis: 'Poredimo metalne i drvene maske – trajnost, cena, održavanje i estetika.', datum: '2026-02-20' },
    { slug: 'maska-za-radijator-po-meri', naslov: 'Kako naručiti masku za radijator po meri?', opis: 'Korak po korak: kako da izmerite radijator i naručite masku koja savršeno odgovara.', datum: '2026-03-10' },
  ];
}
