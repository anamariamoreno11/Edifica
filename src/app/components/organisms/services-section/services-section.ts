import { Component } from '@angular/core';
import { SectionHeading } from '../../atoms/section-heading/section-heading';
import { ServiceCard } from '../../molecules/service-card/service-card';
import { SERVICES } from '../../../data/services.data';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [
    SectionHeading,
    ServiceCard
  ],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css'
})
export class ServicesSection {
  readonly services = SERVICES;
}