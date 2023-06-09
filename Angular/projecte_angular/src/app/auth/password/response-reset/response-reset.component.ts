import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../_services/authentication.service';
import { ServeiUpdateService } from 'src/app/servei-update/servei-update.service';

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
      email: [null, [Validators.required, Validators.email]],
      password: [null,[Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      password_confirmation: null,
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
    this.submitted = true;
    this.error = '';
    this.success = '';
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
