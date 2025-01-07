import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DetailsService } from '../../core/services/details.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IDetails } from '../../core/interfaces/details';
@Component({
  selector: 'app-detail-mael',
  standalone: true,
  imports: [],
  templateUrl: './detail-mael.component.html',
  styleUrl: './detail-mael.component.css'
})
export class DetailMaelComponent implements OnInit , OnDestroy {
private readonly _DetailsService=inject(DetailsService);
private readonly _ActivatedRoute=inject(ActivatedRoute); 

mealdetails!:IDetails
unsub!:Subscription;
allIngredients!:string[]
allMeasures!:string[]

ngOnInit(): void {
this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
    let mealID=  p.get('id');
    this.unsub=this._DetailsService.mealDetail(mealID).subscribe({
      next:(res)=>{
    this.mealdetails =res.meals[0];
    this.allIngredients=[
      this.mealdetails.strMeasure1+" "+this.mealdetails.strIngredient1 ,
      this.mealdetails.strMeasure2+" "+this.mealdetails.strIngredient2,
      this.mealdetails.strMeasure3+" "+this.mealdetails.strIngredient3,
      this.mealdetails.strMeasure4+" "+this.mealdetails.strIngredient4,
      this.mealdetails.strMeasure5+" "+this.mealdetails.strIngredient5,
      this.mealdetails.strMeasure6+" "+this.mealdetails.strIngredient6,
      this.mealdetails.strMeasure7+" "+this.mealdetails.strIngredient7,
      this.mealdetails.strMeasure8+" "+this.mealdetails.strIngredient8,
      this.mealdetails.strMeasure9+" "+this.mealdetails.strIngredient9,
      this.mealdetails.strMeasure10+" "+this.mealdetails.strIngredient10,
      this.mealdetails.strMeasure11+" "+this.mealdetails.strIngredient11,
      this.mealdetails.strMeasure12+" "+this.mealdetails.strIngredient12,
      this.mealdetails.strMeasure13+" "+this.mealdetails.strIngredient13,
      this.mealdetails.strMeasure14+" "+this.mealdetails.strIngredient14,
      this.mealdetails.strMeasure15+" "+this.mealdetails.strIngredient15,
      this.mealdetails.strMeasure16+" "+this.mealdetails.strIngredient16,
      this.mealdetails.strMeasure17+" "+this.mealdetails.strIngredient17,
      this.mealdetails.strMeasure18+" "+this.mealdetails.strIngredient18,
      this.mealdetails.strMeasure19+" "+this.mealdetails.strIngredient19,
      this.mealdetails.strMeasure20+" "+this.mealdetails.strIngredient20
    ];
      }
  });
  }
  });
  }
  ngOnDestroy(): void {
    this.unsub?.unsubscribe();
  }
}


