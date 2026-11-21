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
  @Input() whatsappNumber = '+57 314 604 5189';
@Input() whatsappUrl = 'https://wa.me/573146045189';

@Input() instagramUsername = '@edifica_ingenieria_estructural';
@Input() instagramUrl = 'https://www.instagram.com/edifica_ingenieria_estructural/';
}