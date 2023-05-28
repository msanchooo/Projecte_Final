import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit(): void {
    this.requestResetForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  get f() {
    return this.requestResetForm.controls;
  }
  
  onSubmit(_data: any) {
    this.submitted = true;

    if (this.requestResetForm.invalid) {
      return;
    }

    this.error = '';
    this.success = '';
    this.loading = true;

    this.authenticationService.sendPasswordResetLink(this.requestResetForm.value).subscribe({
      next: (data:any) => {
        this.success = data.data;
        this.loading = false;
        //this.ngOnInit(); para reiniciar el mail pero aparece que es obligatorio
      },
      error: (error) => {
        //Da un not found y deberia dar que no se ha encontrado
        this.error = error;
        this.loading = false;
      },
  });
  }
}
