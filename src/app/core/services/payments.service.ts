import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private readonly _HttpClient=inject(HttpClient);
  userdata:any =null;


  addTOCart():Observable<any>{
    return  this._HttpClient.post(`${environment.baseUrl}/api/v1/cart`, {
            "productId": "6428def9dc1175abc65ca061"
      },
      // header in interceptors and by config file 
      )
    }

    orderapi(data:object):Observable<any>{
      return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/checkout-session/${localStorage.getItem('cartId')}?url=${environment.urlServer}`,
        {
          "shippingAddress":data
        },
     
    )
    }///api/v1/cart
   
    noCartItems():Observable<any>{
      return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart`)
    }


// 7.decode function: decodetoken and save user data 
userId:string='';
decodetoken():void{
  if(localStorage.getItem("TheRealToken")!==null)
    // install (npm i jwt-decode) in terminal it took token as string and decoded it
  //  (! )=>jwtdecode took the token as string only  to tell it tooken will not be null put (!) or drfine as any (let m:any =localStorage.getItem("token"))
this.userdata=   jwtDecode(localStorage.getItem("TheRealToken") !)
 this.userId=this.userdata.id;
}
// 8.api of allorders
allorderapi():Observable<any>{
  this.decodetoken();
return this._HttpClient.get(`${environment.baseUrl}/api/v1/orders/user/${this.userId}`)
}
}
