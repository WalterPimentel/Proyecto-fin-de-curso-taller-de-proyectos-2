import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaGeneralComponent } from './exa-general.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ExaGeneralComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ExaGeneralComponent
  ]
})
export class ExaGeneralModule { }
