import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialActivoService {

  private API_SERVER = "http://localhost:8080/api/v1/historialActivos";

  constructor(private httpClient: HttpClient) { }

  public getAllHistorial(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public registerNewGistorial(historialActivo: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, historialActivo)
  }
}
