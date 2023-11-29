import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-single',
  template: `
    <div>
      <app-donut-form
        [donut]="donut"
        (update)="onUpdate($event)"
        (delete)="onDelete($event)"
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
    // 'MMrL3pS' : '8amkZ9'
    this.donutService.readOne('111').subscribe((donut: Donut) => {
      this.donut = donut;
    });
  }

  onCreate(donut: Donut) {
    this.donutService.create(donut)
      .subscribe(() => console.log('Created successfully!'));
  }

  onUpdate(donut: Donut) {
    this.donutService.update(donut)
      .subscribe({
        next: () => console.log('Updated successfully!'),
        error: (err) => console.log('onUpdate error:', err),
      });
  }

  onDelete(donut: Donut) {
    this.donutService.delete(donut)
      .subscribe(() => console.log('Deleted successfully!'));
  }
}
