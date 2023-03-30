import { Utils, DefineCommand, Command, Inject, Option } from '@artus-cli/artus-cli';

@DefineCommand({
  command: 'cov <baseDir> [file...]',
  description: 'Run the coverage',
})
export class CovCommand extends Command {
  @Option({ default: true })
  c8: boolean;

  @Option()
  baseDir: string;

  @Inject()
  utils: Utils;

  async run() {
    console.info('coverage c8', this.c8);
    return this.utils.redirect([ 'test', this.baseDir ]);
  }
}
