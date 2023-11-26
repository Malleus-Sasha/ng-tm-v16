import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-single',
  template: `
    <div>
      <app-donut-form
        [donut]="donut"
        (create)="onCreate($event)">
      </app-donut-form>
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

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donut = this.donutService.readOne('8amkZ9');
  }

  onCreate(donut: Donut) {
    this.donutService.create(donut);
  }

  onUpdate(donut: Donut) {
    this.donutService.update(donut);
  }

  onDelete(donut: Donut) {
    this.donutService.delete(donut);
  }

}
