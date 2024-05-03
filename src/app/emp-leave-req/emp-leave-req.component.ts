import { Component } from '@angular/core';
import { EmpProfileNavbarComponent } from '../emp-profile-navbar/emp-profile-navbar.component';

import { EmpLeaveReqSidebarComponent } from '../emp-leave-req-sidebar/emp-leave-req-sidebar.component';

@Component({
  selector: 'app-emp-leave-req',
  standalone: true,
  imports: [EmpProfileNavbarComponent,EmpLeaveReqSidebarComponent],
  templateUrl: './emp-leave-req.component.html',
  styleUrl: './emp-leave-req.component.css'
})
export class EmpLeaveReqComponent {

}
