import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavLink } from '../../atoms/nav-link/nav-link';

export interface NavigationItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [NavLink],
  templateUrl: './navigation-menu.html',
  styleUrl: './navigation-menu.css'
})
export class NavigationMenu {
  @Input() activeSection = 'inicio';
  @Input() mobileOpen = false;

  @Output() linkSelected = new EventEmitter<void>();

  readonly navigationItems: NavigationItem[] = [
    {
      label: 'Inicio',
      href: '#inicio'
    },
    {
      label: 'Nosotros',
      href: '#nosotros'
    },
    {
      label: 'Servicios',
      href: '#servicios'
    },
    {
      label: 'Contacto',
      href: '#contacto'
    }
  ];

  isActive(href: string): boolean {
    return href === `#${this.activeSection}`;
  }

  selectLink(): void {
    this.linkSelected.emit();
  }
}