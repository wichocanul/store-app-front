import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home-main/home.component';
import { MainStoreComponent } from './main-store/main-store.component';
import { CategoryMainComponent } from './category/category-main/category-main.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
