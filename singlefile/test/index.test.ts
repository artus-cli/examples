import { fork } from '../../global';

describe('singlefile-bin', () => {
  it('singlefile-bin should work', async () => {
    await fork('singlefile')
      // .debug()
      .expect('stdout', /singlefile/)
      .end();

    await fork('singlefile', [ '-s' ])
      // .debug()
      .expect('stdout', /🤫🤫🤫/)
      .end();
  });
});
