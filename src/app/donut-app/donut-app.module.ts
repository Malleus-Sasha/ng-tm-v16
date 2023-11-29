import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonutAppRoutingModule } from './donut-app-routing.module';
import { DonutAppComponent } from './donut-app.component';
import { AdminModule } from "../admin/admin.module";

@NgModule({
  declarations: [
    DonutAppComponent
  ],
  imports: [
    CommonModule,
    DonutAppRoutingModule,
    AdminModule
  ]
})
export class DonutAppModule { }
