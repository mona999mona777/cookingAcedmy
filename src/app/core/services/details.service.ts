import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private readonly _HttpClient=inject(HttpClient);


  mealDetail(id:string|null):Observable<any>{
    return this._HttpClient.get(`${environment.secBaseUrl}lookup.php?i=${id}`)
   }
  }
