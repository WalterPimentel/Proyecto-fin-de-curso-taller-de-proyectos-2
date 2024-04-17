import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PantallaPrincipalComponent } from './pantalla-principal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PantallaPrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PantallaPrincipalComponent
  ]
})
export class PantallaPrincipalModule { }
