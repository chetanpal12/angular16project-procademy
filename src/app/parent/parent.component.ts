import { Component } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  data:any;
// childcomponentrefernce: ChildComponent;
  constructor(private http:HttpClient){}
  callChildMethod(child:ChildComponent){
    // debugger;
    console.log("i'm inside callchildmethood ")
    child.someMethod();
    this.data=child.datas;
    debugger;
    console.log(this.data);
    debugger;
  }
  onbtnclick(inputEL:HTMLInputElement){
    console.log(inputEL,"inputEl");
    debugger
    console.log(inputEL.value,"value");
  }
  productdata:any;
  product=this.http.get('https://dummyjson.com/products').subscribe((data)=>{
    console.log(data)
    this.productdata=data;
    console.log(this.productdata.products[0],"productdata")
  })
}
