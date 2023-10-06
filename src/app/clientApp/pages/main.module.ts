import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home-main/home.component';
import { MainStoreComponent } from './main-store/main-store.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { CategoryModule } from './category/category.module';


@NgModule({
  declarations: [
    MainStoreComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    CategoryModule,
    HomeModule
  ]
})
export class MainModule { }
