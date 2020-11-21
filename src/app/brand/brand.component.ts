import { Component, OnInit } from '@angular/core';
import { ApiBrandService } from '../services/api-brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  public list: any[];
  public gridcolumns: string[] = ['id','name'];
  constructor(private apiBrnads: ApiBrandService ) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.apiBrnads.getBrands().subscribe(response => {
      this.list = response.result;
    });
  }
}
