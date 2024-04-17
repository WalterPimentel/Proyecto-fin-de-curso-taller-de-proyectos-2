import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiologicaComponent } from './biologica.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BiologicaComponent
  ],
  exports: [
    BiologicaComponent
  ]
})
export class BiologicaModule { }
