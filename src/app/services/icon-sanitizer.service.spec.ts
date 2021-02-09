import { TestBed } from '@angular/core/testing';

import { IconSanitizerService } from './icon-sanitizer.service';

describe('IconSanitizerService', () => {
  let service: IconSanitizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconSanitizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
