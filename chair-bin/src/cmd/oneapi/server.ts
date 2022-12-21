import { DefineCommand, DefineOption } from '@artus-cli/artus-cli';

@DefineCommand({
  command: 'oneapi server [appName]',
  description: 'Run the oneapi server',
})
export class OneapiServerCommand {
  @DefineOption()
  args: any;

  async run() {
    console.info('oneapi server', this.args.appName);
  }
}
