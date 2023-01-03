import { DefineCommand, Command, Option } from '@artus-cli/artus-cli';

@DefineCommand({
  command: 'dev [baseDir]',
  description: 'Run the development server',
  alias: [ 'd' ],
})
export class DevCommand extends Command {
  @Option({
    alias: 'p',
    default: 3000,
    description: 'Start A Server',
  })
  port: number;

  @Option({
    default: false,
    description: 'Debug with node-inspector',
  })
  inspect: boolean;

  @Option()
  nodeFlags: string;

  @Option()
  baseDir: string;

  async run() {
    console.info('port', this.port);
    console.info('inspect', this.inspect);
    console.info('nodeFlags', this.nodeFlags);
    console.info('baseDir', this.baseDir);
    return {
      command: 'dev',
    };
  }
}
