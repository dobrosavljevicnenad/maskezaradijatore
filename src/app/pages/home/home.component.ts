import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MaskeService } from '../../core/services/maske.service';
import { Maska } from '../../core/models/maska.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private maskeService = inject(MaskeService);

  phoneHref = 'tel:+381659775995';
  phoneDisplay = '065 977 5995';

  maske: Maska[] = this.maskeService.getAll();

  formatCena(cena: number): string {
    return this.maskeService.formatCena(cena);
  }
}
