import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ComponentsModule } from '../components/components.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
