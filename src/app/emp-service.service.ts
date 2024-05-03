import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private httpclient:HttpClient) { }

  signup_api='http://localhost:3000/emp_signup'
  reg_api='http://localhost:3000/emp_reg'
  login_api='http://localhost:3000/emp_login'
  forgot_password_api='http://localhost:3000/emp_forgot_password'
  update_password_api='http://localhost:3000/emp_update_password'
  profile_api='http://localhost:3000/emp_display_profile'
  profile_update_api='http://localhost:3000/emp_profile_update'

  signupService=(reg_form_data:any)=>{
    return this.httpclient.post(this.signup_api,reg_form_data)
  }

  regService=(signup_form_data:any)=>{
    return this.httpclient.post(this.reg_api,signup_form_data)
  }

  loginService(login_form_data:any){
    return this.httpclient.post(this.login_api,login_form_data)
  }

  forgot_passwordService(forgotpassword_form:any){
    return this.httpclient.post(this.forgot_password_api,forgotpassword_form)
  }
  
  update_passwordService(new_password_form:any){
    return this.httpclient.post(this.update_password_api,new_password_form)
  }

  profileService(emp_id:any){
    return this.httpclient.post(this.profile_api,{emp_id:emp_id})
  }

  profile_updateService(formdata:any){
    return this.httpclient.post(this.profile_update_api,formdata)
  }

}
