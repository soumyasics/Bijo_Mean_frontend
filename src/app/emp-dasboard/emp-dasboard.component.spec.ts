import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDasboardComponent } from './emp-dasboard.component';

describe('EmpDasboardComponent', () => {
  let component: EmpDasboardComponent;
  let fixture: ComponentFixture<EmpDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpDasboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
