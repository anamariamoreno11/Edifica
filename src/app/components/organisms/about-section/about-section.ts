import { Component } from '@angular/core';
import { HeroContent } from '../../molecules/hero-content/hero-content';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [HeroContent],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css'
})
export class AboutSection {}