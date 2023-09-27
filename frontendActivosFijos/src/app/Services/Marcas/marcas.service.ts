import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  private API_SERVER = "http://localhost:8080/api/v1/marca";

  constructor(private httpClient: HttpClient) { }

  public getAllMarcas(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public registerNewMarca(registroMarca: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, registroMarca)
  }
}
