import './polyfills.server.mjs';
import{a as z}from"./chunk-SWKWCIW5.mjs";import{a as k,b as S,c as D,d as q,g as G,h as V,i as Y,j,k as $}from"./chunk-PQR4MYUP.mjs";import{a as H}from"./chunk-AX7H2LHU.mjs";import{a as R}from"./chunk-4HK72L6I.mjs";import"./chunk-ER6TBDS6.mjs";import"./chunk-J4BDXTMW.mjs";import{k as P,l as A}from"./chunk-Q36HUKNF.mjs";import"./chunk-YCKA3YXF.mjs";import{j as F,s as O}from"./chunk-YALRM6C7.mjs";import{c as M,d as N}from"./chunk-TNOMVZ3D.mjs";import{Ab as C,Jb as s,Kb as w,Lb as g,Ob as B,Qa as i,Qb as y,Tb as d,Ub as u,Y as f,aa as T,gb as _,ib as x,kb as E,mb as c,qb as a,rb as o,sb as I,va as b,zb as L}from"./chunk-LPZ7ZZOF.mjs";import"./chunk-VVCT4QZE.mjs";var J=(e,p)=>({"is-valid":e,"is-invalid":p});function K(e,p){e&1&&(a(0,"p",17),s(1),d(2,"translate"),o()),e&2&&(i(),g("",u(2,1,"formprag.email is required"),"."))}function Q(e,p){e&1&&(a(0,"p",17),s(1),d(2,"translate"),o()),e&2&&(i(),g("",u(2,1,"formprag.enter valid email"),"."))}function U(e,p){if(e&1&&(a(0,"div",8),_(1,K,3,3,"p",17)(2,Q,3,3),o()),e&2){let n,l=C();i(),c(1,(n=l.login.get("email"))!=null&&n.getError("required")?1:(n=l.login.get("email"))!=null&&n.getError("email")?2:-1)}}function W(e,p){e&1&&(a(0,"p",17),s(1),d(2,"translate"),o()),e&2&&(i(),g(" ",u(2,1,"formprag.password is required"),". "))}function X(e,p){e&1&&(a(0,"p",17),s(1),d(2,"translate"),o()),e&2&&(i(),g(" ",u(2,1,"formprag.enter valid password"),". "))}function Z(e,p){if(e&1&&(a(0,"div",8),_(1,W,3,3,"p",17)(2,X,3,3),o()),e&2){let n,l=C();i(),c(1,(n=l.login.get("password"))!=null&&n.getError("required")?1:(n=l.login.get("password"))!=null&&n.getError("pattern")?2:-1)}}function ee(e,p){e&1&&I(0,"span",12)}function te(e,p){if(e&1&&(a(0,"p",15),s(1),o()),e&2){let n=C();i(),g(" ",n.messgerror," ")}}function ie(e,p){if(e&1&&(a(0,"p",16),s(1),o()),e&2){let n=C();i(),g(" ",n.messsuccess," ")}}function ne(e,p){e&1&&(a(0,"p",15),s(1),d(2,"translate"),o()),e&2&&(i(),g(" ",u(2,1,"login.You are not a subscriber.the payment process has not been completed"),". "))}var _e=(()=>{class e{constructor(){this._AuthService=f(R),this._FormBuilder=f(j),this._PaymentsService=f(z),this._Router=f(P),this._PLATFORM_ID=f(b),this._ToastrService=f(H),this.messgerror="",this.messsuccess="",this.messnotsuccess="",this.isloading=!1,this.login=this._FormBuilder.group({email:[null,[S.required,S.email]],password:[null,[S.required,S.pattern(/^\w{6,}$/)]]})}loginfunction(){this.login.valid?(this.isloading=!0,this.unsub=this._AuthService.singin(this.login.value).subscribe({next:n=>{n.message=="success"&&(localStorage.setItem("token",n.token),this.unsubPay=this._PaymentsService.noCartItems().subscribe({next:l=>{if(this.isloading=!1,l.numOfCartItems==0){localStorage.setItem("noOfCartItems",l.numOfCartItems),localStorage.setItem("TheRealToken",n.token);let t=l.numOfCartItems;console.log("1=",t),this.messgerror="",this.messsuccess=n.message,this.messnotsuccess="",setTimeout(()=>{this._Router.navigate(["/mainpage"])},1e3)}else l.numOfCartItems!==0&&(console.log("2=",l.numOfCartItems),console.log("nooooo"),this.messgerror="",this.messnotsuccess="correct",localStorage.getItem("lang")!=null&&(localStorage.getItem("lang")=="ar"?this._ToastrService.error("\u0623\u0646\u062A \u063A\u064A\u0631 \u0645\u0634\u062A\u0631\u0643. \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062F\u0641\u0639 \u0644\u0645 \u062A\u0643\u062A\u0645\u0644 \u0628\u0639\u062F.","\u0623\u0643\u0627\u062F\u064A\u0645\u064A\u0629 \u062A\u062F\u0631\u064A\u0628 \u0627\u0644\u0637\u0647\u0627\u0647"):localStorage.getItem("lang")=="en"&&this._ToastrService.error("You are not a subscriber.the payment process has not been completed.","Chefs Training Academy")),localStorage.getItem("lang")==null&&this._ToastrService.error("You are not a subscriber.the payment process has not been completed.","Chefs Training Academy"))}}))},error:n=>{this.isloading=!1,this.messsuccess="",this.messgerror=n.error.message,this.messnotsuccess=""}})):this.login.markAllAsTouched()}LangText(){if(O(this._PLATFORM_ID)){if(localStorage.getItem("lang")!=null){if(localStorage.getItem("lang")=="en")return!0;if(localStorage.getItem("lang")=="ar")return!1}else if(localStorage.getItem("lang")==null)return!0}return!1}ngOnDestroy(){this.unsub?.unsubscribe(),this.unsubPay?.unsubscribe()}static{this.\u0275fac=function(l){return new(l||e)}}static{this.\u0275cmp=T({type:e,selectors:[["app-login"]],standalone:!0,features:[B],decls:30,vars:34,consts:[[1,"py-5","mt-3"],[1,"pt-5","mt-5"],[1,"container","w-50","shadow","rounded-5","shadow-lg","py-3"],[1,"sec-color","text-decoration-underline","text-center","text-decoration-underline"],[3,"ngSubmit","formGroup"],[1,"my-2"],["for","email",1,"prag"],["id","email","type","email","formControlName","email",1,"form-control",3,"ngClass"],[1,"alert","alert-danger"],["for","password",1,"prag"],["id","password","type","password","formControlName","password",1,"form-control",3,"ngClass"],["type","submit",1,"btn-main","d-block"],[1,"fas","fa-spin","fa-spinner"],[1,"text-center"],["routerLink","/forgetpassword",1,"text-primary","text-decoration-underline","cr"],[1,"text-center","alert","alert-danger","w-50","mx-auto"],[1,"text-center","alert","alert-success","w-50","mx-auto"],[1,"m-0"]],template:function(l,t){if(l&1&&(a(0,"div",0)(1,"section",1)(2,"div",2)(3,"h2",3),s(4),d(5,"translate"),o(),a(6,"form",4),L("ngSubmit",function(){return t.loginfunction()}),a(7,"div",5)(8,"label",6),s(9),d(10,"translate"),o(),I(11,"input",7),_(12,U,3,1,"div",8),o(),a(13,"div",5)(14,"label",9),s(15),d(16,"translate"),o(),I(17,"input",10),_(18,Z,3,1,"div",8),o(),a(19,"button",11),s(20),d(21,"translate"),_(22,ee,1,0,"span",12),o(),a(23,"p",13)(24,"a",14),s(25),d(26,"translate"),o()(),_(27,te,2,1,"p",15)(28,ie,2,1,"p",16)(29,ne,3,3,"p",15),o()()()()),l&2){let r,h,m,v;i(4),g(" ",u(5,18,"login.login Now")," "),i(2),x("formGroup",t.login),i(3),w(u(10,20,"enroll.email")),i(2),x("ngClass",y(28,J,!((r=t.login.get("email"))!=null&&r.errors)&&(((r=t.login.get("email"))==null?null:r.touched)||((r=t.login.get("email"))==null?null:r.dirty)),((r=t.login.get("email"))==null?null:r.errors)&&(((r=t.login.get("email"))==null?null:r.touched)||((r=t.login.get("email"))==null?null:r.dirty)))),i(),c(12,(h=t.login.get("email"))!=null&&h.errors&&((h=t.login.get("email"))!=null&&h.touched||(h=t.login.get("email"))!=null&&h.dirty)?12:-1),i(3),w(u(16,22,"enroll.password")),i(2),x("ngClass",y(31,J,!((m=t.login.get("password"))!=null&&m.errors)&&(((m=t.login.get("password"))==null?null:m.touched)||((m=t.login.get("password"))==null?null:m.dirty)),((m=t.login.get("password"))==null?null:m.errors)&&(((m=t.login.get("password"))==null?null:m.touched)||((m=t.login.get("password"))==null?null:m.dirty)))),i(),c(18,(v=t.login.get("password"))!=null&&v.errors&&((v=t.login.get("password"))!=null&&v.touched||(v=t.login.get("password"))!=null&&v.dirty)?18:-1),i(),E("ms-auto",t.LangText())("me-auto",!t.LangText()),i(),g(" ",u(21,24,"login.login")," "),i(2),c(22,t.isloading?22:-1),i(3),w(u(26,26,"login.forget password ?")),i(2),c(27,t.messgerror?27:-1),i(),c(28,t.messsuccess?28:-1),i(),c(29,t.messnotsuccess=="correct"?29:-1)}},dependencies:[$,G,k,D,q,V,Y,F,N,M,A],styles:[".login-form-content[_ngcontent-%COMP%]{width:75%}@media (min-width: 1200px){.login-form-content[_ngcontent-%COMP%]{width:60%}}"]})}}return e})();export{_e as LoginComponent};
