import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home-main/home.component';
import { MainStoreComponent } from './main-store/main-store.component';

const routes: Routes = [
  {
    path: '',
    component: MainStoreComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
