import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-donut-single',
  template: `
    <div>
      <app-donut-form
        [donut]="donut"
        [isEdit]="isEdit"
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
  isEdit!: boolean;

  constructor(
    private donutService: DonutService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // 'MMrL3pS' : '8amkZ9'
    this.isEdit = this.route.snapshot.data['isEdit'];
    const id = this.route.snapshot.paramMap.get('id');
    
    this.donutService
      .readOne(id)
      .subscribe((donut: Donut) => {
        this.donut = donut;
    });
  }

  onCreate(donut: Donut) {
    this.donutService.create(donut)
      .subscribe((item) => 
        this.router.navigate(['donut-app', 'admin', 'donuts', item.id])
      );
  }

  onUpdate(donut: Donut) {
    this.donutService.update(donut)
      .subscribe({
        next: () => this.router.navigate(['donut-app','admin']),
        error: (err) => console.log('onUpdate error:', err),
      });
  }

  onDelete(donut: Donut) {
    this.donutService.delete(donut)
      .subscribe(() => this.router.navigate(['donut-app','admin']));
  }
}
