import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [],
  templateUrl: './nav-link.html',
  styleUrl: './nav-link.css'
})
export class NavLink {
  @Input({ required: true }) label = '';
  @Input({ required: true }) href = '#';
  @Input() active = false;
}