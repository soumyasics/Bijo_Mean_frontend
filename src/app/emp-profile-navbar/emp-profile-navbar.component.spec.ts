import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpProfileNavbarComponent } from './emp-profile-navbar.component';

describe('EmpProfileNavbarComponent', () => {
  let component: EmpProfileNavbarComponent;
  let fixture: ComponentFixture<EmpProfileNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpProfileNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpProfileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
