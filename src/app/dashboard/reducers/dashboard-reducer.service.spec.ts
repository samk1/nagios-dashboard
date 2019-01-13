import { TestBed } from '@angular/core/testing';

import { DashboardReducerService } from './dashboard-reducer.service';

describe('DashboardReducerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardReducerService = TestBed.get(DashboardReducerService);
    expect(service).toBeTruthy();
  });
});
