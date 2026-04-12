import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly phone = '+381659775995';
  readonly phoneHref = `tel:${this.phone}`;
  readonly phoneDisplay = '065 977 5995';

  scrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  navLinks = [
    { label: 'Početna', path: '/' },
    { label: 'Modeli', path: '/maske-za-radijatore' },
    { label: 'Cena', path: '/maske-za-radijatore-cena' },
    { label: 'Po meri', path: '/maska-za-radijator-po-meri' },
    { label: 'Blog', path: '/blog' },
    { label: 'Kontakt', path: '/kontakt' },
  ];
}
