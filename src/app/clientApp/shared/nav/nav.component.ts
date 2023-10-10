import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  flagOptionsSettings: boolean = false;
  userActive: boolean = false;
  user: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.userActive = this.authService.statusSesion();
    localStorage.getItem('user') ? this.user = localStorage.getItem('user')! : this.user = '';
  }

  auth() {
    this.router.navigate(['/auth']);
  }

  showOptions() {
    this.flagOptionsSettings = true;
  }

  hiddenOption() {
    this.flagOptionsSettings = false;
  }

}
