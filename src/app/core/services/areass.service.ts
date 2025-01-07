import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AreassService {

  private readonly _HttpClient=inject(HttpClient);


  allareas():Observable<any>{
    return this._HttpClient.get(`${environment.secBaseUrl}list.php?a=list`)
   }


   onearea(area:string|null):Observable<any>{
    return this._HttpClient.get(`${environment.secBaseUrl}filter.php?a=${area}`)
   }
}
