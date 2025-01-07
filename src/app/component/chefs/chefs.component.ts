import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-chefs',
  standalone: true,
  imports: [CarouselModule, TranslateModule],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.css'
})
export class ChefsComponent {
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
chefs: OwlOptions = {
    loop: true,
    rtl:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      740: {
        items: 3
      },
    },
    nav: false
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
}
