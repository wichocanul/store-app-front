import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home-main/home.component';
import { MainStoreComponent } from './main-store/main-store.component';
import { CategoryMainComponent } from './category/category-main/category-main.component';
import { ProfileMainComponent } from './profile/profile-main/profile-main.component';
import { UserMainComponent } from './users-crud/user-main/user-main.component';

const routes: Routes = [
  {
    path: '',
    component: MainStoreComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'search/:category',
        component: CategoryMainComponent,
      },
      {
        path: 'profile',
        component: ProfileMainComponent,
      },
      {
        path: 'users-crud',
        component: UserMainComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
