import './polyfills.server.mjs';
import{a as $}from"./chunk-SWKWCIW5.mjs";import{a as G,b as S,c as M,d as P,e as A,f as T,g as V,h as j,i as O,k as R}from"./chunk-PQR4MYUP.mjs";import"./chunk-ER6TBDS6.mjs";import"./chunk-YCKA3YXF.mjs";import{j as B}from"./chunk-YALRM6C7.mjs";import{c as k,d as D}from"./chunk-TNOMVZ3D.mjs";import{Ab as h,Jb as m,Kb as E,Lb as f,Ob as q,Qa as n,Qb as b,Tb as c,Ub as _,Y as I,aa as N,gb as g,ib as x,mb as s,qb as r,rb as o,sb as y,zb as Y}from"./chunk-LPZ7ZZOF.mjs";import"./chunk-VVCT4QZE.mjs";var w=(e,p)=>({"is-valid":e,"is-invalid":p});function z(e,p){e&1&&(r(0,"p",17),m(1),c(2,"translate"),o()),e&2&&(n(),f("",_(2,1,"formprag.name is required"),"."))}function H(e,p){if(e&1&&(r(0,"div",8),g(1,z,3,3,"p",17),o()),e&2){let i,u=h();n(),s(1,(i=u.orderForm.get("details"))!=null&&i.getError("required")?1:-1)}}function J(e,p){e&1&&(r(0,"p",17),m(1),c(2,"translate"),o()),e&2&&(n(),f("",_(2,1,"formprag.phone is required"),"."))}function K(e,p){e&1&&(r(0,"p",17),m(1),c(2,"translate"),o()),e&2&&(n(),f("",_(2,1,"formprag.enter valid phone"),"."))}function L(e,p){if(e&1&&(r(0,"div",8),g(1,J,3,3,"p",17)(2,K,3,3),o()),e&2){let i,u=h();n(),s(1,(i=u.orderForm.get("phone"))!=null&&i.getError("required")?1:(i=u.orderForm.get("phone"))!=null&&i.getError("pattern")?2:-1)}}function Q(e,p){e&1&&(r(0,"p",17),m(1),c(2,"translate"),o()),e&2&&(n(),f("",_(2,1,"formprag.city is required"),"."))}function U(e,p){if(e&1&&(r(0,"div",8),g(1,Q,3,3,"p",17),o()),e&2){let i,u=h();n(),s(1,(i=u.orderForm.get("city"))!=null&&i.getError("required")?1:-1)}}function W(e,p){e&1&&y(0,"span",14)}function X(e,p){if(e&1&&(r(0,"p",15),m(1),o()),e&2){let i=h();n(),f(" ",i.messgsuc," ")}}function Z(e,p){if(e&1&&(r(0,"p",16),m(1),o()),e&2){let i=h();n(),f(" ",i.messgerr," ")}}var me=(()=>{class e{constructor(){this._PaymentsService=I($),this.isloading=!1,this.orderForm=new A({details:new T(null,[S.required]),phone:new T(null,[S.required,S.pattern(/^01[125][0-9]{8}$/)]),city:new T(null,[S.required])})}orderFunc(){this.orderForm.valid?(this.isloading=!0,this._PaymentsService.orderapi(this.orderForm.value).subscribe({next:i=>{this.isloading=!1,this.messgsuc=i.status,i.status=="success"&&window.open(i.session.url,"_self")}})):this.orderForm.markAllAsTouched()}ngOnDestroy(){this.unsub?.unsubscribe()}static{this.\u0275fac=function(u){return new(u||e)}}static{this.\u0275cmp=N({type:e,selectors:[["app-yourexamdate"]],standalone:!0,features:[q],decls:31,vars:34,consts:[[1,"pt-5","my-5"],[1,"mt-5","pt-5"],[1,"w-50","mx-auto","shadow","p-4","rounded-4","shadow-lg"],[1,"h2","sec-color","text-decoration-underline"],[3,"ngSubmit","formGroup"],[1,"my-2"],["for","details",1,"prag"],["id","details","type","text","formControlName","details",1,"form-control",3,"ngClass"],[1,"alert","alert-danger"],["for","phone",1,"prag"],["id","phone","type","tel","formControlName","phone",1,"form-control",3,"ngClass"],["for","city",1,"prag"],["id","city","type","text","formControlName","city",1,"form-control",3,"ngClass"],["type","submit",1,"btn-main","ms-auto","d-block",3,"click"],[1,"fas","fa-spin","fa-spinner"],[1,"text-center","alert","alert-success","w-50","mx-auto"],[1,"text-center","alert","alert-danger","w-50","mx-auto"],[1,"m-0"]],template:function(u,t){if(u&1&&(r(0,"div",0)(1,"section",1)(2,"div",2)(3,"h1",3),m(4),c(5,"translate"),o(),r(6,"form",4),Y("ngSubmit",function(){return t.orderFunc()}),r(7,"div",5)(8,"label",6),m(9),c(10,"translate"),o(),y(11,"input",7),g(12,H,2,1,"div",8),o(),r(13,"div",5)(14,"label",9),m(15),c(16,"translate"),o(),y(17,"input",10),g(18,L,3,1,"div",8),o(),r(19,"div",5)(20,"label",11),m(21),c(22,"translate"),o(),y(23,"input",12),g(24,U,2,1,"div",8),o(),r(25,"button",13),Y("click",function(){return t.orderFunc()}),m(26),c(27,"translate"),g(28,W,1,0,"span",14),o()(),g(29,X,2,1,"p",15)(30,Z,2,1,"p",16),o()()()),u&2){let l,C,a,F,d,v;n(4),f(" ",_(5,15,"exam.Select City Exam"),": "),n(2),x("formGroup",t.orderForm),n(3),E(_(10,17,"enroll.Full Name")),n(2),x("ngClass",b(25,w,!((l=t.orderForm.get("details"))!=null&&l.errors)&&(((l=t.orderForm.get("details"))==null?null:l.touched)||((l=t.orderForm.get("details"))==null?null:l.dirty)),((l=t.orderForm.get("details"))==null?null:l.errors)&&(((l=t.orderForm.get("details"))==null?null:l.touched)||((l=t.orderForm.get("details"))==null?null:l.dirty)))),n(),s(12,(C=t.orderForm.get("details"))!=null&&C.errors&&((C=t.orderForm.get("details"))!=null&&C.touched||(C=t.orderForm.get("details"))!=null&&C.dirty)?12:-1),n(3),E(_(16,19,"enroll.phone")),n(2),x("ngClass",b(28,w,!((a=t.orderForm.get("phone"))!=null&&a.errors)&&(((a=t.orderForm.get("phone"))==null?null:a.touched)||((a=t.orderForm.get("phone"))==null?null:a.dirty)),((a=t.orderForm.get("phone"))==null?null:a.errors)&&(((a=t.orderForm.get("phone"))==null?null:a.touched)||((a=t.orderForm.get("phone"))==null?null:a.dirty)))),n(),s(18,(F=t.orderForm.get("phone"))!=null&&F.errors&&((F=t.orderForm.get("phone"))!=null&&F.touched||(F=t.orderForm.get("phone"))!=null&&F.dirty)?18:-1),n(3),E(_(22,21,"exam.city")),n(2),x("ngClass",b(31,w,!((d=t.orderForm.get("city"))!=null&&d.errors)&&(((d=t.orderForm.get("city"))==null?null:d.touched)||((d=t.orderForm.get("city"))==null?null:d.dirty)),((d=t.orderForm.get("city"))==null?null:d.errors)&&(((d=t.orderForm.get("city"))==null?null:d.touched)||((d=t.orderForm.get("city"))==null?null:d.dirty)))),n(),s(24,(v=t.orderForm.get("city"))!=null&&v.errors&&((v=t.orderForm.get("city"))!=null&&v.touched||(v=t.orderForm.get("city"))!=null&&v.dirty)?24:-1),n(2),f(" ",_(27,23,"exam.confirm")," "),n(2),s(28,t.isloading?28:-1),n(),s(29,t.messgsuc?29:-1),n(),s(30,t.messgerr?30:-1)}},dependencies:[R,V,G,M,P,j,O,B,D,k]})}}return e})();export{me as YourexamdateComponent};
