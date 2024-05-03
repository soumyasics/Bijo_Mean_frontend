import { Component } from '@angular/core';
import { EmpNavbarComponent } from '../emp-navbar/emp-navbar.component';
import { EmpHomeComponent } from '../emp-home/emp-home.component';

@Component({
  selector: 'app-emp-landing-page',
  standalone: true,
  imports: [EmpNavbarComponent,EmpHomeComponent],
  templateUrl: './emp-landing-page.component.html',
  styleUrl: './emp-landing-page.component.css'
})
export class EmpLandingPageComponent {

}
