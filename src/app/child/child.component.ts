import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() msg="sdds";
cmessgae=""
data=""
@Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  OnClick(){
    debugger
    this.newItemEvent.emit(this.data)
   
  }
  onchange(e:any)
  {
    debugger
this.data=e.currentTarget.value;
  }
}
