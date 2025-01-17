import { TranslateModule } from '@ngx-translate/core';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule,ReactiveFormsModule,NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private readonly _FormBuilder=inject(FormBuilder);
  isloading:boolean=false;

sentdata:FormGroup=this._FormBuilder.group({
email:[null,[Validators.required, Validators.email]],
})  
okfunc(){
this.isloading=true;
if(this.sentdata.valid){
setTimeout(() => {
  this.isloading=false;
}, 1000);
this.sentdata.reset();
} 
else{
this.sentdata.markAllAsTouched();
setTimeout(() => {
  this.isloading=false;
}, 1000);  console.log("error=",this.sentdata.value)
}
}
}
