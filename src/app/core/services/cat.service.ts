import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private readonly _HttpClient=inject(HttpClient);


  allcategories():Observable<any>{
    return this._HttpClient.get(`${environment.secBaseUrl}categories.php`)
   }


   onecategories(category:string|null):Observable<any>{
    return this._HttpClient.get(`${environment.secBaseUrl}filter.php?c=${category}`)
   }


}
