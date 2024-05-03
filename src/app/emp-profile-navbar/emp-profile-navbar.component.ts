import { Component } from '@angular/core';
import { EmpProfileSidebarComponent } from '../emp-profile-sidebar/emp-profile-sidebar.component';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emp-profile-navbar',
  standalone: true,
  imports: [EmpProfileSidebarComponent],
  templateUrl: './emp-profile-navbar.component.html',
  styleUrl: './emp-profile-navbar.component.css'
})
export class EmpProfileNavbarComponent {

  emp_id:any
  emp_data:any
  emp_profile:any

  constructor(private empservive:EmpServiceService , private router:Router){
    this.emp_id=localStorage.getItem("empid")
    console.log('nav_pro_data',this.emp_id);
    
    this.empservive.profileService(this.emp_id).subscribe((data:any)=>{
      console.log(data);
      this.emp_profile=data.data.Emp_Profile
      
    })
  }
  logOut(){
    this.emp_id=localStorage.getItem('')
    console.log('empi_d',this.emp_id);
    this.router.navigate(['/login'])
  }
}
