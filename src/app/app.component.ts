import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular16project';
  selectall=false
  checkboxes=[
    {title:'one',selected:false,submodule:{subtitle:'subone',subarray:[1,2,3,4,5]}},
    {title:'two',selected:false,submodule:{subtitle:'subtwo',subarray:[6,7]}},
    {title:'three',selected:false,submodule:{subtitle:'subthree',subarray:[8,9,10]}},
    {title:'four',selected:false,submodule:{subtitle:'subfour',subarray:[11,12]}},
    {title:'five',selected:false,submodule:{subtitle:'subfive',subarray:[13,14]}},
    {title:'six',selected:false,submodule:{subtitle:'subsix',subarray:[15,16]}},
    {title:'seven',selected:false,submodule:{subtitle:'subseven',subarray:[17,18]}},

  ]

  
  togglecheckbox(){
    this.checkboxes.forEach((c)=>c.selected=this.selectall)
  }

  checkboxchange(){
     if(this.isallcheckboxselected())
      this.selectall=true;
     if(this.isallcheckboxnotselected())
      this.selectall=false
  }

  isallcheckboxselected(){
    return this.checkboxes.every((c)=>c.selected)
  }

  isallcheckboxnotselected(){
    return this.checkboxes.every((c)=>!c.selected)
  }

  get getselectedcheckbox(){
    return this.checkboxes.filter((c)=>c.selected)
  }

  submit(){
    let select=this.getselectedcheckbox;
    console.log(select)
  }
  getCheckbox(event: any): void {
    // Access the checked property of the checkbox
    const isChecked = event.target.checked;
    
    // Log the value to the console
    console.log(isChecked);
  }
}
