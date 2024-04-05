import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  datas:string="this is string";
  someMethod() {
    debugger
    console.log('Some method in ChildComponent is called!');
  }
  @Input()
  childproduct:any;
}
