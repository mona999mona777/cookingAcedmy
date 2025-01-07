import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const blankGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router); 
  // register done (enroll)
              if(typeof localStorage!=='undefined'){
                if( localStorage.getItem("TheRealToken") == null){
                  return true;
                }
 // not register (enroll)
              else{
                    // navigate to home
                  _Router.navigate(['/mainpage'])
                  return false;

                }

            }


            else{
            return false;
            }
};