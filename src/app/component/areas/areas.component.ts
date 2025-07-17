import { Component, inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import { AreassService } from '../../core/services/areass.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import {  IAreas } from '../../core/interfaces/area';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent implements OnInit , OnDestroy {
  private readonly _AreassService=inject(AreassService);
      private readonly _PLATFORM_ID=inject(PLATFORM_ID);
  allareas!:IAreas[];
 unsub!:Subscription;
ngOnInit(): void {
  this.unsub=this._AreassService.allareas().subscribe({
    next:(res)=>{
   this.allareas=res.meals;
    },
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
  this.unsub?.unsubscribe();
} 
}  

