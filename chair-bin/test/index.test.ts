import { fork } from '../../global';

describe('chair-bin', () => {
  it('chair-bin should work', async () => {
    await fork('chair-bin', [ '--help' ])
      // .debug()
      .expect('stdout', /Usage: chair-bin/)
      .expect('stdout', /Available Commands/)
      .expect('stdout', /dev \[baseDir\]\s+Run the development server with chair-bin/)
      .expect('stdout', /test \[file...\]\s+Run the unitest/)
      .expect('stdout', /codegen\s+codegen plugin/)
      .expect('stdout', /codegen extra\s+codegen extra plugin/)
      .expect('stdout', /module\s+Module Commands/)
      .expect('stdout', /module debug \[baseDir\]\s+Module Debug Commands/)
      .expect('stdout', /module dev \[baseDir\]\s+Module Dev Commands/)
      .expect('stdout', /oneapi client \[appName\]\s+Run the oneapi client/)
      .expect('stdout', /oneapi server \[appName\]\s+Run the oneapi server/)
      .expect('stdout', /Options/)
      .expect('stdout', /-h, --help\s+Show Help/)
      .expect('stdout', /-v, --version\s+Show Version/)
      .end();

    await fork('chair-bin', [ 'oneapi', 'client', 'app' ])
      // .debug()
      .expect('stdout', /oneapi client app/)
      .end();

    await fork('chair-bin', [ 'oneapi' ])
      // .debug()
      .expect('stderr', /Command is not implement: 'chair-bin oneapi'/)
      .end();

    await fork('chair-bin', [ 'user', '-u=123' ])
      // .debug()
      .expect('stdout', /user is foo/)
      .end();
  });
});
