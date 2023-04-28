import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from '../../interfaces/IUser';
import { I } from '@fullcalendar/core/internal-common';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }
  // apiurl = 'http://localhost:4200/user';

  GetAll() {
    return this.http.get(environment.apiUrl);
  }

  Getbycode(code: any): Observable<HttpResponse<IUser>> {
    return this.http.get<IUser>(environment.apiUrl + '/api/userLogin/' + code, { observe: 'response' });
  }

  Proceedregister(inputdata: any): Observable<any> {
    return this.http
      .post(environment.apiUrl + '/api/client', inputdata, {
        observe: 'response',
      })
      .pipe(catchError(this.handleError));
  }

  Updateuser(code: any, inputdata: any) {
    return this.http.put(environment.apiUrl + '/' + code, inputdata);
  }

  GetIdUser() {
    return sessionStorage.getItem('id') != null;
  }

  GetId() {
    return sessionStorage.getItem('id') != null;
  }

  GetUserrole() {
    return sessionStorage.getItem('rol') != null
      ? sessionStorage.getItem('rol')?.toString()
      : '';
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
