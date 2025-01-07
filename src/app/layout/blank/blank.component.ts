import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../component/footer/footer.component";
import { MainNavbarComponent } from "../../component/main-navbar/main-navbar.component";

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, MainNavbarComponent],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankComponent {

}
