#!/usr/bin/env node

import { start, DefineCommand, Command, DefineOption } from '@artus-cli/artus-cli';

interface Option {
  silent?: boolean;
}

@DefineCommand()
export class SinglefileCommand extends Command {
  @DefineOption({
    silent: {
      type: 'boolean',
      description: 'Silent!!',
      alias: 's',
    },
  })
  opt: Option;

  async run() {
    if (!this.opt.silent) {
      console.info('🚀🚀🚀 singlefile 🚀🚀🚀');
    } else {
      console.info('🤫🤫🤫');
    }
  }
}

start({ baseDir: __dirname });
