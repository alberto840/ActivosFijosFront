import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  private API_SERVER = "http://localhost:8080/api/v1/aula";

  constructor(private httpClient: HttpClient) { }

  public getAllAulas(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public registerNewAula(registroAulas: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, registroAulas)
  }
}
