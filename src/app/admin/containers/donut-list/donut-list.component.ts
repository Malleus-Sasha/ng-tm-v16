import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutsMock } from '../../mock/donuts.mock';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts?.length; else nothing">
        <app-donut-card 
        *ngFor="let donut of donuts; trackBy: trackById; index as i"
        [donut]="donut">
      </app-donut-card>
      </ng-container>
      <ng-template #nothing>
        <p>No Donuts here...</p>
      </ng-template>
    </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donutService.read().subscribe((donuts) => this.donuts = donuts);
  }

  trackById(index: number, value: Donut): string {
    return value?.id || 'vx';
  };
}
