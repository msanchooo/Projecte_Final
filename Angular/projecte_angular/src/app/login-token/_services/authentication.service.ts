import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

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
    return this.login2({ email, password }).pipe(
      map((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        //console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
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

  login2(credencials: any) {
    return this.http
      .post<any>(`${environment.apiUrl}/api/login`, credencials)
      .pipe(
        map((user) => {
          // let obj = JSON.parse(credencials);

          var token: string = JSON.stringify(user.token).replace(/['"]+/g, '');

            (user.username = user.username),
            (user.firstName = user.firstName),
            (user.lastName = user.lastName),
            (user.token = token);

          return user;
        })
      );
  }
}
