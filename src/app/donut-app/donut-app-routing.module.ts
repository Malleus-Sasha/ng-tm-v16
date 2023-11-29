import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutAppComponent } from './donut-app.component';

// const routes: Routes = [
//   {
//     path: 'admin', 
//     component: DonutAppComponent,
//     children: [
//       { path: 'donuts', component: DonutListComponent },
//       { path: 'donut', component: DonutSingleComponent },
//       { path: '', pathMatch: 'full', redirectTo: 'donuts' },
//     ] 
//   },
//   { path: '', pathMatch: 'full', redirectTo: 'admin'},
//   { path: '**', redirectTo: 'admin' }
// ];

const routes: Routes = [
  { path: 'admin', component: DonutAppComponent, children: [
    { path: '', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
  ] },
  { path: '', pathMatch: 'full', redirectTo: 'admin'},
  { path: '**', redirectTo: 'admin' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonutAppRoutingModule { }
