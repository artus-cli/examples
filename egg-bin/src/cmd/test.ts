import { DefineCommand, Command, Option } from '@artus-cli/artus-cli';

@DefineCommand({
  command: 'test [file...]',
  description: 'Run the unitest',
  alias: [ 't' ],
})
export class TestCommand extends Command {
  @Option()
  file: string[];

  async run() {
    console.info('test files', this.file);
  }
}
