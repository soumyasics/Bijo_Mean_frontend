import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpclient:HttpClient) { }

  
  login_api='http://localhost:3000/admin_login'
  emp_detail_api='http://localhost:3000/admin_emp_details'

  loginService=(login_form:any)=>{
    return this.httpclient.post(this.login_api,login_form)
  }

  emp_detailsService=(data:any)=>{
    return this.httpclient.post(this.emp_detail_api,data)
  }
}
