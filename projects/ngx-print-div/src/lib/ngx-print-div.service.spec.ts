import { TestBed } from '@angular/core/testing';

import { NgxPrintDivService } from './ngx-print-div.service';

describe('NgxPrintDivService', () => {
  let service: NgxPrintDivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPrintDivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
