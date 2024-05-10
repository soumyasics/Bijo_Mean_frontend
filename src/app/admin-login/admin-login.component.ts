import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

constructor(private adminService:AdminServiceService){}
  
login_form_data:any


  admin_login(login_form:any){
    this.login_form_data={
      admin_email:login_form.admin_email,
      admin_password:login_form.admin_password
    }

    console.log('formdata',this.login_form_data);
    
    this.adminService.loginService(this.login_form_data).subscribe((data:any)=>{
      console.log(data);
      
      
    })

  }
}
