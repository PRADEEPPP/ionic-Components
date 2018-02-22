import { Component,Input } from '@angular/core';

/**
 * Generated class for the SlidesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slides',
  templateUrl: 'slides.html'
})
export class SlidesComponent {
  @Input() slideContent: Array<{ content: string; }>;
  text: string;

  constructor() {
    console.log('Hello SlidesComponent Component');
    this.text = 'Hello World';
  }

}
