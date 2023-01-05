#!/usr/bin/env node

import { start, DefineCommand, Command, Option } from '@artus-cli/artus-cli';

@DefineCommand()
export class SinglefileCommand extends Command {
  @Option({
    alias: 's',
    description: 'Silent!!',
  })
  silent: boolean;

  async run() {
    if (!this.silent) {
      console.info('🚀🚀🚀 singlefile 🚀🚀🚀');
    } else {
      console.info('🤫🤫🤫');
    }
  }
}

start();
