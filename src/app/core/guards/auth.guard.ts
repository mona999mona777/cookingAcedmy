import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router); 

  // register done (enroll)
              if(typeof localStorage!=='undefined'){
                if( localStorage.getItem("TheRealToken") !== null  &&   localStorage.getItem("noOfCartItems") == '0'){
                  return true;
                }
 // not register (enroll)
              else{
                    // navigate to home
                  _Router.navigate(['/home'])
                  return false;

                }

            }


            else{
            return false;
            }
};

