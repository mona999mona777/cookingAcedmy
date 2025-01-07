import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CatService } from '../../core/services/cat.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IAllcat } from '../../core/interfaces/allcat';
import { RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit , OnDestroy {
  private readonly _CatService=inject(CatService);
  private readonly _NgxSpinnerService=inject(NgxSpinnerService);
  allcategories!:IAllcat[];
 unsub!:Subscription;
ngOnInit(): void {
  this.unsub=this._CatService.allcategories().subscribe({
    next:(res)=>{
   this.allcategories=res.categories;
    },
});
}
ngOnDestroy(): void {
  this.unsub?.unsubscribe();
}
}
