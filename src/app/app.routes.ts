import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Maske za radijatore – dekorativne maske po meri | maskezaradijatore.rs'
  },
  {
    path: 'maske-za-radijatore',
    loadComponent: () => import('./pages/katalog/katalog.component').then(m => m.KatalogComponent),
    title: 'Maske za radijatore – svi modeli i dimenzije'
  },
  {
    path: 'maske-za-radijatore-cena',
    loadComponent: () => import('./pages/cena/cena.component').then(m => m.CenaComponent),
    title: 'Maske za radijatore cena – koliko košta maska za radijator?'
  },
  {
    path: 'maska-za-radijator-po-meri',
    loadComponent: () => import('./pages/po-meri/po-meri.component').then(m => m.PoMeriComponent),
    title: 'Maska za radijator po meri – izrada po vašim dimenzijama'
  },
  {
    path: 'metalne-maske-za-radijatore',
    loadComponent: () => import('./pages/metalne/metalne.component').then(m => m.MetalneComponent),
    title: 'Metalne maske za radijatore od plastificiranog lima'
  },
  {
    path: 'drvene-maske-za-radijatore',
    loadComponent: () => import('./pages/drvene/drvene.component').then(m => m.DrveneComponent),
    title: 'Drvene maske za radijatore – prirodni materijali'
  },
  {
    path: 'galerija',
    loadComponent: () => import('./pages/galerija/galerija.component').then(m => m.GalerijaComponent),
    title: 'Galerija maski za radijatore – primeri iz prakse'
  },
  {
    path: 'kako-izabrati-masku-za-radijator',
    loadComponent: () => import('./pages/kako-izabrati/kako-izabrati.component').then(m => m.KakoIzabratiComponent),
    title: 'Kako izabrati masku za radijator – vodič za kupovinu'
  },
  {
    path: 'da-li-maska-smanjuje-grejanje',
    loadComponent: () => import('./pages/da-li-smanjuje-grejanje/da-li-smanjuje-grejanje.component').then(m => m.DaLiSmanjujeGrejanjeComponent),
    title: 'Da li maska za radijator smanjuje grejanje? – odgovor stručnjaka'
  },
  {
    path: 'gde-kupiti-masku-za-radijator',
    loadComponent: () => import('./pages/gde-kupiti/gde-kupiti.component').then(m => m.GdeKupitiComponent),
    title: 'Gde kupiti masku za radijator u Srbiji – Beograd, Novi Sad i ostali gradovi'
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent),
    title: 'Blog – saveti i informacije o maskama za radijatore'
  },
  {
    path: 'kontakt',
    loadComponent: () => import('./pages/kontakt/kontakt.component').then(m => m.KontaktComponent),
    title: 'Kontakt – naručite masku za radijator'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
