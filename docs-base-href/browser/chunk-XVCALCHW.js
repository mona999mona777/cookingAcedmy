import{p as M}from"./chunk-DKASN2F5.js";import{c as v,d as I}from"./chunk-JNWACT2K.js";import{Kb as t,Lb as l,Mb as s,Pb as u,Ra as e,Ub as o,Vb as r,aa as m,da as c,lb as f,rb as n,sb as i,tb as x,ya as g}from"./chunk-X7B4DWKB.js";var S=(()=>{class d{constructor(){this._PLATFORM_ID=m(g),this.allinfo=[]}showTimeDiffrence(){var h=new Date("1 march 2025 9:00:00 am").getTime(),p=new Date().getTime();let a=(h-p)/1e3;this.day=Math.floor(a/(24*60*60)),this.dayInSec=this.day*(24*60*60),this.hour=Math.floor((a-this.dayInSec)/(60*60)),this.hourInsec=this.hour*(60*60),this.mint=Math.floor((a-(this.dayInSec+this.hourInsec))/60),this.mintInSec=this.mint*60,this.sec=Math.floor(a-(this.dayInSec+this.hourInsec+this.mintInSec)),this.allinfo=[this.day,this.hour,this.mint,this.sec]}ngOnInit(){this.idinterval=setInterval(()=>{this.showTimeDiffrence()},1e3)}LangText(){if(M(this._PLATFORM_ID)){if(localStorage.getItem("lang")!=null){if(localStorage.getItem("lang")=="en")return!0;if(localStorage.getItem("lang")=="ar")return!1}else if(localStorage.getItem("lang")==null)return!0}return!1}ngOnDestroy(){clearInterval(this.idinterval)}static{this.\u0275fac=function(p){return new(p||d)}}static{this.\u0275cmp=c({type:d,selectors:[["app-home-main"]],standalone:!0,features:[u],decls:44,vars:29,consts:[[1,"home","d-flex","align-items-center","justify-content-center","text-center","pt-5"],[1,"container-fluid","home-content","bg-main-glassy","rounded-5","py-5","mt-5","border","border-danger-subtle"],[1,"box-h1","rounded-5"],[1,"mb-3","p-3"],[1,"danger","mb-4","text-decoration-underline","text-center"],[1,"row","g-2"],[1,"col-3"],[1,"border","rounded","py-2","bg-main-dark","sec-color","text-center"],["id","day",1,"py-5","my-5"],[1,"pe-2"],["id","hour",1,"py-5","my-5"],["id","mint",1,"py-5","my-5"],["id","sec",1,"py-5","my-5"],[1,"text-primary-emphasis","mt-4","wish-prag","prag"],[1,"fa-solid","fa-heart"]],template:function(p,a){p&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3)(4,"b"),t(5),o(6,"translate"),i()()(),n(7,"h2",4),t(8),o(9,"translate"),i(),n(10,"div",5)(11,"div",6)(12,"div",7)(13,"span",8),t(14),i(),n(15,"span",9),t(16),o(17,"translate"),i()()(),n(18,"div",6)(19,"div",7)(20,"span",10),t(21),i(),n(22,"span",9),t(23),o(24,"translate"),i()()(),n(25,"div",6)(26,"div",7)(27,"span",11),t(28),i(),n(29,"span",9),t(30),o(31,"translate"),i()()(),n(32,"div",6)(33,"div",7)(34,"span",12),t(35),i(),n(36,"span",9),t(37),o(38,"translate"),i()()()(),n(39,"p",13),t(40),o(41,"translate"),x(42,"i",14),t(43,".... "),i()()()),p&2&&(e(5),l(r(6,15,"home.Chefs Training Academy")),e(3),s(" ",r(9,17,"home.Exam Date After")," : "),e(6),l(a.day),e(2),s(" ",r(17,19,"home.Day"),""),e(5),l(a.hour),e(2),s(" ",r(24,21,"home.Hour"),""),e(5),l(a.mint),e(2),s(" ",r(31,23,"home.Mint"),""),e(5),l(a.sec),e(2),s(" ",r(38,25,"home.Sec"),""),e(2),f("text-end",a.LangText())("text-start",!a.LangText()),e(),s(" ",r(41,27,"home.Wish You Good Luck")," "))},dependencies:[I,v],styles:[".home-content[_ngcontent-%COMP%]{width:75%}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{font-weight:500;font-size:25px}h3[_ngcontent-%COMP%]{font-weight:500;font-size:20px}.wish-prag[_ngcontent-%COMP%]{font-weight:500;font-size:15px}.col-3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:15px}@media (min-width: 768px){.home-content[_ngcontent-%COMP%]{width:70%}h1[_ngcontent-%COMP%]{font-weight:700;font-size:30px}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{font-weight:500;font-size:25px}.wish-prag[_ngcontent-%COMP%]{font-weight:500;font-size:20px}.col-3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px}}@media (min-width: 995px){.home-content[_ngcontent-%COMP%]{width:50%}h1[_ngcontent-%COMP%]{font-weight:700;font-size:35px}h2[_ngcontent-%COMP%]{font-weight:500;font-size:40px}h3[_ngcontent-%COMP%]{font-weight:500;font-size:25px}.wish-prag[_ngcontent-%COMP%]{font-weight:500;font-size:20px}.col-3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px}}"]})}}return d})();export{S as HomeMainComponent};
