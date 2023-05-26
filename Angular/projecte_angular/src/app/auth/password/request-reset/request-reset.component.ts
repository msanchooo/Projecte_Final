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
  error = '';
  success = '';

  requestResetForm!: FormGroup;


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
  
  onSubmit(_data: any) {
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
        this.error = error.message;
        console.log(this.error);
        this.loading = false;
      },
  });
  }
}
