import { TestBed } from '@angular/core/testing';

import { RosterModelService } from './roster-model.service';

describe('RosterModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RosterModelService = TestBed.get(RosterModelService);
    expect(service).toBeTruthy();
  });
});
