import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
