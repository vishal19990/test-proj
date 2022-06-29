import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }


loginform = new FormGroup({
username:new FormControl('',[Validators.maxLength(5),Validators.required]),
password:new FormControl('',Validators.required)

})
Data="";
  ngOnInit(): void {
    
  }
  ShowMessage(event:any){
  
  }
  



  onSubmit()
  {
    debugger
    this.Data=this.loginform.get('username')?.value;
    this.Data=this.loginform.get('password')?.value;
    
  }

  get m (){
    return this.loginform.controls;
  }
}
