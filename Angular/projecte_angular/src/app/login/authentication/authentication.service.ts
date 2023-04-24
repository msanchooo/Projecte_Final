import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private logged: boolean = false;

  constructor(private router: Router) {}

  public login(obj: any): boolean {
    this.logged = obj.email == 'tuku' && obj.password == '1234';

    if (this.logged) {
      this.router.navigate(['/dashboard']);
    }

     return this.logged;
  }

  public habilitarLogin() {
    return this.logged;
  }
}
