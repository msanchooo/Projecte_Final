import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../app/login-token/_services/authentication.service';
import { User } from '../app/login-token/_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  user?: User | null;
  
  title = 'projecte_angular';
  ismenurequired = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.authenticationService.logout();
  }
  //Entiendo q esto es para hacer visible o no la navbar(menu), min49
  ngDoCheck(): void {
    // let currenturl=this.router.url;
    // if(currenturl=='/login-material' || currenturl=='/register'){
    //   this.ismenurequired=false;
    // } else {
    //   this.ismenurequired=true;
    // }
  }
}
