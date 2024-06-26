import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent {
  @Input() paciente: any;

  constructor(private router: Router) {}

  navigateToOdontograma(paciente: any) {
    this.router.navigate(['/odontograma', paciente.id], {
      state: { paciente: paciente },
    });
  }
}
