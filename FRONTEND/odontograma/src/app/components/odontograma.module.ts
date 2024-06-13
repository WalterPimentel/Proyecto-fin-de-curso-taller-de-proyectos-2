import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxTooltipDirectivesModule } from 'ngx-tooltip-directives';

import { OdontogramaComponent } from './odontograma/odontograma.component';
import { OdontogramaAnatomicoUIComponent } from './ui/odontograma-anatomico/anatomico.component';
import { OdontogramaGeometricoUIComponent } from './ui/odontograma-geometrico/geometrico.component';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { MenuContextualUIComponent } from './ui/menu-contextual/menuContextual.component';
import { ModalUIComponent } from './ui/modal/modal.component';

@NgModule({
  declarations: [
    OdontogramaAnatomicoUIComponent,
    MenuContextualUIComponent,
    OdontogramaGeometricoUIComponent,
    OdontogramaComponent,
    SpinnerComponent,
    ModalUIComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxTooltipDirectivesModule],
  exports: [OdontogramaComponent],
})
export class OdontogramaModule {}
