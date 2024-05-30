import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OdontogramaComponent } from './odontograma/odontograma.component';
import { OdontogramaAnatomicoUIComponent } from './ui/odontograma-anatomico/anatomico.component';
import { OdontogramaGeometricoUIComponent } from './ui/odontograma-geometrico/geometrico.component';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { MenuContextualUIComponent } from './ui/menu-contextual/menuContextual.component';

@NgModule({
  declarations: [
    OdontogramaAnatomicoUIComponent,
    MenuContextualUIComponent,
    OdontogramaGeometricoUIComponent,
    OdontogramaComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [OdontogramaComponent],
})
export class OdontogramaModule {}
