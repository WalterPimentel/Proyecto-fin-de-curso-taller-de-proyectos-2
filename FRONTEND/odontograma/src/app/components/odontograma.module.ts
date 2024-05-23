import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OdontogramaComponent } from './odontograma/odontograma.component';
import { OdontogramaAnatomicoUIComponent } from './ui/odontograma-anatomico/anatomico.component';

@NgModule({
  declarations: [OdontogramaAnatomicoUIComponent, OdontogramaComponent],
  imports: [CommonModule, FormsModule],
  exports: [OdontogramaComponent],
})
export class OdontogramaModule {}
