import { isPlatformBrowser, Location } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit{
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
private readonly  _Location=inject(Location);
private readonly _MytranslateService=inject(MytranslateService);
private readonly _Renderer2=inject(Renderer2);
ngOnInit(): void {  
          if (isPlatformBrowser(this._PLATFORM_ID)) {
            if ( localStorage.getItem('mood')!==null) {            
            if ( localStorage.getItem('mood')=="darkmood") {
            this._Renderer2.addClass(document.documentElement,'darkmood')
              }
            else if ( localStorage.getItem('mood')=="light") {
            this._Renderer2.removeClass(document.documentElement,'darkmood')
              }
            }
        } 
        if (isPlatformBrowser(this._PLATFORM_ID)) {
          this._MytranslateService.useChoiceLang();
      } 
        }
back(){
  this._Location.back();
}
}