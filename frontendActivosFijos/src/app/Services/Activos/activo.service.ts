import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  private API_SERVER = "http://localhost:8080/api/v1/activo";

  constructor(private httpClient: HttpClient) { }

  public getAllActivos(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public registerNewActivo(registroActivo: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, registroActivo)
  }
}
