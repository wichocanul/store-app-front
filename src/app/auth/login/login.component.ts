import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email   : ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private fb          : FormBuilder,
              private authService: AuthService,
              private router      : Router,
  ) { }

  login() {
    const { email, password } = this.loginForm.value;

    this.authService.login( email, password )
      .subscribe({
        next: (ok) => {
          if(ok == 'success') {
            this.router.navigateByUrl('/store');
          } else {
            // TODO: Add alert
          }
        }
      })

  }

}
