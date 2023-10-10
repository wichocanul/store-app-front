import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainStoreComponent } from './main-store/main-store.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { CategoryModule } from './category/category.module';
import { ProfileModule } from './profile/profile.module';
import { UsersCrudModule } from './users-crud/users-crud.module';


@NgModule({
  declarations: [
    MainStoreComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    CategoryModule,
    HomeModule,
    ProfileModule,
    UsersCrudModule
  ]
})
export class MainModule { }
