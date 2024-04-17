import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisService {

  private URLPATIENT = 'http://localhost:4000/api/v1/patients'
  private URLCOMPANION = 'http://localhost:4000/api/v1/companions'
  private URLANAMNESIS = 'http://localhost:4000/api/v1/anamnesis'
  private URLCH= 'http://localhost:4000/api/v1/clinic-histories'

  constructor(private http: HttpClient) { }

  savePatientData(patientData:any):Observable<any>{
    return this.http.post(this.URLPATIENT,patientData)
  }

  saveCompanionData(compaionData:any):Observable<any>{
    return this.http.post(this.URLCOMPANION,compaionData)
  }

  createAnamnesis():Observable<any>{
    return this.http.post(this.URLANAMNESIS,{})
  }

  createClinicHistory(clinicHistoryData:any):Observable<any>{
    return this.http.post(this.URLCH,clinicHistoryData)
  }
}
