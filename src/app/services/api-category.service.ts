import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ApiCategoryService {

  url: string = "https://localhost:44388/api/Categories";

  constructor( private _http: HttpClient ) { 

  }

  getCategories(): Observable<Category>{
    return  this._http.get<Category>(this.url);
  }
}
