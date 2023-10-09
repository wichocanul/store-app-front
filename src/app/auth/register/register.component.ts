import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    user: ['', Validators.required],
    password: ['', [Validators.required]],
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService
  ) {}

  login() {
    this.router.navigate(['/auth']);
  }

  register() {
    const { email, user, password } = this.registerForm.value;

    this.authService.register(email, user, password).subscribe({
      next: (ok) => {
        if(ok == 'success') {
          this.router.navigateByUrl('/store');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: ok,
          });
        }
      }
    })
  }
}
