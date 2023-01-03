import { DefineCommand, Option } from '@artus-cli/artus-cli';
import { DevCommand as BaseDevCommand } from 'egg-bin';

@DefineCommand({
  description: 'Run the development server with chair-bin',
})
export class ChairDevCommand extends BaseDevCommand {
  @Option()
  other: string;

  @Option({ default: false })
  daemon: boolean;

  async run() {
    const r = await super.run();
    console.info('other', this.other);
    console.info('daemon', this.daemon);
    return r;
  }
}
