import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLeaveReqComponent } from './emp-leave-req.component';

describe('EmpLeaveReqComponent', () => {
  let component: EmpLeaveReqComponent;
  let fixture: ComponentFixture<EmpLeaveReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpLeaveReqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpLeaveReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
