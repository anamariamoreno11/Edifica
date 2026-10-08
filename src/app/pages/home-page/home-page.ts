import { Component } from '@angular/core';

import { Header } from '../../components/organisms/header/header';
import { AboutSection } from '../../components/organisms/about-section/about-section';
import { ServicesSection } from '../../components/organisms/services-section/services-section';
import { ContactSection } from '../../components/organisms/contact-section/contact-section';
import { Footer } from '../../components/organisms/footer/footer';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    Header,
    AboutSection,
    ServicesSection,
    ContactSection,
    Footer
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {}