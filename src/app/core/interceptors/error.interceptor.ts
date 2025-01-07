import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  let  _ToastrService=inject(ToastrService);
let _PLATFORM_ID=inject(PLATFORM_ID);
return next(req).pipe(catchError((err)=>{
    console.log('interceptors',err.error);
    if (isPlatformBrowser(_PLATFORM_ID)) {
      if(localStorage.getItem('lang')!=null){
    if(localStorage.getItem("lang")=="ar"){
      _ToastrService.error(err.error.message , "أكاديمية تدريب الطهاه")
    }
    else if(localStorage.getItem("lang")=="en"){
      _ToastrService.error(err.error.message , 'Chefs Training Academy')
    }
  }}
  if (isPlatformBrowser(_PLATFORM_ID)) {
    if(localStorage.getItem('lang')==null){
      _ToastrService.error(err.error.message , 'Chefs Training Academy')
    }}
return throwError(()=>err)
}))
};