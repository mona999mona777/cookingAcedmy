import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dates',
  standalone: true,
  imports: [TranslateModule,RouterLink],
  templateUrl: './dates.component.html',
  styleUrl: './dates.component.css'
})
export class DatesComponent {
  private readonly _PLATFORM_ID=inject(PLATFORM_ID)
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
}
