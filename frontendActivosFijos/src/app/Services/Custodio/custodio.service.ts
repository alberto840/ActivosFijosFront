import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustodioService {

  private API_SERVER = "http://localhost:8080/api/v1/custodio";

  constructor(private httpClient: HttpClient) { }

  public getAllCustodios(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public registerNewCustodio(registroCustodio: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, registroCustodio)
  }
}
