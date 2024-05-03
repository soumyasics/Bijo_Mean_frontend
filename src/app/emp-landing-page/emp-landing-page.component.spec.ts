import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLandingPageComponent } from './emp-landing-page.component';

describe('EmpLandingPageComponent', () => {
  let component: EmpLandingPageComponent;
  let fixture: ComponentFixture<EmpLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
