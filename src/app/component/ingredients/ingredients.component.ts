import { Component, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { IngratService } from '../../core/services/ingrat.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import {  Ingrats } from '../../core/interfaces/ingrat';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent implements OnInit , OnDestroy {
  private readonly _IngratService=inject(IngratService);
    private readonly _PLATFORM_ID=inject(PLATFORM_ID);
  allingradiants!:Ingrats[];
 unsub!:Subscription;
ngOnInit(): void {
  this.unsub=this._IngratService.allingradiants().subscribe({
    next:(res)=>{
   this.allingradiants=res.meals;
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
  this.unsub?.unsubscribe();
}
}
