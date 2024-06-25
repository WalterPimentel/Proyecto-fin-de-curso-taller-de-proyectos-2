import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OdontogramaComponent } from './components/odontograma/odontograma.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';

const routes: Routes = [
  { path: 'pacientes', component: PacientesComponent },
  { path: 'odontograma', component: OdontogramaComponent },
  { path: '', redirectTo: '/pacientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
