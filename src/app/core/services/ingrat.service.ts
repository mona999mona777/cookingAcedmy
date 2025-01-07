import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class IngratService {

  private readonly _HttpClient=inject(HttpClient);


  allingradiants():Observable<any>{
    return this._HttpClient.get(`${environment.secBaseUrl}list.php?i=list`)
   }


   oneingradiant(ingredient:string|null):Observable<any>{
    return this._HttpClient.get(`${environment.secBaseUrl}filter.php?i=${ingredient}`)
   }
}
