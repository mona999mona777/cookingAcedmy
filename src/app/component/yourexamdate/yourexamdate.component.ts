import { Component, inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PaymentsService } from '../../core/services/payments.service';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-yourexamdate',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,TranslateModule],
  templateUrl: './yourexamdate.component.html',
  styleUrl: './yourexamdate.component.css'
})
export class YourexamdateComponent implements  OnDestroy {
  private readonly _PaymentsService=inject(PaymentsService);
  
  isloading:boolean=false;
  messgsuc!:string;
  messgerr!:string;
  unsub!:Subscription;
    orderForm:FormGroup=new FormGroup({
      details:new FormControl(null,[Validators.required]),
      phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[125][0-9]{8}$/)]),
      city:new FormControl(null,[Validators.required]),
    })
 
    orderFunc(){
  if(this.orderForm.valid){
    this.isloading=true;
    this._PaymentsService.orderapi(this.orderForm.value).subscribe({
      next:(res)=>{
    this.isloading=false;
    this.messgsuc=res.status;
    if(res.status=='success'){
   window.open(res.session.url,"_self")
    }
      },
    })
      }
      else{
        this.orderForm.markAllAsTouched();
      }
    }
  
  
    ngOnDestroy(): void {
        this.unsub?.unsubscribe()
    }
}
