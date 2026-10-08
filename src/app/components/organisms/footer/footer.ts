import { Component } from '@angular/core';
import { AppLogo } from '../../atoms/app-logo/app-logo';
import {
  FooterColumn,
  FooterColumnLink
} from '../../molecules/footer-column/footer-column';
import { FooterContactItem } from '../../molecules/footer-contact-item/footer-contact-item';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    AppLogo,
    FooterColumn,
    FooterContactItem
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  readonly currentYear = new Date().getFullYear();

  readonly navigationLinks: FooterColumnLink[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' }
  ];

  readonly serviceLinks: FooterColumnLink[] = [
    { label: 'Diseño estructural', href: '#servicios' },
    { label: 'Análisis estructural', href: '#servicios' },
    { label: 'Cálculo estructural', href: '#servicios' },
    { label: 'Asesoría técnica', href: '#servicios' },
    { label: 'Supervisión e interventoría', href: '#servicios' },
    {
      label: 'Estudios y diseños de edificaciones',
      href: '#servicios'
    }
  ];
}