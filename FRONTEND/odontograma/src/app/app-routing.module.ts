import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultoriaComponent } from './consultoria/consultoria.component';
import { BiologicaComponent } from './biologica/biologica.component';
import { EctoscopiaComponent } from './ectoscopia/ectoscopia.component';
import { ExaGeneralComponent } from './exa-general/exa-general.component';
import { OtrosEstudiosComponent } from './otros-estudios/otros-estudios.component';
import { PlanTratamientoComponent } from './plan-tratamiento/plan-tratamiento.component';
import { SignosVitalesComponent } from './signos-vitales/signos-vitales.component';
import { AntecedentesPacienteComponent } from './antecedentes-paciente/antecedentes-paciente.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { AnamnesisNewComponent } from './anamnesis-new/anamnesis-new.component';
import { FuncionesBiologicasNewComponent } from './funciones-biologicas-new/funciones-biologicas-new.component';
import { MotivoConsultaNewComponent } from './motivo-consulta-new/motivo-consulta-new.component';
import { OdontogramaAnatomicoComponent } from './odontograma-anatomico/odontograma/odontograma.component';
import { OdontogramaGeometricoComponent } from './odontograma-geometrico/odontograma-geometrico.component';


const routes: Routes = [

      {
        path:'anamnesis',
        component: AnamnesisNewComponent
      },
      {
        path:'biologica',
        component: FuncionesBiologicasNewComponent
      },
      {
        path:'antecedentes-paciente',
        component: AntecedentesPacienteComponent
      },
      {
        path:'consultoria',
        component: MotivoConsultaNewComponent
      },
      {
        path:'odontograma-anatomico',
        component:OdontogramaAnatomicoComponent
      },
      {
        path:'odontograma-geometrico',
        component:OdontogramaGeometricoComponent
      },
      {
        path:'ectoscopia',
        component: EctoscopiaComponent
      },
      {
        path:'exa-general',
        component: ExaGeneralComponent
      },
      {
        path:'otros-estudios',
        component: OtrosEstudiosComponent
      },
      {
        path:'plan-tratamiento',
        component: PlanTratamientoComponent
      },
      {
        path:'signos-vitales',
        component: SignosVitalesComponent
      },
      {
        path: 'home',
        component: PantallaPrincipalComponent
      },
      {
        path: '**',
        redirectTo:'home'
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
