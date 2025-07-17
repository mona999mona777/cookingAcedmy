import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy{
  private readonly _PLATFORM_ID=inject(PLATFORM_ID)
allinfo:number[]=[];
future!:number;
now!:number;
timeInSec!:number;
day!:number;
hour!:number;
mint!:number;
sec!:number;
dayInSec!:number;
hourInsec!:number;
mintInSec!:number;
idinterval:any;
showTimeDiffrence() {
var future = new Date("1 october 2025 9:00:00 am").getTime();
var now = new Date().getTime();
let timeInSec = ( future- now) / 1000;

this.day = Math.floor(timeInSec / (24 * 60 * 60));
 this.dayInSec = this.day * (24 * 60 * 60);

 this.hour = Math.floor((timeInSec - this.dayInSec) / (60 * 60));
this.hourInsec = this.hour * (60 * 60);

 this.mint = Math.floor((timeInSec - (this.dayInSec + this.hourInsec)) / 60);
 this.mintInSec = this.mint * 60;

this.sec = Math.floor(timeInSec - (this.dayInSec +this.hourInsec + this.mintInSec));

this.allinfo=[this.day ,this.hour,this.mint ,this.sec]; 
}
ngOnInit(): void {
this.idinterval=setInterval(() => {
this.showTimeDiffrence();
 }, 1000);
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
clearInterval(this.idinterval);
}
}