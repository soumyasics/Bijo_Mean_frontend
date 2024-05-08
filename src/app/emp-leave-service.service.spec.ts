import { TestBed } from '@angular/core/testing';

import { EmpLeaveServiceService } from './emp-leave-service.service';

describe('EmpLeaveServiceService', () => {
  let service: EmpLeaveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpLeaveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
