import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntecedentesPacienteComponent } from './antecedentes-paciente.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AntecedentesPacienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports:[
    AntecedentesPacienteComponent
  ]
})
export class AntecedentesPacienteModule { }
