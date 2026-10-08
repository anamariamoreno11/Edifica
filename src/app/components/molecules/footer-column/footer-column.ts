import { Component, Input } from '@angular/core';
import { FooterLink } from '../../atoms/footer-link/footer-link';

export interface FooterColumnLink {
  label: string;
  href: string;
  external?: boolean;
}

@Component({
  selector: 'app-footer-column',
  standalone: true,
  imports: [FooterLink],
  templateUrl: './footer-column.html',
  styleUrl: './footer-column.css'
})
export class FooterColumn {
  @Input({ required: true }) title = '';
  @Input() links: FooterColumnLink[] = [];
}