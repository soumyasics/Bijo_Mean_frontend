import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLeaveReqSidebarComponent } from './emp-leave-req-sidebar.component';

describe('EmpLeaveReqSidebarComponent', () => {
  let component: EmpLeaveReqSidebarComponent;
  let fixture: ComponentFixture<EmpLeaveReqSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpLeaveReqSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpLeaveReqSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
