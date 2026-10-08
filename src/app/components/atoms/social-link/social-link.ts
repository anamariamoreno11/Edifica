import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-link',
  standalone: true,
  imports: [],
  templateUrl: './social-link.html',
  styleUrl: './social-link.css'
})
export class SocialLink {
  @Input({ required: true }) label = '';
  @Input({ required: true }) value = '';
  @Input({ required: true }) href = '';
  @Input({ required: true }) iconSource = '';
  @Input() external = false;
}