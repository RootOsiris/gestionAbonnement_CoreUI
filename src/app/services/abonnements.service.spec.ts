import { TestBed, inject } from '@angular/core/testing';

import { AbonnementsService } from './abonnements.service';

describe('AbonnementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbonnementsService]
    });
  });

  it('should be created', inject([AbonnementsService], (service: AbonnementsService) => {
    expect(service).toBeTruthy();
  }));
});
