import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingScreenInterceptor: HttpInterceptorFn = (req, next) => {
  //  requist api 
  const _NgxSpinnerService=inject(NgxSpinnerService);
   _NgxSpinnerService.show();

   //response with data 
  return next(req).pipe( finalize(()=>{
    _NgxSpinnerService.hide();
  }))

};
