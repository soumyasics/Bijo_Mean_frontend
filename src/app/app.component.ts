import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpRegisterComponent } from './emp-register/emp-register.component';
import { EmpForgotpasswordComponent } from './emp-forgotpassword/emp-forgotpassword.component';
import { EmpNewpasswordComponent } from './emp-newpassword/emp-newpassword.component';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { EmpNavbarComponent } from './emp-navbar/emp-navbar.component';
import { EmpHomeComponent } from './emp-home/emp-home.component';
import { EmpRegComponent } from './emp-reg/emp-reg.component';
import { EmpLandingPageComponent } from './emp-landing-page/emp-landing-page.component';
import { EmpDasboardComponent } from './emp-dasboard/emp-dasboard.component';
import { EmpProfileNavbarComponent } from './emp-profile-navbar/emp-profile-navbar.component';
import { EmpProfileSidebarComponent } from './emp-profile-sidebar/emp-profile-sidebar.component';
import { EmpLeaveReqComponent } from './emp-leave-req/emp-leave-req.component';
import { EmpFileUploadComponent } from './emp-file-upload/emp-file-upload.component';
import { EmpLeaveReqSidebarComponent } from './emp-leave-req-sidebar/emp-leave-req-sidebar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmpLandingPageComponent,
    EmpDasboardComponent,EmpRegComponent,EmpLoginComponent,
    EmpRegisterComponent,EmpForgotpasswordComponent,EmpNewpasswordComponent,
    EmpProfileComponent,EmpNavbarComponent,EmpHomeComponent,EmpProfileNavbarComponent,
    EmpProfileSidebarComponent,EmpLeaveReqComponent,EmpFileUploadComponent,EmpLeaveReqSidebarComponent,
    RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
