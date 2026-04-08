import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Maske za radijatore';
  subtitle = 'Elegantne i moderne maske za radijatore po meri vašeg prostora.';
}
