import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class DadesUsersService {

  constructor(private _http:HttpClient) { }

  public getDades(): Observable<HttpResponse<IUser[]>> {
    return this._http.get<IUser[]>('http://localhost/Projecte_Final/Laravel/projecte_final/public/index.php/api/vehicles',    { observe: 'response' });
  }
}
