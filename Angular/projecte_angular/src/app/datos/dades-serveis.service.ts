import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IServei } from '../interfaces/IServei';

@Injectable({
  providedIn: 'root'
})
export class DadesServeisService {

  constructor(private _http: HttpClient) { }

  public getDades(): Observable<HttpResponse<IServei[]>> {
    return this._http.get<IServei[]>(environment.apiUrl + '/api/serveis', { observe: 'response' });
  }

  public getServei(id: any): Observable<IServei> {
    return this._http.get<IServei>(`${environment.apiUrl}/api/servei/${id}`);
  }

  public deleteServei(id: any): Observable<any> {
    return this._http.delete(`${environment.apiUrl}/api/servei/${id}`);
  }

  public putServei(id: any, dada: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      }),
    };
    const options = { params: new HttpParams().set('observe', 'response') }
    console.log(dada);
    return this._http.post(`${environment.apiUrl}/api/servei/${id}`, dada, {observe: 'response', headers: new HttpHeaders({
    })});

  }

  public postServei(dada: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      }),
    };
    const options = { params: new HttpParams().set('observe', 'response') }

    return this._http.post(environment.apiUrl + '/api/servei', dada, {
      observe: 'response', headers: new HttpHeaders({
      })
    });
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
