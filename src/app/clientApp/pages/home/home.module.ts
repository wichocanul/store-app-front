import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-main/home.component';
import { SliderHomeComponent } from './slider-home/slider-home.component';
import { SectionProductsComponent } from './section-products/section-products.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderHomeComponent,
    SectionProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
