import { TestBed, inject } from '@angular/core/testing';

import { ChartrackerService } from './chartracker.service';

describe('ChartrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartrackerService]
    });
  });

  it('should be created', inject([ChartrackerService], (service: ChartrackerService) => {
    expect(service).toBeTruthy();
  }));
});
