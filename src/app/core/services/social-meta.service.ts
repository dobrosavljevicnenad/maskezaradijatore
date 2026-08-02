import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

export interface SocialMetaTags {
  title: string;
  description: string;
  url: string;
  image?: string;
}

const DEFAULT_IMAGE = 'https://maskezaradijatore.rs/assets/maska-za-radijator.png';

@Injectable({ providedIn: 'root' })
export class SocialMetaService {
  private meta = inject(Meta);

  set(tags: SocialMetaTags): void {
    const image = tags.image ?? DEFAULT_IMAGE;

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Maske za radijatore' });
    this.meta.updateTag({ property: 'og:url', content: tags.url });
    this.meta.updateTag({ property: 'og:title', content: tags.title });
    this.meta.updateTag({ property: 'og:description', content: tags.description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: tags.title });
    this.meta.updateTag({ name: 'twitter:description', content: tags.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }
}
