import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { EmpServiceService } from '../emp-service.service';
import { HttpClientModule } from '@angular/common/http'
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router'
import { EmpNavbarComponent } from '../emp-navbar/emp-navbar.component';
@Component({
  selector: 'app-emp-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterLink,EmpNavbarComponent],
  templateUrl: './emp-login.component.html',
  styleUrl: './emp-login.component.css'
})
export class EmpLoginComponent {

  constructor(private empservice:EmpServiceService,private router:Router){}

login_form_data={emp_email:'',emp_password:''}


  emp_login(login_form:any){
    this.login_form_data={
      emp_email:login_form.emp_email,
      emp_password:login_form.emp_password
    }
    this.empservice.loginService(this.login_form_data).subscribe((data:any)=>{
    console.log(data);
    
    if(data.status==200){
      console.log("id",data.data._id)
      localStorage.setItem("empid",data.data._id)
      this.router.navigate(['/profile']);
    }
    else 
      alert(data.message)
    
    }
    )
    
  }

}
