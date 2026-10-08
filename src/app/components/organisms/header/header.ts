import { Component } from '@angular/core';

import { AppLogo } from '../../atoms/app-logo/app-logo';
import { NavigationMenu } from '../../molecules/navigation-menu/navigation-menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AppLogo,
    NavigationMenu
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}