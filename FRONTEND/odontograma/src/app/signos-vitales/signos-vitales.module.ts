import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignosVitalesComponent } from './signos-vitales.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SignosVitalesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports:[
    SignosVitalesComponent
  ]
})
export class SignosVitalesModule { }
