import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginURLConstant, UserUrlConstant } from "../shared/constant";

@Injectable({
    providedIn:"root"
})
export class LoginService {
    constructor(private http:HttpClient){

    }
    login(loginModel:any)
    {
        return this.http.post(LoginURLConstant.LOGIN,loginModel)
    }
    getalluser()
    {
        debugger

        return this.http.get(UserUrlConstant.GETALLUSER)
    }
}