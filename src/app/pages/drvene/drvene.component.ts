import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';

@Component({
  selector: 'app-drvene',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './drvene.component.html',
  styleUrl: './drvene.component.scss'
})
export class DrveneComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  private schema = inject(SchemaService);

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Drvene maske za radijatore – prirodni materijali za enterijer');
    this.meta.updateTag({ name: 'description', content: 'Drvene maske za radijatore za topao i prirodan izgled enterijera. Saznajte razlike u odnosu na metalne maske i šta je bolje za vas.' });

    this.schema.inject('drvene-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Drvene maske za radijatore', item: 'https://maskezaradijatore.rs/drvene-maske-za-radijatore' }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('drvene-breadcrumb');
  }
}
