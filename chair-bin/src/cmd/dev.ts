import { DefineCommand, DefineOption, Middleware } from '@artus-cli/artus-cli';
import { DevCommand as BaseDevCommand, DevOption as BaseDevOption } from 'egg-bin/src';

export interface DevOption extends BaseDevOption {
  other?: string;
  daemon?: boolean;
}

@DefineCommand({
  description: 'Run the development server with chair-bin',
})
export class ChairDevCommand extends BaseDevCommand {
  @DefineOption<DevOption>({
    other: {
      type: 'string',
      alias: 'o',
    },

    daemon: {
      type: 'boolean',
      default: false,
    },
  })
  args: DevOption;

  async run() {
    const r = await super.run();
    console.info('other', this.args.other);
    console.info('daemon', this.args.daemon);
    return r;
  }
}