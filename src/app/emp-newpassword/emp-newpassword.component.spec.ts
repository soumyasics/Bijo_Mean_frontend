import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpNewpasswordComponent } from './emp-newpassword.component';

describe('EmpNewpasswordComponent', () => {
  let component: EmpNewpasswordComponent;
  let fixture: ComponentFixture<EmpNewpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpNewpasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpNewpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
