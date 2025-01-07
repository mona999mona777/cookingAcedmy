import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenService } from '../../core/services/authen.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,TranslateModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {
private readonly _AuthService=inject(AuthenService);
private readonly _Router=inject(Router);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
isloading:boolean=false;
successMessage:string='';
errorMessage:string='';
setp:number=1;
unsubforgetpass!:Subscription;
unsubverifyCode!:Subscription;
unsubresetpassword!:Subscription;
// 1.forget password
verifyEmailform:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email])
})
verifyEmailFunc(){
  this.isloading=true;
  let  emailvalue= this.verifyEmailform.value.email;
this.resetpasswordform.get("email")?.patchValue(emailvalue);
this.unsubforgetpass=this._AuthService.forgetpassword(this.verifyEmailform.value).subscribe({
  next:(res)=>{
  this.isloading=false;
  this.successMessage=res.statusMsg;
  this.errorMessage="";
    if (res.statusMsg=="success") {
      setTimeout(() => {
        this.setp=2;
        this.successMessage="";
  this.errorMessage="";
      }, 1000);
    }
  },
  error:(err:HttpErrorResponse)=>{
    this.isloading=false;
    this.successMessage="";
    this.errorMessage=err.error.message;

}
})
}
// 2.verifyCode send on email
verifyCodeform:FormGroup=new FormGroup({
  resetCode:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{6,}$/)])
})
verifyCodeFunc(){
  this.isloading=true;
 this.unsubverifyCode=this._AuthService.verifyCode(this.verifyCodeform.value).subscribe({
    next:(res)=>{
  this.isloading=false;
  this.successMessage=res.status;
  this.errorMessage="";
  if (res.status=="Success") {
        setTimeout(() => {
          this.setp=3;
          this.successMessage="";
          this.errorMessage="";
        }, 1000);
      }
    },
    error:(err:HttpErrorResponse)=>{
      this.isloading=false;
      this.successMessage="";
      this.errorMessage=err.error.message;
}
  })
}
// 3.creat new password
resetpasswordform:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^[\w]{6,}$/)])
})
resetpasswordFunc(){
  this.isloading=true;
this.unsubresetpassword=this._AuthService.resetpassword(this.resetpasswordform.value).subscribe({
    next:(res)=>{
  this.isloading=false;
  this.successMessage="Success";
  this.errorMessage="";
  setTimeout(() => {
    localStorage.setItem("token",res.token);
    this._Router.navigate(["/allorders"]);
  }, 1000);
    },
    error:(err:HttpErrorResponse)=>{
      this.isloading=false;
      this.successMessage="";
      this.errorMessage=err.error.message;

}  
  })
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
 this.unsubforgetpass?.unsubscribe();
  this.unsubverifyCode?.unsubscribe();
  this.unsubresetpassword?.unsubscribe();
}
}

