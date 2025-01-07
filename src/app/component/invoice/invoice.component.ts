import { Component, inject, PLATFORM_ID } from '@angular/core';
import { PaymentsService } from '../../core/services/payments.service';
import { Subscription } from 'rxjs';
import { Iorder } from '../../core/interfaces/iorder';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [DatePipe,TranslateModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
private readonly _PaymentsService=inject(PaymentsService);
private readonly _Router=inject(Router);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
unallorder!:Subscription
theOrder!:Iorder;
ngOnInit(): void {
 this.unallorder=   this._PaymentsService.allorderapi().subscribe({
      next:(res)=>{
       this.theOrder=res[0];
      }
    });
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
    this.unallorder?.unsubscribe();
}
}
