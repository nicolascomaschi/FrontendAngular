import { Component, OnInit } from '@angular/core';
import { ApiBrandService } from '../services/api-brand.service';
import { Response } from '../models/response';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  public list: any[];
  public gridcolumns: string[] = ['id','name'];
  constructor( private apiBrands: ApiBrandService ) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.apiBrands.getBrands().subscribe(response => {
      this.list = response.result;
    });
  }

  openModal(){
    console.log('OK');
  }
}
