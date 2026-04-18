import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SchemaService } from '../../core/services/schema.service';

@Component({
  selector: 'app-metalne',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './metalne.component.html',
  styleUrl: './metalne.component.scss'
})
export class MetalneComponent implements OnDestroy {
  readonly phoneHref = 'tel:+381659775995';
  private schema = inject(SchemaService);

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Metalne maske za radijatore od plastificiranog lima');
    this.meta.updateTag({ name: 'description', content: 'Metalne maske za radijatore od plastificiranog lima – trajne, moderne, lako se čiste. CNC izrada po meri, dostava Srbija.' });

    this.schema.inject('metalne-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://maskezaradijatore.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Metalne maske za radijatore', item: 'https://maskezaradijatore.rs/metalne-maske-za-radijatore' }
      ]
    });
  }

  ngOnDestroy(): void {
    this.schema.remove('metalne-breadcrumb');
  }
}
