import { TestBed, inject } from '@angular/core/testing';

import { MailExistsGuardService } from './mail-exists-guard.service';

describe('MailExistsGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailExistsGuardService]
    });
  });

  it('should ...', inject([MailExistsGuardService], (service: MailExistsGuardService) => {
    expect(service).toBeTruthy();
  }));
});
