import { Component, inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenService } from '../../core/services/authen.service';
import { TranslateModule } from '@ngx-translate/core';
import { PaymentsService } from '../../core/services/payments.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,TranslateModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnDestroy{
private readonly _AuthService=inject(AuthenService);
private readonly _FormBuilder=inject(FormBuilder);
private readonly _PaymentsService=inject(PaymentsService);
private readonly _Router=inject(Router);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
private readonly _ToastrService=inject(ToastrService);
messgerror:string='';
messsuccess:string='';
messnotsuccess:string='';
isloading:boolean=false;
unsub!:Subscription;
unsubPay!:Subscription;
login:FormGroup=this._FormBuilder.group({
email:[null,[Validators.required, Validators.email]],
password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]]
})
loginfunction(){
if(this.login.valid){
this.isloading=true
this.unsub= this._AuthService.singin(this.login.value).subscribe({
                            next:(res)=>{
                                     // 3.navigate to home
                                       if(res.message == "success"){
                                        localStorage.setItem("token",res.token);
///////////////////////////////////////////////////////////////////////////////////////
this.unsubPay=this._PaymentsService.noCartItems().subscribe({
  next:(result)=>{
    this.isloading=false;
    if (result.numOfCartItems==0) {
      localStorage.setItem("noOfCartItems",result.numOfCartItems);
      localStorage.setItem("TheRealToken",res.token);
       let noOfCartIteams=result.numOfCartItems;
                      this.messgerror="";
                      this.messsuccess=res.message; 
                      this.messnotsuccess=""; 
                      setTimeout(() => {
                        this._Router.navigate(['/mainpage']);
                        }, 1000);
    }
    else if (result.numOfCartItems!==0) {
      this.messgerror="";
    this.messnotsuccess="correct"; 
      if(localStorage.getItem('lang')!=null){
        if(localStorage.getItem("lang")=="ar"){
          this._ToastrService.error("أنت غير مشترك. عملية الدفع لم تكتمل بعد." ,"أكاديمية تدريب الطهاه")
        }
        else if(localStorage.getItem("lang")=="en"){
          this._ToastrService.error("You are not a subscriber.the payment process has not been completed." , 'Chefs Training Academy')
        }
      }
        if(localStorage.getItem('lang')==null){
          this._ToastrService.error("You are not a subscriber.the payment process has not been completed." , 'Chefs Training Academy')
        }
    }
  },
})
//  //////////////////////////////////////////////////////////////////////                                  
                                        }           
                        },
                            error:(err:HttpErrorResponse)=>{
                                        this.isloading=false;
                                        this.messsuccess="";
                                        this.messgerror=err.error.message;
                                        this.messnotsuccess=""; 
                                        // this.messgerror="Incorrect email or password";
                            }
});
}
else{
        this.login.markAllAsTouched();
}
}
LangText(){
if (isPlatformBrowser(this._PLATFORM_ID)) {
if (localStorage.getItem("lang")!=null) {
     if (localStorage.getItem("lang")=='en') {
      return true;
     }
     else if (localStorage.getItem("lang")=='ar') {
      return false;
     }
} 
else if (localStorage.getItem("lang")==null) {
             return true;            
    } 
}
      return false
}
ngOnDestroy(): void {
  this.unsub?.unsubscribe()
  this.unsubPay?.unsubscribe()
  }
}
