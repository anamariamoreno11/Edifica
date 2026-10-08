import { Component } from '@angular/core';
import { SectionHeading } from '../../atoms/section-heading/section-heading';
import { ContactForm } from '../../molecules/contact-form/contact-form';
import { ContactOptions } from '../../molecules/contact-options/contact-options';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    SectionHeading,
    ContactForm,
    ContactOptions
  ],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css'
})
export class ContactSection {}