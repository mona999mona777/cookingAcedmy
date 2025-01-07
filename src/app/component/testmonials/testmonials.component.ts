import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-testmonials',
  standalone: true,
  imports: [CarouselModule,TranslateModule],
  templateUrl: './testmonials.component.html',
  styleUrl: './testmonials.component.css'
})
export class TestmonialsComponent {
  students: OwlOptions = {
    loop: true,
    rtl:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 1
      },
    },    nav: false
  }
}
