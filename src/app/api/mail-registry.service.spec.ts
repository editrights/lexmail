import { TestBed, inject } from '@angular/core/testing';

import { MailRegistryService } from './mail-registry.service';

describe('MailRegistryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailRegistryService]
    });
  });

  it('should ...', inject([MailRegistryService], (service: MailRegistryService) => {
    expect(service).toBeTruthy();
  }));
});
