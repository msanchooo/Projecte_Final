import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IVehicle } from '../interfaces/IVehicle';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DadesVehiclesService {

  constructor(private _http: HttpClient) { }

  public getDades(): Observable<HttpResponse<IVehicle[]>> {
    return this._http.get<IVehicle[]>(environment.apiUrl + '/api/vehicles', { observe: 'response' });
  }

  public getVehicle(id: any): Observable<IVehicle> {
    return this._http.get<IVehicle>(`${environment.apiUrl}/api/vehicle/${id}`);
  }

  public getVehicleClient(idClient: any): Observable<IVehicle> {
    return this._http.get<IVehicle>(`${environment.apiUrl}/api/vehicle-client/${idClient}`);
  }

  public postVehicle(dada: any): Observable<any> {
    return this._http.post(environment.apiUrl + '/api/vehicle', dada, { observe: 'response' }).pipe(
      catchError(this.handleError)
    );
  }
  
  public getVehicleClient(idClient: any): Observable<HttpResponse<IVehicle[]>>{
    return this._http.get<IVehicle[]>(environment.apiUrl + '/api/vehicle-client/' + idClient, { observe: 'response' });
  }

  public putVehicle(id: any, dada: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      }),
    };
    const options = { params: new HttpParams().set('observe', 'response') }
    console.log(dada);
    return this._http.post(`${environment.apiUrl}/api/vehicle/${id}`, dada, {observe: 'response', headers: new HttpHeaders({
    })});

  }

  public deleteVehicle(id: any): Observable<any> {
    return this._http.delete(`${environment.apiUrl}/api/vehicle/${id}`);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));

  }
}
