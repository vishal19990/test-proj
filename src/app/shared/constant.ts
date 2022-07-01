
 import { environment } from "src/environments/environment"

 const apiUrl=environment.apiUrl;

export class LoginURLConstant {
 static  LOGIN=apiUrl+"/user/Login"
}




export class UserUrlConstant{
    static GETALLUSER=apiUrl+"/user/GetAllUser"
}

