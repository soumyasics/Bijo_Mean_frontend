import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-emp-forgotpassword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-forgotpassword.component.html',
  styleUrl: './emp-forgotpassword.component.css'
})
export class EmpForgotpasswordComponent {

  constructor(private empservice:EmpServiceService,private router:Router){}

  forgotpassword_form_data={emp_email:''}
  

  emp_forgot_password(forgotpassword_form:any){
    this.forgotpassword_form_data={
      emp_email:forgotpassword_form.emp_email
    }
    
    this.empservice.forgot_passwordService(this.forgotpassword_form_data).subscribe((data:any)=>{
      console.log(data);
      if(data.status==200){
        this.router.navigate([`/new_password/${this.forgotpassword_form_data.emp_email}`])
        
      }else{
        alert(data.message)
      }
      
    })

  
  }

}
