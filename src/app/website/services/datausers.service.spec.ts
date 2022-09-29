import { TestBed } from '@angular/core/testing';

import { DatausersService } from './datausers.service';

describe('DatausersService', () => {
  let service: DatausersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatausersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
