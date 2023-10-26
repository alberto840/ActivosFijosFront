import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloqueService {

  private API_SERVER = "http://localhost:8080/api/v1/bloque";

  constructor(private httpClient: HttpClient) { }

  public getAllBloque(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public registerNewBloque(registroBloque: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, registroBloque)
  }
}
