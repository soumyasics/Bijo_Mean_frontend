import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-newpassword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-newpassword.component.html',
  styleUrl: './emp-newpassword.component.css'
})
export class EmpNewpasswordComponent {
  emaildata:any

  constructor(private empservice:EmpServiceService,private router:Router,private activatedroute:ActivatedRoute){
    this.emaildata=this.activatedroute.snapshot.params
    console.log("email",this.emaildata.data);
    
  }
  
  emp_update_formdata={emp_email:'',emp_new_password:'',emp_confirm_password:''}
  

  emp_update_password(new_password_form:any){
    this.emp_update_formdata={
      emp_email:this.emaildata.data,
      emp_new_password:new_password_form.emp_new_password,
      emp_confirm_password:new_password_form.emp_confirm_password
    }
    if(this.emp_update_formdata.emp_new_password==''&&this.emp_update_formdata.emp_confirm_password==''){
      alert("Create new password")
    }
    else if(this.emp_update_formdata.emp_new_password!=this.emp_update_formdata.emp_confirm_password){
      alert("Missmatching new password or confirm password")
    }
    
    else{
      alert("New password Updated!! Please Login")
    this.empservice.update_passwordService(this.emp_update_formdata).subscribe((data:any)=>{
      if (data.status==200){
        this.router.navigate(['/login'])
      }
      else {
        alert(data.message)
      }
    })
  
  }

  }

}
