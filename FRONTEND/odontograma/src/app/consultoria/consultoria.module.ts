import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultoriaComponent } from './consultoria.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ConsultoriaComponent],
  exports: [
    ConsultoriaComponent
  ]
})
export class ConsultoriaModule { }
