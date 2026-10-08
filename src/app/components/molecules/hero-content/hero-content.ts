import { Component, Input } from '@angular/core';
import { AppButton } from '../../atoms/app-button/app-button';

@Component({
  selector: 'app-hero-content',
  standalone: true,
  imports: [AppButton],
  templateUrl: './hero-content.html',
  styleUrl: './hero-content.css'
})
export class HeroContent {
  @Input() titleFirstLine = 'Ingeniería que';
  @Input() highlightedText = 'construye';
  @Input() titleLastLine = 'confianza';

  @Input() description =
    'Diseñamos, analizamos y calculamos estructuras seguras, funcionales y eficientes.';

  @Input() buttonLabel = 'Conoce más';
  @Input() buttonHref = '#servicios';
}