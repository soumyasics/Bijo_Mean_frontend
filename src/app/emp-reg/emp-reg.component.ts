import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { EmpServiceService } from '../emp-service.service';


@Component({
  selector: 'app-emp-reg',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-reg.component.html',
  styleUrl: './emp-reg.component.css'
})
export class EmpRegComponent {

  constructor(private empservice:EmpServiceService){

  }

  signup_form_data:any

  emp_signup_form(signup_form:any){
    this.signup_form_data={
      'emp_fullname':signup_form.fullname,
      'emp_email':signup_form.email,
      'emp_password':signup_form.password,
      'emp_confirm_password':signup_form.confirm_password,
      'emp_profile':signup_form.profile
    }
    this.empservice.regService(this.signup_form_data).subscribe((data:any)=>{
      console.log(data);
      
    })
  }
  

}
