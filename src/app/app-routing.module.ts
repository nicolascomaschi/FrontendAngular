import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'brand', component: BrandComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
