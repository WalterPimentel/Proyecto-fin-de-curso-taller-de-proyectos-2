import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionesBiologicasNewComponent } from './funciones-biologicas-new.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FuncionesBiologicasNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FuncionesBiologicasNewComponent
  ]
})
export class FuncionesBiologicasNewModule { }
