import { Component, Input } from '@angular/core';

export type IconSize = 'small' | 'medium' | 'large' | 'extra-large';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './app-icon.html',
  styleUrl: './app-icon.css'
})
export class AppIcon {
  @Input({ required: true }) source = '';
  @Input() alt = '';
  @Input() size: IconSize = 'large';
  @Input() decorative = false;
}