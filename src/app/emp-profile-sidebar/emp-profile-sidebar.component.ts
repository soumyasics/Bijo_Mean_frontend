import { Component } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emp-profile-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './emp-profile-sidebar.component.html',
  styleUrl: './emp-profile-sidebar.component.css'
})
export class EmpProfileSidebarComponent {

  emp_id:any
  emp_data:any
  emp_profile:any

  constructor(private empservice:EmpServiceService){

    this.emp_id=localStorage.getItem('empid')
    this.empservice.profileService(this.emp_id).subscribe((data:any)=>{
      this.emp_data=data
      this.emp_profile=data.data.Emp_Profile
    })
  }

}
