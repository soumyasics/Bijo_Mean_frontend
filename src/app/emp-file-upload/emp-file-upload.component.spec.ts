import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFileUploadComponent } from './emp-file-upload.component';

describe('EmpFileUploadComponent', () => {
  let component: EmpFileUploadComponent;
  let fixture: ComponentFixture<EmpFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpFileUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
