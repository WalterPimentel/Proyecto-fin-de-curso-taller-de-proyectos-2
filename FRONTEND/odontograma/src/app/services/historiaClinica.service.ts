import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HistoriaClinicaService {
  constructor(private http: HttpClient) {}

  getPacienteAleatorio(): Observable<any> {
    return this.http.get<any[]>('http://localhost:3000/historiaClinica').pipe(
      map((data: any[]) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
      })
    );
  }

  getTodosLosPacientes(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/historiaClinica');
  }

  getUserAuthAleatorio(): Observable<any> {
    return this.http.get<any[]>('http://localhost:3000/userAuth').pipe(
      map((data: any[]) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
      })
    );
  }

  buscarPaciente(query: string): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3001/pacientes').pipe(
      map((data: any[]) => {
        return data.filter(paciente => 
          paciente.nombres.toLowerCase().includes(query.toLowerCase()) ||
          paciente.apellidos.toLowerCase().includes(query.toLowerCase()) ||
          paciente.dni.includes(query)
        );
      })
    );
  }
}
