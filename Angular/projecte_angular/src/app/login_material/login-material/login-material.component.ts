import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-login-material',
  templateUrl: './login-material.component.html',
  styleUrls: ['./login-material.component.css'],
})
export class LoginMaterialComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {
    sessionStorage.clear();
  }

  userdata: any;

  loginform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  proceedlogin() {
    if (this.loginform.valid) {
    }
    this.service.Getbycode(this.loginform.value.email).subscribe((res) => {
      this.userdata = res;
      console.log(this.userdata);
      if (this.userdata.password === this.loginform.value.password) {
        sessionStorage.setItem('email', this.userdata.id);
        sessionStorage.setItem('userrole', this.userdata.role);
        this.router.navigate(['']);
      } else {
        this.toastr.error('Invalid credentials');
      }
    });
  }
}
