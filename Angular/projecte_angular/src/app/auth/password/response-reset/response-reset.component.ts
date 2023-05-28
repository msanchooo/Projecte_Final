import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../_services/authentication.service';
import { ServeiUpdateService } from 'src/app/servei-update/servei-update.service';
import { Util } from 'src/app/utilidades/util';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css'],
})
export class ResponseResetComponent implements OnInit {
  loading = false;
  submitted = false;
  error: String = '';
  success = '';

  resetPasswordForm!: FormGroup;

  resetToken: String = '';

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null,[Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      password_confirmation: [null,[Validators.required]],
    });
    this.resetPasswordForm.valueChanges.subscribe(() => {
      Util.onValueChanged(false, this.resetPasswordForm,this.formErrors,this.validationMessages);
    });
  }

  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ServeiUpdateService

  ) {
    this.route.queryParams.subscribe((params) => {
      //this.resetPasswordForm.resetToken = params['token']
      this.resetToken = params['token'];
    });
  }

  formErrors: any = {
    email: '',
    password: '',
    password_confirmation: ''
  };
  validationMessages: any = {
    email: {
      required: 'El correo electrónico es obligatorio.',
      email: 'El correo electrónico no es válido.'
    },
    password: {
      required: 'La contraseña es obligatoria.',
      minlength: 'La contraseña debe tener al menos 6 caracteres.',
      maxlength: 'La contraseña no puede tener más de 15 caracteres.'
    },
    password_confirmation: {
      required: 'La contraseña es obligatoria.',
    }
  };

  sendMessage(msg: any): void {
    // send message to subscribers via observable subject
    this.service.sendUpdate3(
      msg
    );
  }

  get f() {
    return this.resetPasswordForm.controls;
  }

  onSubmit(data: any) {
    Util.onValueChanged(true,this.resetPasswordForm,this.formErrors,this.validationMessages);

    this.submitted = true;
    this.error = '';
    this.success = '';

    if (this.resetPasswordForm.invalid) {
      return;
    }
    this.loading = true;

    data.resetToken = this.resetToken;

    this.authenticationService.changePassword(data).subscribe({
      next: (data:any) => {
        this.success = data.data;
        this.loading = false;
        this.ngOnInit();
        this.router.navigate(['/login/reset-password']);
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
      },
    });
  }
}
