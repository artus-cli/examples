import { fork } from '../../global';

describe('egg-bin', () => {
  it('egg-bin should work', async () => {
    await fork('egg-bin', [ '--help' ])
      // .debug()
      .expect('stdout', /Usage: egg-bin/)
      .expect('stdout', /Available Commands/)
      .expect('stdout', /dev \[baseDir\]\s+Run the development server/)
      .expect('stdout', /test \[file...\]/)
      .expect('stdout', /Options/)
      .expect('stdout', /-h, --help\s+Show Help/)
      .expect('stdout', /-v, --version\s+Show Version/)
      .end();
  });
});