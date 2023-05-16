import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from '../interfaces/IClient';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DadesClientsService {
  constructor(private _http: HttpClient) {}

  public getDades(): Observable<HttpResponse<IClient[]>> {
    return this._http.get<IClient[]>(environment.apiUrl + '/api/clients', {
      observe: 'response',
    });
  }
  public getClient(id: any): Observable<IClient> {
    return this._http.get<IClient>(`${environment.apiUrl}/api/client/${id}`, );
  }
  public deleteClient(id: any): Observable<any> {
    return this._http.delete(`${environment.apiUrl}/api/client/${id}`);
  }

  getClientByUserId(id: any): Observable<IClient> {
    return this._http.get<IClient>(`${environment.apiUrl}/api/client-user/${id}`);

  }

}
