import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private idHistoriaClinica!: string;

  setIdHistoriaClinica(id: string): void {
    this.idHistoriaClinica = id;
  }

  getIdHistoriaClinica(): string {
    return this.idHistoriaClinica;
  }
}
