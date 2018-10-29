import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { Category } from './category';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryDetailGuard } from './category-detail.guard'

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories/:id', component: CategoryDetailComponent },
  { path: 'categories', component: CategoriesComponent }, 
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(
      routes
    ),
  ],
  exports: [ 
    RouterModule 
  ]
})
export class AppRoutingModule { }
