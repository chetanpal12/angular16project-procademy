import { Component } from '@angular/core';

import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  constructor(private http:HttpClient){}
  productdata:any;
  product=this.http.get('https://dummyjson.com/products').subscribe((data)=>{
    console.log(data)
    this.productdata=data;
    console.log(this.productdata.products[0],"productdata")
  })
}
