import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EctoscopiaComponent } from './ectoscopia.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EctoscopiaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ], exports: [
    EctoscopiaComponent
  ]
})
export class EctoscopiaModule { }
