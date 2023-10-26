import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  private API_SERVER = "http://localhost:8080/api/v1/unidad";

  constructor(private httpClient: HttpClient) { }

  public getAllUnidades(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public registerNewUnidad(registrarUnidad: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, registrarUnidad)
  }
}
