import { TestBed } from '@angular/core/testing';

import { GranblueService } from './granblue.service';

describe('GranblueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GranblueService = TestBed.get(GranblueService);
    expect(service).toBeTruthy();
  });
});
