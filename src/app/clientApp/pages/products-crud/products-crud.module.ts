import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsMainComponent } from './products-main/products-main.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsMainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProductsCrudModule { }
