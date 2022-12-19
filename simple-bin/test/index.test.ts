import { fork } from '../../global';

describe('simple-bin', () => {
  it('simple-bin should work', async () => {
    await fork('simple-bin', [ '--help' ])
      // .debug()
      .expect('stdout', /Usage: simple-bin \[baseDir\]/)
      .expect('stdout', /-p, --port number   port/)
      .expect('stdout', /-h, --help          Show Help/)
      .end();

    await fork('simple-bin', [ './src', '--port', '7001' ])
      // .debug()
      .expect('stdout', /Run with port 7001 in \.\/src/)
      .end();
  });
});
