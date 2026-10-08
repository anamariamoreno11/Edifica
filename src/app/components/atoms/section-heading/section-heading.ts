import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [],
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.css'
})
export class SectionHeading {
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) title = '';
  @Input() highlightedText = '';
  @Input() description = '';
  @Input() headingId = '';
  @Input() align: 'left' | 'center' = 'center';

  get titleWithoutHighlight(): string {
    if (!this.highlightedText) {
      return this.title;
    }

    return this.title.replace(this.highlightedText, '').trim();
  }
}