import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITreballador } from '../interfaces/ITreballador';


@Injectable({
  providedIn: 'root'
})
export class DadesTreballadorsService {

  constructor(private _http: HttpClient) { }

  public getDades(): Observable<HttpResponse<ITreballador[]>> {
    return this._http.get<ITreballador[]>(environment.apiUrl + '/api/treballadors', { observe: 'response' });
  }

  public getTreballador(id: any): Observable<ITreballador> {
    return this._http.get<ITreballador>(`${environment.apiUrl}/api/treballador/${id}`);
  }

  public postTreballador(dada: any): Observable<any> {
    return this._http.post(environment.apiUrl + '/api/treballador', dada, { observe: 'response' }).pipe(
      catchError(this.handleError)
    );
  }

  public putTreballador(id: any, dada: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      }),
    };
    const options = { params: new HttpParams().set('observe', 'response') }
    console.log(dada);
    return this._http.post(`${environment.apiUrl}/api/treballador/${id}`, dada, {observe: 'response', headers: new HttpHeaders({
    })});

  }

  public deleteTreballador(id: any): Observable<any> {
    return this._http.delete(`${environment.apiUrl}/api/treballador/${id}`);
  }

  public getTreballadorByUserId(id: any): Observable<ITreballador> {
    return this._http.get<ITreballador>(`${environment.apiUrl}/api/treballador-user/${id}`);
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
