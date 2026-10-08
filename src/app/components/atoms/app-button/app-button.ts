import { Component, Input } from '@angular/core';

export type ButtonVariant = 'primary' | 'outline' | 'light';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './app-button.html',
  styleUrl: './app-button.css'
})
export class AppButton {
  @Input({ required: true }) label = '';
  @Input() href = '#';
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() target: '_self' | '_blank' = '_self';
  @Input() ariaLabel = '';

  get computedAriaLabel(): string {
    return this.ariaLabel || this.label;
  }
}