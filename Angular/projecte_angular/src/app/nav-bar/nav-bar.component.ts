import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/authentication/authentication.service';
// import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private loginPrd: AuthenticationService) {}

  public logged():boolean {
    return this.loginPrd.habilitarLogin();
  }

  // constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    //   this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
    //     if (isAuthenticated) {
    //       this.router.navigate(['/body']);
    //     }
    //   });
  }

  // login() {
  //   this.auth.loginWithRedirect();
  // }

  // logOut(){
  //   this.auth.logout()
  // }
}
