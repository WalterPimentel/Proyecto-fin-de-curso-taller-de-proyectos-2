import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  constructor(private http: HttpClient) { }

  getPacienteYUsuarioByDNI(dni: string): Observable<any> {
    return this.http.get<any[]>('http://localhost:3000/cita').pipe(
      map(citas => {
        const citaConPaciente = citas.find(cita => cita.paciente.dni === dni);
        return citaConPaciente ? {
          paciente: citaConPaciente.paciente,
          usuario: citaConPaciente.usuario
        } : null;
      })
    );
  }

  getTodosLasCitas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/cita');
  }

}
