import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-main/home.component';
import { SliderHomeComponent } from './slider-home/slider-home.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
