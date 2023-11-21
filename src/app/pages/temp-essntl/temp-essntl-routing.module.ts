import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempEssntlComponent } from './temp-essntl.component';

const routes: Routes = [{ path: '', component: TempEssntlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempEssntlRoutingModule { }
