import { Component, Input } from '@angular/core';
import { SocialLink } from '../../atoms/social-link/social-link';

@Component({
  selector: 'app-contact-options',
  standalone: true,
  imports: [SocialLink],
  templateUrl: './contact-options.html',
  styleUrl: './contact-options.css'
})
export class ContactOptions {
  @Input() whatsappNumber = '+57 313 860 9299';
  @Input() whatsappUrl = 'https://wa.me/573138609299';

  @Input() instagramUsername = '@edifica.ingenieria';
  @Input() instagramUrl = 'https://www.instagram.com/';
}