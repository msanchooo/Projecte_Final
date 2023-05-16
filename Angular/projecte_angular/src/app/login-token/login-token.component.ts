import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ServeiUpdateService } from '../servei-update/servei-update.service';
import { AuthenticationService } from './_services/authentication.service';
import { DadesClientsService } from '../datos/dades-clients.service';


@Component({ templateUrl: 'login-token.component.html' })
export class LoginTokenComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  _rol: any;
  _user: any;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private service: ServeiUpdateService,
    private clientService: DadesClientsService

  ) {
    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['admin@gmail.com', Validators.required],
      password: ['123', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  sendMessage(rol: any): void {
    // send message to subscribers via observable subject
    this.service.sendUpdate(
      rol
    );
  }
  sendMessage2(user: any): void {
    // send message to subscribers via observable subject
    this.service.sendUpdate2(

      user
    );
  }

  onSubmit(credencials: any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.error = '';
    this.loading = true;
    this.authenticationService
      .login(this.f['email'].value, this.f['password'].value)
      //this.authenticationService.login(credencials)
      .pipe(first())
      .subscribe({
        next: () => {
          const returnUrl = '/';
          // this._rol = localStorage.getItem('user');
          // console.log(this._rol);
          const user = this.authenticationService.userValue;
          this._rol = user?.rol;

          console.log(this._rol)
          this._user = user?.username;

          if(this._rol !== null){
            this.sendMessage(this._rol);
          }

          if(this._user !== null){
            this.sendMessage2(this._user);
          }
          
          this.router.navigate([returnUrl]);
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
        },
      });
  }
}
