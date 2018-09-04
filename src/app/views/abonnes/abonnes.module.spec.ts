import { AbonnesModule } from './abonnes.module';

describe('AbonnesModule', () => {
  let abonnesModule: AbonnesModule;

  beforeEach(() => {
    abonnesModule = new AbonnesModule();
  });

  it('should create an instance', () => {
    expect(abonnesModule).toBeTruthy();
  });
});
