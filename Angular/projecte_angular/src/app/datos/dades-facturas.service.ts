import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
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

  public getFactura(id: any): Observable<IFactura> {
    return this._http.get<IFactura>(`${environment.apiUrl}/api/factura/${id}`);
  }

  public postFactura(dada: any): Observable<any> {
    return this._http.post(environment.apiUrl + '/api/factura', dada, { observe: 'response' }).pipe(
      catchError(this.handleError)
    );
  }
  public postLinea(dada: any): Observable<any> {

    return this._http.post(environment.apiUrl + '/api/linea', dada, { observe: 'response' }).pipe(
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
