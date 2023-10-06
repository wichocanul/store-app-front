import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  flagOptionsSettings: boolean = false;

  showOptions() {
    this.flagOptionsSettings = true;
  }

  hiddenOption() {
    this.flagOptionsSettings = false;
  }

  text1() {
    console.log('hola');
  }
}
