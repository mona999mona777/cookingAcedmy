import { Component, inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenService } from '../../core/services/authen.service';
import { PaymentsService } from '../../core/services/payments.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,TranslateModule],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent  implements  OnDestroy{
private readonly _AuthenService=inject(AuthenService);
private readonly _PaymentsService=inject(PaymentsService);
private readonly _FormBuilder=inject(FormBuilder);
private readonly _Router=inject(Router);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
messgerror:string=''
messsuccess:string=''
isloading:boolean=false
unsub!:Subscription
unsubadd!:Subscription
register:FormGroup=this._FormBuilder.group({
    name:[null,[Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
    email:[null,[Validators.required, Validators.email]],
    password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],
    rePassword:[null],
    phone:[null,[Validators.required,Validators.pattern(/^01[125][0-9]{8}$/) ]],
},{validators:this.repassword});
repassword(g:AbstractControl){
if(g.get('password')?.value===g.get('rePassword')?.value){
return null
}
else{
  return {mismatch:true}
}
}
registerfunction(){
  if(this.register.valid){
    this.isloading=true
      this.unsub=this._AuthenService.singup(this.register.value).subscribe({
                next:(res)=>{
                  this.messsuccess=res.message; 
                  this.messgerror=""
               if(res.message == "success"){
                localStorage.setItem("token",res.token);
                // payment methode
              this.unsubadd=this._PaymentsService.addTOCart().subscribe({
                next:(resAdd)=>{
              this.isloading=false;
              localStorage.setItem("cartId",resAdd.cartId);
              if(resAdd.status == "success"){
                setTimeout(() => {
                  this._Router.navigate(['/examPleace']);
                  }, 1000);
              } 
                }
              })
               }
                },
                error:(err:HttpErrorResponse)=>{
                  this.isloading=false
                this.messgerror=err.error.message;
                this.messsuccess="";
                }
          });
  }
  else{
   this.register.setErrors({mismatch:true})
    this.register.markAllAsTouched();
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
    this.unsub?.unsubscribe();
    this.unsubadd?.unsubscribe();
}
  }