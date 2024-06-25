import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@amin-karimi/ng2-tooltip-directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

import { OdontogramaComponent } from './odontograma/odontograma.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteComponent } from './ui/paciente/paciente.component';
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
    PacientesComponent,
    PacienteComponent,
    SpinnerComponent,
    ModalUIComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatButtonModule,
  ],
  exports: [PacientesComponent, SpinnerComponent],
})
export class OdontogramaModule {}
