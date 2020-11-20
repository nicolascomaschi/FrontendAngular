import { Component, OnInit } from '@angular/core';
import { ApiCategoryService } from '../services/api-category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor( private apiCategories: ApiCategoryService) {
    apiCategories.getCategories().subscribe(response => {
      console.log(response);
    });
   }

  ngOnInit(): void {
  }

}
