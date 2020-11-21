import { Component, OnInit } from '@angular/core';
import { ApiCategoryService } from '../services/api-category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public list: any[];
  public gridcolumns: string[] = ['id','name'];
  constructor( private apiCategories: ApiCategoryService ) {
  
   }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.apiCategories.getCategories().subscribe(response => {
      this.list = response;
    });
  }
}
