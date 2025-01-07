import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  private readonly _HttpClient=inject(HttpClient);
  private readonly _Router=inject(Router);
// 1.singup
singup(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signup`,data)
   }
// 2.singin
singin(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signin`,data)
}
// 3.logout function
logout():void{
  localStorage.removeItem("cartId");
  localStorage.removeItem("token");
  localStorage.removeItem("TheRealToken");
  localStorage.removeItem("noOfCartItems");
  // this.userdata=null;
  //call api remove tooken (ان وجد api)
 this._Router.navigate(['/home'])
}
// ///////////////////////////////////////////////
// 4.forgetpassword api 
forgetpassword(data:object):Observable<any>{
return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords
`,data)
}
// 5.verifyCode (send on email )api 
verifyCode(data:object):Observable<any>{
return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode`,data)
}
// 6.creat new password api 
resetpassword(data:object):Observable<any>{
return this._HttpClient.put(`${environment.baseUrl}/api/v1/auth/resetPassword`,data)
}

}
