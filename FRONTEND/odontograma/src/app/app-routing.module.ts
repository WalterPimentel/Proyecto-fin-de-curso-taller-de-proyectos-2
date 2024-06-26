import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OdontogramaComponent } from './components/odontograma/odontograma.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';

const routes: Routes = [
  { path: 'pacientes', component: PacientesComponent },
  {
    path: 'odontograma/:id',
    component: OdontogramaComponent,
    data: {
      paciente: null,
    },
  },
  { path: '', redirectTo: '/pacientes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
