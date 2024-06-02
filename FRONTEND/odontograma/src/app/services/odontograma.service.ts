import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OdontogramaService {
  private odontogramaSource = new BehaviorSubject({});
  currentOdontograma = this.odontogramaSource.asObservable();

  constructor() { }

  changeOdontograma(odontograma: any) {
    this.odontogramaSource.next(odontograma);
  }
}