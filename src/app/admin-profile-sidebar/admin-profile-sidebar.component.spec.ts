import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileSidebarComponent } from './admin-profile-sidebar.component';

describe('AdminProfileSidebarComponent', () => {
  let component: AdminProfileSidebarComponent;
  let fixture: ComponentFixture<AdminProfileSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProfileSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProfileSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
