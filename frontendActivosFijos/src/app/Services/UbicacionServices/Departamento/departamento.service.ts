import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private API_SERVER = "http://localhost:8080/api/v1/departamentos";

  constructor(private httpClient: HttpClient) { }

  public getAllDepartamentos(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public registerNewDepartamento(registroDepartamento: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, registroDepartamento)
  }
}
