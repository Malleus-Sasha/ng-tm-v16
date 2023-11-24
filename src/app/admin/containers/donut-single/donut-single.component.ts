import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-single',
  template: `
    <div>
      <app-donut-form
        [donut]="donut"
        (create)="onCreate($event)"></app-donut-form>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class DonutSingleComponent {
  donut!: Donut;

  ngOnInit(): void {
    this.donut = {
      id: 'y8z0As',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 119,
      description: 'For the pure chocoholic.',
    };
  }

  onCreate(donut: Donut) {
    console.log('onCreate', donut);
  }
}
