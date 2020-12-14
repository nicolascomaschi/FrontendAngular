import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Response } from '../models/response';

const httpOption = { 
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiBrandService {

  url: string = "https://localhost:44388/api/Brand";

  constructor( private _http: HttpClient ) { 

  }

  getBrands(): Observable<Response>{
    return  this._http.get<Response>(this.url);
  }

  addBrand(brand: Brand): Observable<Response>{
    return this._http.post<Response>(this.url, brand, httpOption);
  }

  editBrand(brand: Brand): Observable<Response>{
    return this._http.put<Response>(this.url, brand, httpOption);
  }

  deleteBrand(id: number): Observable<Response>{
    return this._http.delete<Response>(`${this.url}/${id}`)};
  }
