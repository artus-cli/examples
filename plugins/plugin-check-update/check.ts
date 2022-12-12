import { DefineCommand, Command, Program, Inject } from '@artus-cli/artus-cli';
import ProgressBar from 'progress';
import ora from 'ora';

@DefineCommand({
  command: 'upgrade',
  description: 'Upgrade your package',
})
export class CheckUpdateCommand extends Command {
  @Inject()
  program: Program;

  async run() {
    const spinner = ora(`Checking Your Package '${this.program.name}'`).start();
    await new Promise(resolve => setTimeout(resolve, 3000));
    spinner.stop();

    const total = 100;
    const max = 10;
    const bar = new ProgressBar('Upgrading [:bar] :rate/bps :percent :etas', { total });
    for (let i = 0; i < max + 1; i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      bar.tick(i ? total / max : 0);
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    spinner.succeed(`The package has been updated to ${this.program.version}!`);
  }
}
