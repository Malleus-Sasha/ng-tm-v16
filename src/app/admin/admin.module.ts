import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';

import { DonutCardComponent } from './components/donut-card/donut-card.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';
import { DonutService } from './services/donut.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', children: [
    { path: 'donuts', component: DonutListComponent },
    { path: 'donut', component: DonutSingleComponent },
    { path: '', pathMatch: 'full', redirectTo: 'donuts' },
  ]}
];

@NgModule({
  declarations: [
    DonutListComponent,
    DonutCardComponent,
    DonutSingleComponent,
    DonutFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    DonutListComponent,
    DonutSingleComponent,
  ],
  // providers: [
  //  'DonutService' HttpClientModule->app.Module
  //   DonutService,
  // ]
})
export class AdminModule {}
