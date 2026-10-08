import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-link',
  standalone: true,
  imports: [],
  templateUrl: './footer-link.html',
  styleUrl: './footer-link.css'
})
export class FooterLink {
  @Input({ required: true }) label = '';
  @Input({ required: true }) href = '#';
  @Input() external = false;
}