import { Component, Input } from '@angular/core';

@Component({
  selector: 'use-content-header',
  templateUrl: './contentHeader.component.html'
})
export class ContentHeaderComponent {
  @Input() title: String
  @Input() subtitle: String
}
