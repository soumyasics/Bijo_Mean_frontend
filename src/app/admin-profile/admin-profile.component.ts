import { Component } from '@angular/core';
import { AdminProfileNavbarComponent } from '../admin-profile-navbar/admin-profile-navbar.component';
import { AdminProfileSidebarComponent } from '../admin-profile-sidebar/admin-profile-sidebar.component';
import { NgFor } from '@angular/common';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [AdminProfileNavbarComponent,AdminProfileSidebarComponent],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})
export class AdminProfileComponent {

  datas:any
  emp_data:any
  emp_profile:any
 constructor(private adminService:AdminServiceService){

  this.adminService.emp_detailsService(this.datas).subscribe((data:any)=>{
    console.log(data);
    this.emp_data=data.data
    this.emp_profile=data.data.Emp_Profile
    console.log();
    
    
  })
 }

 

}
