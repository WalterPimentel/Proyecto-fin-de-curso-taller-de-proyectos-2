import { Component, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent {
  @Input() paciente: any;
  isLoading: boolean;

  constructor(private router: Router) {
    this.isLoading = true;
  }

  navigateToOdontograma(paciente: any) {
    const navigationExtras: NavigationExtras = {
      state: { paciente: paciente },
    };
    this.router.navigate(['/odontograma'], navigationExtras);
    console.log('Paciente seleccionado: ', paciente)
  }
}
