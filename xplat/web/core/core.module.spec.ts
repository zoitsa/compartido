import { AppCoreModule } from '@compartido/web/core/core.module';

describe('AppCoreModule', () => {
  it('should work', () => {
    expect(new AppCoreModule(null)).toBeDefined();
  });
});
