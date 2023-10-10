import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent implements OnInit {
  name: string = '';
  email: string = '';
  userType: string = '';

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.name = localStorage.getItem('user')!;
    this.email = localStorage.getItem('email')!;
    this.userType = localStorage.getItem('userType')!;

  }

  redirect(url: string) {
    this.router.navigate([`/store/${url}`]);
  }


}
