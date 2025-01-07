import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IngratService } from '../../core/services/ingrat.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Ingrat } from '../../core/interfaces/ingrat';

@Component({
  selector: 'app-oneingradient',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './oneingradient.component.html',
  styleUrl: './oneingradient.component.css'
})
export class OneingradientComponent  implements OnInit , OnDestroy {
private readonly _IngratService=inject(IngratService);
private readonly _ActivatedRoute=inject(ActivatedRoute); 
ingradient!:Ingrat[];
categoryName!:string|null;
 unsub!:Subscription;
ngOnInit(): void {
this._ActivatedRoute.paramMap.subscribe({
    next:(p)=>{
  let thecategoryname=  p.get('name');
this.categoryName=thecategoryname;
  this.unsub=this._IngratService.oneingradiant(thecategoryname).subscribe({
    next:(res)=>{
   this.ingradient=res.meals;
    }
});
}
});
}
ngOnDestroy(): void {
  this.unsub?.unsubscribe();
}
}
