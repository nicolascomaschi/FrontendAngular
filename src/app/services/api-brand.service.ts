import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class ApiBrandService {

  url: string = "https://localhost:44388/api/Brand";

  constructor( private _http: HttpClient ) { 

  }

  getBrands(): Observable<Brand>{
    return  this._http.get<Brand>(this.url);
  }

}
