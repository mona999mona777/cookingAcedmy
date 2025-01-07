import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
