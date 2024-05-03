import { Routes } from '@angular/router';
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
import { EmpFileUploadComponent } from './emp-file-upload/emp-file-upload.component';
import { EmpLeaveReqComponent } from './emp-leave-req/emp-leave-req.component';
import { EmpLeaveReqSidebarComponent } from './emp-leave-req-sidebar/emp-leave-req-sidebar.component';
export const routes: Routes = [
    {
        path:'login/:data',
        component:EmpLoginComponent
    },
    {
        path:'login',
        component:EmpLoginComponent
    },
    {
        path:'signup',
        component:EmpRegisterComponent
    },
    {
        path:'forgot_password',
        component:EmpForgotpasswordComponent
    },
    {
        path:'new_password/:data',
        component:EmpNewpasswordComponent
    },
    {
        path:'profile',
        component:EmpProfileComponent
    },
    {
        path:'navbar',
        component:EmpNavbarComponent
    },
    {
        path:'home',
        component:EmpHomeComponent
    },
    {
        path:'reg',
        component:EmpRegComponent
    },
    {
        path:'landing_page',
        component:EmpLandingPageComponent
    },
    {
        path:'dasboard',
        component:EmpDasboardComponent
    },
    {
        path:'profile_navbar',
        component:EmpProfileNavbarComponent
    },
    {
        path:'profile_sidebar',
        component:EmpProfileSidebarComponent
    },
    {
        path:'leave_req',
        component:EmpLeaveReqComponent
    },
    {
        path:'file_upload',
        component:EmpFileUploadComponent
    },
    {
        path:'leave_req_sidebar',
        component:EmpLeaveReqSidebarComponent
    }

];
