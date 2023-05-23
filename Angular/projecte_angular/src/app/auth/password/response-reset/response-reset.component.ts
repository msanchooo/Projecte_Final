import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css'],
})
export class ResponseResetComponent implements OnInit {
  loading = false;
  submitted = false;
  error: String = '';
  resetPasswordForm!: FormGroup;

  resetToken: String = '';

  // public resetPasswordForm = {
  //   email: null,
  //   password: null,
  //   password_confirmation: null,
  //   resetToken: null
  // }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      email: null,
      password: null,
      password_confirmation: null,
    });
  }

  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      //this.resetPasswordForm.resetToken = params['token']
      this.resetToken = params['token'];
    });
  }

  get f() {
    return this.resetPasswordForm.controls;
  }

  onSubmit(data: any) {
    this.submitted = true;
    this.error = '';
    this.loading = true;

    //data.push(this.resetToken);
    data.token = this.resetToken;
    // data['token'] = this.resetToken;

    console.log(data);

    this.authenticationService.changePassword(data).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
      },
    });
  }
}
