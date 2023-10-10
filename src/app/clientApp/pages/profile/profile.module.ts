import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMainComponent } from './profile-main/profile-main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileMainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProfileMainComponent
  ]
})
export class ProfileModule { }
