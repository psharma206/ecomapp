import { TestBed } from '@angular/core/testing';

import { AttendancerecorderService } from './attendancerecorder.service';

describe('AttendancerecorderService', () => {
  let service: AttendancerecorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendancerecorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
