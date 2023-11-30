import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'temp-essntl', loadChildren: () => import('./pages/temp-essntl/temp-essntl.module').then(m => m.TempEssntlModule) },
  { path: 'donut-app', loadChildren: () => import('./donut-app/donut-app.module').then(m => m.DonutAppModule) },
  { path: '**', redirectTo: 'temp-essntl' },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, 
    // { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
