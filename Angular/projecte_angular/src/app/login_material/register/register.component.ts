import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}

  registerForm = this.builder.group({
    // id: this.builder.control('', Validators.compose([Validators.required])),
    nom: this.builder.control('', Validators.required),
    cognoms: this.builder.control('', Validators.required),
    nif: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
    // rol: this.builder.control('', Validators.required)
  });

  proceedregistration() {
    if (this.registerForm.valid) {
      this.service.Proceedregister(this.registerForm.value).subscribe((res) => {
        this.toastr.success(
          'Please contact admin for acces ','Registered succesfully'
        );
        this.router.navigate(['login-material']);
      });
    } else {
      this.toastr.warning('Please enter valid data');
    }
  }
}
