import { Component } from '@angular/core';
import { EmpProfileNavbarComponent } from '../emp-profile-navbar/emp-profile-navbar.component';
import { FormsModule } from '@angular/forms'
import { EmpLeaveServiceService } from '../emp-leave-service.service';
import { EmpLeaveReqSidebarComponent } from '../emp-leave-req-sidebar/emp-leave-req-sidebar.component';

@Component({
  selector: 'app-emp-leave-req',
  standalone: true,
  imports: [EmpProfileNavbarComponent,EmpLeaveReqSidebarComponent,FormsModule],
  templateUrl: './emp-leave-req.component.html',
  styleUrl: './emp-leave-req.component.css'
})
export class EmpLeaveReqComponent {

  constructor(private emp_leaveService:EmpLeaveServiceService){}

   

  leave_req(leave_req_form:any){
    const formdata=new FormData()
      formdata.append('leave_start_Date',leave_req_form.start_date)
      formdata.append('leave_end_Date',leave_req_form.end_date)
      formdata.append('leave_no_of_days',leave_req_form.no_of_days)
      formdata.append('leave_approval_manager',leave_req_form.approval_manager)
      formdata.append('leave_type',leave_req_form.leave_type)
      formdata.append('leave_reason',leave_req_form.reason)


    this.emp_leaveService.leave_reqService(formdata).subscribe((data:any)=>{
      console.log(data);
      alert('Leave Request Submitted Successfully')
      
    })
    
  }

  


}
