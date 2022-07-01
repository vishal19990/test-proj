import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService ,private router:Router) { }


loginform = new FormGroup({
username:new FormControl('',[Validators.maxLength(5),Validators.required]),
password:new FormControl('',Validators.required)

})
Data={};
  ngOnInit(): void {
    this.loginService.getalluser().subscribe(data=>{
      debugger
    })
  }
  ShowMessage(event:any){
  
  }
  



  onSubmit()
  {
    debugger


    var loginModel={
      userEmail:this.loginform.get('username')?.value,
      Password:this.loginform.get('password')?.value
    }
    this.loginService.login(loginModel).subscribe((data:any)=>{
this.Data=data.userId;
debugger
this.router.navigateByUrl('/error')
    })
    
  }

  get m (){
    return this.loginform.controls;
  }
}
