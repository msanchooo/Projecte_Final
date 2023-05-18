import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css'],
})
export class RequestResetComponent implements OnInit {
  loading = false;
  submitted = false;
  requestResetForm!: FormGroup;

  error = '';

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.requestResetForm = this.formBuilder.group({
      email: null,
    });
  }

  get f() {
    return this.requestResetForm.controls;
  }
  
  onSubmit(data: any) {
    this.submitted = true;
    this.error = '';

    if (this.requestResetForm.invalid) {
      return;
    }
    
    this.loading = true;


    this.authenticationService.sendPasswordResetLink(this.requestResetForm.value).subscribe(
      (data) => console.log(data),
      (error) => (error: any) => {
        this.error = error;
        this.loading = false;
      }
    );
  }

  // handleResponse(res: any) {
  //   this.requestResetForm.email = null;
  // }
}
