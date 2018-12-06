import { TestBed } from '@angular/core/testing';

import { ObjectJsonCgiService } from './object-json-cgi.service';

describe('ObjectJsonCgiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjectJsonCgiService = TestBed.get(ObjectJsonCgiService);
    expect(service).toBeTruthy();
  });
});
