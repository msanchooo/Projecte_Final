import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Util } from 'src/app/utilidades/util';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css'],
})
export class RequestResetComponent implements OnInit {
  loading = false;
  submitted = false;
  error = '';
  success = '';

  requestResetForm!: FormGroup;


  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}

  formErrors: any = {
    email: '',
  };
  validationMessages: any = {
    email: {
      required: 'El correo electrónico es obligatorio.',
      email: 'El correo electrónico no es válido.'
    }
  };

  ngOnInit(): void {
    this.requestResetForm = this.formBuilder.group({
      email: [null, Validators.required],
    });
  }

  get f() {
    return this.requestResetForm.controls;
  }
  
  onSubmit(_data: any) {
    Util.onValueChanged(true,this.requestResetForm,this.formErrors,this.validationMessages);

    this.submitted = true;
    this.error = '';
    this.success = '';

    if (this.requestResetForm.invalid) {
      return;
    }
    this.loading = true;

    this.authenticationService.sendPasswordResetLink(this.requestResetForm.value).subscribe({
      next: (data:any) => {
        // console.log(data);
        this.success = data.data;
        this.loading = false;
        this.ngOnInit();
      },
      error: (error) => {
        this.error = error;
        this.loading = false;
      },
  });
  }
}
