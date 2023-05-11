import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { IUser } from '../../interfaces/IUser';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private userSubject: BehaviorSubject<IUser | null>;
  public user: Observable<IUser | null>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(email: string, password: string) {
    //login(credencials: any) {
    //return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
    return this.http.post<any>(`${environment.apiUrl}/api/login`, { email, password })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
           console.log(user);
          localStorage.clear();
          localStorage.setItem('token', JSON.stringify(user.token));
          localStorage.setItem('user_id', user.id);
          localStorage.setItem('rol', user.rol);

          this.userSubject.next(user);
          return user;
        })
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
    1;
  }

}
