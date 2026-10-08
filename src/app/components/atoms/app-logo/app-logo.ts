import { Component, Input } from '@angular/core';

export type LogoVariant = 'light' | 'dark';
export type LogoSize = 'header' | 'footer';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './app-logo.html',
  styleUrl: './app-logo.css'
})
export class AppLogo {
  @Input() variant: LogoVariant = 'light';
  @Input() size: LogoSize = 'header';
  @Input() link = '#inicio';

  get imageSource(): string {
    return this.variant === 'dark'
      ? '/images/logos/edifica-logo-dark.png'
      : '/images/logos/edifica-logo-light.png';
  }
}