import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
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

  public postVehicle(dada: any): Observable<any> {
    return this._http.post(environment.apiUrl + '/api/vehicle', dada, { observe: 'response' }).pipe(
      catchError(this.handleError)
    );
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
