import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { TargetScrollComponent } from './target-scroll/target-scroll.component';
import { TargetCategoryComponent } from './target-category/target-category.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchComponent,
    TargetScrollComponent,
    TargetCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    SearchComponent,
    TargetScrollComponent,
    TargetCategoryComponent
  ]
})
export class ComponentsModule { }
