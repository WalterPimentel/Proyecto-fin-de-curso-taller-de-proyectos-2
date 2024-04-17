import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultoriaModule } from './consultoria/consultoria.module';
import { BiologicaModule } from './biologica/biologica.module';
import { ExaGeneralModule } from './exa-general/exa-general.module';
import { EctoscopiaModule } from './ectoscopia/ectoscopia.module';
import { AntecedentesPacienteModule } from './antecedentes-paciente/antecedentes-paciente.module';
import { SignosVitalesModule } from './signos-vitales/signos-vitales.module';
import { OtrosEstudiosModule } from './otros-estudios/otros-estudios.module';
import { PlanTratamientoModule } from './plan-tratamiento/plan-tratamiento.module';
import { RouterModule } from '@angular/router';
import { PantallaPrincipalModule } from './pantalla-principal/pantalla-principal.module';
import { AnamnesisNewModule } from './anamnesis-new/anamnesis-new.module';
import { MotivoConsultaNewModule } from './motivo-consulta-new/motivo-consulta-new.module';
import { FuncionesBiologicasNewModule } from './funciones-biologicas-new/funciones-biologicas-new.module';
import { OdontogramaAnatomicoModule } from './odontograma-anatomico/odontograma-anatomico.module';
import { OdontogramaGeometricoComponent } from './odontograma-geometrico/odontograma-geometrico.component';
import { OdontogramaGeometricoModule } from './odontograma-geometrico/odontograma-geometrico.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ConsultoriaModule,
    BiologicaModule,
    ExaGeneralModule,
    EctoscopiaModule,
    AnamnesisNewModule,
    AntecedentesPacienteModule,
    SignosVitalesModule,
    OtrosEstudiosModule,
    PlanTratamientoModule,
    PantallaPrincipalModule,
    MotivoConsultaNewModule,
    FuncionesBiologicasNewModule,
    OdontogramaAnatomicoModule,
    OdontogramaGeometricoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
