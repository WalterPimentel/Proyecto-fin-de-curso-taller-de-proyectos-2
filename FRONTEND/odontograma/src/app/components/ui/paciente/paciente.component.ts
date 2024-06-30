import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { format, differenceInYears, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent {
  @Input() cita: any;

  constructor(private router: Router) { }

  navigateToOdontograma(cita: any) {
    this.router.navigate(['/odontograma', cita.paciente.dni], {
      state: { cita: cita, usuario: cita.usuario },
    });
  }

  formatearFecha(fecha: string, incluirHora: boolean = false): string {
    const formato = incluirHora ? 'dd/MM/yyyy HH:mm:ss a' : 'dd/MM/yyyy';
    return format(parseISO(fecha), formato, { locale: es });
  }

  calcularEdad(fechaNacimiento: string): number {
    return differenceInYears(new Date(), parseISO(fechaNacimiento));
  }
}
