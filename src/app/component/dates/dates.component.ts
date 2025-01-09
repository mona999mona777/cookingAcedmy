import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dates',
  standalone: true,
  imports: [TranslateModule,RouterLink],
  templateUrl: './dates.component.html',
  styleUrl: './dates.component.css'
})
export class DatesComponent {

}
