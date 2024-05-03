import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpProfileSidebarComponent } from './emp-profile-sidebar.component';

describe('EmpProfileSidebarComponent', () => {
  let component: EmpProfileSidebarComponent;
  let fixture: ComponentFixture<EmpProfileSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpProfileSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpProfileSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
