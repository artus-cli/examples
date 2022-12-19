import { DefineCommand, DefineOption, OptionProps } from '@artus-cli/artus-cli';

@DefineCommand({
  command: 'oneapi client [appName]',
  description: 'Run the oneapi client',
})
export class OneapiClientCommand {
  @DefineOption()
  args: any;

  async run() {
    console.info('oneapi client', this.args.appName);
  }
}
