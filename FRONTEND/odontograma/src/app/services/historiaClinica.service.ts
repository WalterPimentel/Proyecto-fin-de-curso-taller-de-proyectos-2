import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HistoriaClinicaService {
  constructor(private http: HttpClient) {}

  getPacienteByDNI(dni: string): Observable<any> {
    const params = new HttpParams().set('dni', dni);
    return this.http.get<any[]>('http://localhost:3000/historiaClinica', { params }).pipe(
      map(pacientes => pacientes[0] || null)
    );
  }

  getTodosLosPacientes(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/historiaClinica');
  }

  getPacientesPaginados(pageIndex: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get<any[]>('http://localhost:3000/historiaClinica', { params });
  }

  getUserAleatorio(): Observable<any> {
    return this.http.get<any[]>('http://localhost:3000/usuario').pipe(
      map((data: any[]) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
      })
    );
  }
}
