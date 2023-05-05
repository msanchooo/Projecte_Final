import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IFactura } from '../interfaces/IFactura';


@Injectable({
  providedIn: 'root'
})
export class DadesFacturasService {

  constructor(private _http:HttpClient) { }
  public getDades(): Observable<HttpResponse<IFactura[]>> {
    return this._http.get<IFactura[]>(environment.apiUrl+'/api/facturas',    { observe: 'response' });
  }
}
