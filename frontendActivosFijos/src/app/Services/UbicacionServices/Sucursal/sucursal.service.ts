import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  private API_SERVER = "http://localhost:8080/api/v1/direccion";

  constructor(private httpClient: HttpClient) { }

  public getAllSucursales(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public registerNewSucursal(registrarSucursal: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, registrarSucursal)
  }
}
