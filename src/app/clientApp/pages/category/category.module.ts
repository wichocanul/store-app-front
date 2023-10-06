import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMainComponent } from './category-main/category-main.component';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    CategoryMainComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class CategoryModule { }
