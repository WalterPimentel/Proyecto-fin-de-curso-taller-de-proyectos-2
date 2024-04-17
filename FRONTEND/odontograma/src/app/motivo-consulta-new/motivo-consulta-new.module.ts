import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotivoConsultaNewComponent } from './motivo-consulta-new.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MotivoConsultaNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MotivoConsultaNewComponent
  ]
})
export class MotivoConsultaNewModule { }
