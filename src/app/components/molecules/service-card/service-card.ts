import { Component, Input } from '@angular/core';
import { AppIcon } from '../../atoms/app-icon/app-icon';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [AppIcon],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css'
})
export class ServiceCard {
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
  @Input({ required: true }) iconSource = '';
  @Input() iconAlt = '';
}