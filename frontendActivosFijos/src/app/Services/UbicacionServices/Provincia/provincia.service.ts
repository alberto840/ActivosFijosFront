import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  private API_SERVER = "http://localhost:8080/api/v1/provincias";

  constructor(private httpClient: HttpClient) { }

  public getAllProvincia(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public registerNewProvincia(registroProvincia: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, registroProvincia)
  }
}
