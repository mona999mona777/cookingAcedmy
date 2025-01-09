import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../../core/services/search.service';
import { ISearch } from '../../core/interfaces/search';
import { RouterLink } from '@angular/router';
import { AuthenService } from '../../core/services/authen.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';
import { isPlatformBrowser } from '@angular/common';
declare var $:any;
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink , TranslateModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent   implements  OnInit, AfterViewInit, OnDestroy{
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
readonly _AuthenService=inject(AuthenService);
private readonly _SearchService=inject(SearchService);
private readonly _Renderer2=inject(Renderer2);
allSearchData:ISearch[]=[];
unsub!:Subscription;
unsubintsearch!:Subscription;
inputValue!:string
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
// initial search 
this.unsubintsearch=this._SearchService.SsarchByName("L").subscribe({
  next:(res)=>{
this.allSearchData=res.meals;
  }
});
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
  document.documentElement.classList.toggle("darkmood") 
}
else if (theTarget.checked==false) {
  document.documentElement.classList.toggle("darkmood") 
  localStorage.setItem("mood",'light')
}
} 
search(e:Event){
      const input =e.target as HTMLInputElement;
      this.inputValue=input.value;
      this.unsub=this._SearchService.SsarchByName(this.inputValue).subscribe({
        next:(res)=>{
      this.allSearchData=res.meals;
        }
    });
}
closeIteamModal(){
if (document.getElementById("navbarSupportedContent")?.classList.contains("show")) {
  document.getElementById("navbarSupportedContent")?.classList.remove("show")
}}
hidemodal(){
$('#sarchInner').val('');
$('#exampleModal').modal("hide");
}
ngOnDestroy(): void {
  this.unsub?.unsubscribe();
  this.unsubintsearch?.unsubscribe();
}
}
  