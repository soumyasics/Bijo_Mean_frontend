import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-register',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './emp-register.component.html',
  styleUrl: './emp-register.component.css'
})
export class EmpRegisterComponent {

constructor(private empservice:EmpServiceService, private router:Router){}

  file:any
  gender:any


  emp_reg_form(rgform:any){
      const formdata=new FormData()
        formdata.append('emp_fname',rgform.fname)
        formdata.append('emp_lname',rgform.lname)
        formdata.append('emp_dateofbirth',rgform.dob)
        formdata.append('emp_email',rgform.email)
        formdata.append('emp_phone',rgform.phone)
        formdata.append('emp_whatsapp',rgform.whatsapp)
        formdata.append('emp_address',rgform.address)
        formdata.append('emp_country',rgform.country)
        formdata.append('emp_postal',rgform.postal)
        formdata.append('emp_password',rgform.password)
        formdata.append('emp_profile',this.file)
        formdata.append('emp_gender',rgform.gender)
    
      console.log("reg form ",formdata);
    this.empservice.signupService(formdata).subscribe((data:any)=>{
      console.log(data);
      if(data.status==200){
        alert('Your Request Submitted Successfully ****')
        this.router.navigate(['/login']);
      }
      else 
        alert(data.message)
    })
  }
  
  onchange(file:any){
    this.file=file.target.files[0]
    console.log('onchange');
    
  }

}
