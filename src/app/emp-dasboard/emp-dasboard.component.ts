import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { EmpServiceService } from '../emp-service.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-dasboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-dasboard.component.html',
  styleUrl: './emp-dasboard.component.css'
})
export class EmpDasboardComponent {

//   emp_login_id:any
//   emp_data:any

// constructor(private empservice:EmpServiceService,private router:Router,private activatedroute:ActivatedRoute){
    
//   //this.emp_data=console.log("data of emp" ,localStorage.getItem("empid"))
//     this.emp_id=localStorage.getItem("empid")
//     console.log(this.emp_id);
   
//     this.empservice.profileService(this.emp_id).subscribe((data:any)=>{
//       console.log(data)
//       this.emp_data=data.data
//     })
//     }

    
//     isDisabled:boolean=true;
//     edit_profile(){
//       this.isDisabled=false
//     }


//     emp_update_profile:any

//     save_profile(dasboardform:any){
//       this.isDisabled=true
//       this.emp_update_profile={
//       'emp_fname':dasboardform.fname,
//       'emp_lname':dasboardform.lname,
//       'emp_dateofbirth':dasboardform.dob,
//       'emp_email':dasboardform.email,
//       'emp_phone':dasboardform.phone,
//       'emp_whatsapp':dasboardform.whatsapp,
//       'emp_address':dasboardform.address,
//       'emp_country':dasboardform.country,
//       'emp_postal':dasboardform.postal,
//       'emp_profile':dasboardform.emp_profile
//       }
//       console.log(this.emp_update_profile);
      
//     }
}
