import { fork } from '../../global';

describe('override-bin', () => {
  it('override-bin should work', async () => {
    await fork('override-bin', [ 'dev' ])
      // .debug()
      .expect('stdout', /extractly override/)
      .end();
  });
});
