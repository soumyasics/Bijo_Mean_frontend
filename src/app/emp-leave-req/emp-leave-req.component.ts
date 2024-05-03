import { Component } from '@angular/core';
import { EmpProfileNavbarComponent } from '../emp-profile-navbar/emp-profile-navbar.component';
import { EmpProfileSidebarComponent } from '../emp-profile-sidebar/emp-profile-sidebar.component';

@Component({
  selector: 'app-emp-leave-req',
  standalone: true,
  imports: [EmpProfileNavbarComponent,EmpProfileSidebarComponent],
  templateUrl: './emp-leave-req.component.html',
  styleUrl: './emp-leave-req.component.css'
})
export class EmpLeaveReqComponent {

}
