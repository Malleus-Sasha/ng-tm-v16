import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempEssntlRoutingModule } from './temp-essntl-routing.module';
import { TempEssntlComponent } from './temp-essntl.component';
import { TempRefComponent } from './temp-ref/temp-ref.component';


@NgModule({
  declarations: [
    TempEssntlComponent,
    TempRefComponent
  ],
  imports: [
    CommonModule,
    TempEssntlRoutingModule
  ]
})
export class TempEssntlModule { }
