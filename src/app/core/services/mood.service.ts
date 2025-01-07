import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, RendererFactory2 } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MoodService {
  private readonly _PLATFORM_ID=inject(PLATFORM_ID);
  // private readonly _Renderer2=inject(RendererFactory2).createRenderer(null,null);//i creat render2 for mu self 


  
  //  1. constructorعشان كدا بكتب في ال light====> (defultvalue ) عاوزه اول ما يدخل يبقي 
// ده يشتغلوا علل طول classمن الinstanceعشان اول لما اخد 
    constructor() {
      if (isPlatformBrowser(this._PLATFORM_ID)) {
          this.useChoiceMood();
      }
     }



  //2. useChoiceMood befor nont clicked now===> متخزنة ودخلت تاني دلوفتي اهو localstorage يعني انت استخدمت الموقع قبل كدا وسبت المود في 
             // (defultمتخزنه من قبل كدا؟(لو في هيستخدم ===> مفيش اهوا عنده)  localstorage هيدخل يشوف في حاجه في ال
     useChoiceMood():void
     {
        if ( localStorage.getItem('mood')) 
              {
               document.documentElement.classList.toggle("darkmood")             
            } 
     }



    //  3. you clicked
     changeMood():void{
      if (isPlatformBrowser(this._PLATFORM_ID)) {
        localStorage.setItem('mood',"darkmood");
       this.useChoiceMood();
      }
      }
}
