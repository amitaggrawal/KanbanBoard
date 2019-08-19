import { TestBed } from '@angular/core/testing';

import { SprintuploadService } from './sprintupload.service';

describe('SprintuploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SprintuploadService = TestBed.get(SprintuploadService);
    expect(service).toBeTruthy();
  });
});
