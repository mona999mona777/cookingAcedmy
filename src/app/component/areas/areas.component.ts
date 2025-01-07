import { Component, inject, OnDestroy, OnInit} from '@angular/core';
import { AreassService } from '../../core/services/areass.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import {  IAreas } from '../../core/interfaces/area';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent implements OnInit , OnDestroy {
  private readonly _AreassService=inject(AreassService);
  allareas!:IAreas[];
 unsub!:Subscription;
ngOnInit(): void {
  this.unsub=this._AreassService.allareas().subscribe({
    next:(res)=>{
   this.allareas=res.meals;
    },
});
}
ngOnDestroy(): void {
  this.unsub?.unsubscribe();
} 
}  

