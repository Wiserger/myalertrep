import { TestBed } from '@angular/core/testing';

import { MyallertlibraryService } from './myallertlibrary.service';

describe('MyallertlibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyallertlibraryService = TestBed.get(MyallertlibraryService);
    expect(service).toBeTruthy();
  });
});
