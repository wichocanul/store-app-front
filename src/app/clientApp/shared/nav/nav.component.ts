import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  flagOptionsSettings: boolean = false;

  constructor(
    private router: Router,
  ) {}

  login() {
    this.router.navigate(['/auth']);
  }

  showOptions() {
    this.flagOptionsSettings = true;
  }

  hiddenOption() {
    this.flagOptionsSettings = false;
  }
}
