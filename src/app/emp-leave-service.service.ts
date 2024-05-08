import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpLeaveServiceService {

  constructor(private httpclient:HttpClient) {}

  leave_req_api='http://localhost:3000/emp_leave_req'


  leave_reqService=(leave_req_form:any)=>{
    return this.httpclient.post(this.leave_req_api,leave_req_form)
  }
}
