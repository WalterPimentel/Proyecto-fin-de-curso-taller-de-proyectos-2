import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtrosEstudiosComponent } from './otros-estudios.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OtrosEstudiosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports:[
    OtrosEstudiosComponent
  ]
})
export class OtrosEstudiosModule { }
