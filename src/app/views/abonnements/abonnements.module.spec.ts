import { AbonnementsModule } from './abonnements.module';

describe('AbonnementsModule', () => {
  let abonnementsModule: AbonnementsModule;

  beforeEach(() => {
    abonnementsModule = new AbonnementsModule();
  });

  it('should create an instance', () => {
    expect(abonnementsModule).toBeTruthy();
  });
});
