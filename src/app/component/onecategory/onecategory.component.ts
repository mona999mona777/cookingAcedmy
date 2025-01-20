import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CatService } from '../../core/services/cat.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Icat } from '../../core/interfaces/allcat';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-onecategory',
  standalone: true,
  imports: [RouterLink,TranslateModule],
  templateUrl: './onecategory.component.html',
  styleUrl: './onecategory.component.css'
})
export class OnecategoryComponent  implements OnInit , OnDestroy {
  private readonly _CatService=inject(CatService);
  private readonly _ActivatedRoute=inject(ActivatedRoute); 
  
  category!:Icat[];
  categoryName!:string|null;
 unsub!:Subscription;
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(p)=>{
  let thecategoryname=  p.get('name');
this.categoryName=thecategoryname;

  this.unsub=this._CatService.onecategories(thecategoryname).subscribe({
    next:(res)=>{
   this.category=res.meals;
    }
});
}
});
}
ngOnDestroy(): void {
  this.unsub?.unsubscribe();
}
}
