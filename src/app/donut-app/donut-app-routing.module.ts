import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutAppComponent } from './donut-app.component';

const routes: Routes = [{ path: '', component: DonutAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonutAppRoutingModule { }
