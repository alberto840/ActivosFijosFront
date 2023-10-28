import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoActivoService {

  private API_SERVER = "http://localhost:8080/api/v1/grupoActivo";

  constructor(private httpClient: HttpClient) { }

  public getAllGrupos(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public registerNewGrupo(registroGrupo: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, registroGrupo)
  }
}
