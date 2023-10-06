import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css'],
})
export class RegisterComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/auth']);
  }
}
