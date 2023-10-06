import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-main/home.component';
import { SliderHomeComponent } from './slider-home/slider-home.component';
import { SectionProductsComponent } from './section-products/section-products.component';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    SliderHomeComponent,
    SectionProductsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class HomeModule { }
