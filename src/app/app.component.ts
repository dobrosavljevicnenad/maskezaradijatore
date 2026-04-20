import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SchemaService } from './core/services/schema.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private schema = inject(SchemaService);

  constructor() {
    this.schema.inject('organization', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://maskezaradijatore.rs/#business',
      name: 'Maske za radijatore – SZMR Đorđević',
      url: 'https://maskezaradijatore.rs',
      telephone: '+381659775995',
      email: 'kontakt@maskezaradijatore.rs',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Vučačka 16',
        addressLocality: 'Smederevo',
        postalCode: '11300',
        addressCountry: 'RS'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 44.6647,
        longitude: 20.9286
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00'
        }
      ],
      priceRange: '10.980 – 14.480+ RSD',
      description: 'Dekorativne maske za radijatore od plastificiranog lima. Izrada po meri, dostava širom Srbije.',
      areaServed: {
        '@type': 'Country',
        name: 'Srbija'
      },
      sameAs: [
        'https://www.facebook.com/maskezaklimu',
        'https://www.instagram.com/maske_za_klimu'
      ]
    });

    this.schema.inject('website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://maskezaradijatore.rs/#website',
      url: 'https://maskezaradijatore.rs',
      name: 'Maske za radijatore',
      publisher: { '@id': 'https://maskezaradijatore.rs/#business' }
    });
  }
}
