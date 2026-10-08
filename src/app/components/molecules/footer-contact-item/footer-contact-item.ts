import { Component, Input } from '@angular/core';
import { AppIcon } from '../../atoms/app-icon/app-icon';

@Component({
  selector: 'app-footer-contact-item',
  standalone: true,
  imports: [AppIcon],
  templateUrl: './footer-contact-item.html',
  styleUrl: './footer-contact-item.css'
})
export class FooterContactItem {
  @Input({ required: true }) iconSource = '';
  @Input({ required: true }) value = '';

  @Input() href = '';
  @Input() external = false;
}