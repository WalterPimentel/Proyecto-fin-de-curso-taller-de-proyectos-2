import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@cloudfactorydk/ng2-tooltip-directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';

import { OdontogramaComponent } from './odontograma/odontograma.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteComponent } from './ui/paciente/paciente.component';
import { OdontogramaAnatomicoUIComponent } from './ui/odontograma-anatomico/anatomico.component';
import { OdontogramaGeometricoUIComponent } from './ui/odontograma-geometrico/geometrico.component';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { MenuContextualUIComponent } from './ui/menu-contextual/menuContextual.component';
import { ModalUIComponent } from './ui/modal/modal.component';
import { DialogoComponent } from './ui/dialogo/dialogo.component';

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
    DialogoComponent,
  ],
  providers: [provideNativeDateAdapter()],
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
    MatDialogModule,
    MatIconModule,    
  ],
  exports: [PacientesComponent, SpinnerComponent],
})
export class OdontogramaModule {}
