import { DefineCommand, DefineOption, Command } from '@artus-cli/artus-cli';

export interface TestOption {
  file: string[]
}

@DefineCommand({
  command: 'test [file...]',
  description: 'Run the unitest',
  alias: [ 't' ],
})
export class TestCommand extends Command {
  @DefineOption()
  args: TestOption;

  async run() {
    console.info('test files', this.args.file);
  }
}
