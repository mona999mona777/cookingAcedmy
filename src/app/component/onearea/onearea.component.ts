import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AreassService } from '../../core/services/areass.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Iarea } from '../../core/interfaces/area';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-onearea',
  standalone: true,
  imports: [RouterLink,TranslateModule],
  templateUrl: './onearea.component.html',
  styleUrl: './onearea.component.css'
})
export class OneareaComponent  implements OnInit , OnDestroy {
private readonly _AreassService=inject(AreassService);
private readonly _ActivatedRoute=inject(ActivatedRoute); 
area!:Iarea[];
categoryName!:string|null;
 unsub!:Subscription;
ngOnInit(): void {
this._ActivatedRoute.paramMap.subscribe({
    next:(p)=>{
  let thecategoryname=  p.get('name');
this.categoryName=thecategoryname;

  this.unsub=this._AreassService.onearea(thecategoryname).subscribe({
    next:(res)=>{
   this.area=res.meals;
    }
});
}
});
}
ngOnDestroy(): void {
  this.unsub?.unsubscribe();
}
}
