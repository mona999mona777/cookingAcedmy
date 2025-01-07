import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IngratService } from '../../core/services/ingrat.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import {  Ingrats } from '../../core/interfaces/ingrat';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent implements OnInit , OnDestroy {
  private readonly _IngratService=inject(IngratService);
  allingradiants!:Ingrats[];
 unsub!:Subscription;
ngOnInit(): void {
  this.unsub=this._IngratService.allingradiants().subscribe({
    next:(res)=>{
   this.allingradiants=res.meals;
    }
});
}
ngOnDestroy(): void {
  this.unsub?.unsubscribe();
}
}
