import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanTratamientoComponent } from './plan-tratamiento.component';



@NgModule({
  declarations: [
    PlanTratamientoComponent
  ],
  imports: [
    CommonModule
  ], exports:[
    PlanTratamientoComponent
  ]
})
export class PlanTratamientoModule { }
