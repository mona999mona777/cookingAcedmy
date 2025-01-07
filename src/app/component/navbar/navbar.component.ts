import { Component, ElementRef, inject, ViewChild,PLATFORM_ID, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink , RouterLinkActive,TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, AfterViewInit{
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
private readonly _Renderer2=inject(Renderer2);
// translation
private readonly _MytranslateService=inject(MytranslateService);
readonly _TranslateService=inject(TranslateService);
changeLang(lang:string):void{
this._MytranslateService.changeLang(lang);
}
// mood
@ViewChild('mood') moodinit!:ElementRef
ngOnInit(): void {  
          if (isPlatformBrowser(this._PLATFORM_ID)) {
            if ( localStorage.getItem('mood')=="darkmood") {
              this._Renderer2.addClass(document.documentElement,'darkmood')
            }
            else if ( localStorage.getItem('mood')=="light") {
              this._Renderer2.removeClass(document.documentElement,'darkmood')
            }
        } 
}
ngAfterViewInit(): void {
            if (isPlatformBrowser(this._PLATFORM_ID)) {
              if ( localStorage.getItem('mood')=="darkmood") {
                this.moodinit.nativeElement.checked=true
                }
              else if ( localStorage.getItem('mood')=="light") {
                this.moodinit.nativeElement.checked=false
                }
        }
}
changeMood(e:Event):void{
// this._MoodService;
const theTarget =e.target as HTMLInputElement;
if (theTarget.checked==true) {
  localStorage.setItem("mood",'darkmood')
  this._Renderer2.addClass(document.documentElement,'darkmood')              
}
else if (theTarget.checked==false) {
  localStorage.setItem("mood",'light')
  this._Renderer2.removeClass(document.documentElement,'darkmood')}
}
@ViewChild ("navbarSupportedContent") navbardiv!:ElementRef;
closeIteamModal(){
  if (this.navbardiv.nativeElement.classList.contains("show")) {
    this._Renderer2.removeClass(this.navbardiv.nativeElement,'show')
    // document.getElementById("navbarSupportedContent")?.classList.remove("show")
  }}
}
