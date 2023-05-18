import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { DadesClientsService } from '../../datos/dades-clients.service';

import { environment } from '../../../environments/environment';
import { IUser } from '../../interfaces/IUser';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private userSubject: BehaviorSubject<IUser | null>;
  public user: Observable<IUser | null>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private clientService: DadesClientsService
  ) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/api/login`, { email, password })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  register(credencials: any): Observable<any> {
    return this.http
      .post<any>(`${environment.apiUrl}/api/client`,  credencials , { observe: 'response' }) .pipe(
        catchError(this.handleError)
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    this.userSubject.next(null);
    this.router.navigate(['/login-token']);
  }

  isLoggedIn() {
    if (this.userValue) {
      return true;
    }
    return false;
  }

  sendPasswordReset(data: any){
    return this.http.post(`${environment.apiUrl}/api/sendPasswordResetLink`,  data)
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
