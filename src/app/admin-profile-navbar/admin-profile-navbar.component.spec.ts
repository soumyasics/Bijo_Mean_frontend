import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileNavbarComponent } from './admin-profile-navbar.component';

describe('AdminProfileNavbarComponent', () => {
  let component: AdminProfileNavbarComponent;
  let fixture: ComponentFixture<AdminProfileNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProfileNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProfileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
