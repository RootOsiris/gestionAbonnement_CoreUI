import { StructuresModule } from './structures.module';

describe('StructuresModule', () => {
  let structuresModule: StructuresModule;

  beforeEach(() => {
    structuresModule = new StructuresModule();
  });

  it('should create an instance', () => {
    expect(structuresModule).toBeTruthy();
  });
});
