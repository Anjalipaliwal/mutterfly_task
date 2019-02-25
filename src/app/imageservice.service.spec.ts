import { TestBed } from '@angular/core/testing';

import { imageservice } from './imageservice.service';

describe('ImageserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: imageservice = TestBed.get(imageservice);
    expect(service).toBeTruthy();
  });
});
