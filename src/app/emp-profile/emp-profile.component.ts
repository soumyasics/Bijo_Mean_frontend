import { Component } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { EmpProfileNavbarComponent } from '../emp-profile-navbar/emp-profile-navbar.component';
import { EmpProfileSidebarComponent } from '../emp-profile-sidebar/emp-profile-sidebar.component';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-emp-profile',
  standalone: true,
  imports: [EmpProfileNavbarComponent,EmpProfileSidebarComponent,FormsModule],
  templateUrl: './emp-profile.component.html',
  styleUrl: './emp-profile.component.css'
})
export class EmpProfileComponent {
  emp_id:any
  emp_data:any
  emp_profile:any
  data_to_navbar:any

constructor(private empservice:EmpServiceService){
    
  // this.emp_data=console.log("data of emp" ,localStorage.getItem("empid"))
    this.emp_id=localStorage.getItem("empid")
    console.log(this.emp_id);
   
    this.empservice.profileService(this.emp_id).subscribe((data:any)=>{
      console.log(data)
      this.emp_data=data.data
      this.emp_profile=data.data.Emp_Profile
    })
    }
    
    isDisabled:boolean=true;
    edit_profile(){
      this.isDisabled=false
    }

    file:any
    onchange(file:any){
      this.file=file.target.files[0]
      console.log('onchange');
      
    }

    save_profile(profileform:any){
      this.isDisabled=true
      const formdata=new FormData()
        formdata.append('empid',this.emp_id)
        formdata.append('emp_fname',profileform.fname)
        formdata.append('emp_lname',profileform.lname)
        formdata.append('emp_dateofbirth',profileform.dob)
        formdata.append('emp_email',profileform.email)
        formdata.append('emp_phone',profileform.phone)
        formdata.append('emp_whatsapp',profileform.whatsapp)
        formdata.append('emp_address',profileform.address)
        formdata.append('emp_country',profileform.country)
        formdata.append('emp_postal',profileform.postal)
        formdata.append('emp_password',profileform.password)
        formdata.append('emp_profile',this.file)
    
      console.log("reg form ",formdata);
      this.empservice.profile_updateService(formdata).subscribe((data:any)=>{
        console.log(data);
      })
      
      
   

    
}
}
