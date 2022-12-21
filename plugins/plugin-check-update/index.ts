import { Inject, ApplicationLifecycle, LifecycleHook, LifecycleHookUnit } from '@artus/core';
import { Program, CommandContext } from '@artus-cli/artus-cli';
import { CheckUpdateCommand } from './check';
import process from 'node:process';
import chalk from 'chalk';
import { throttle } from 'lodash';

@LifecycleHookUnit()
export default class UsageLifecycle implements ApplicationLifecycle {
  @Inject()
  private readonly program: Program;

  @LifecycleHook()
  async configDidLoad() {
    // prevent ctrl c
    this.program.useInExecution(CheckUpdateCommand, async (_ctx: CommandContext, next) => {
      process.removeAllListeners('SIGINT');
      process.stdin.resume();
  
      let counter = 0;
      const exit = () => {
        if (counter >= 2) {
          console.info('\nExit...');
          process.exit(0);
        } else {
          console.info('\nPress Ctrl+C again to force exit');
          counter++;
          setTimeout(() => {
            counter = 0;
          }, 5000);
        }
      };
  
      process.on('SIGINT', throttle(exit, 500));

      await next();
    });

    // auto check update
    this.program.use(async (ctx: CommandContext, next) => {
      await next();

      if (ctx.matched.clz === CheckUpdateCommand) {
        return;
      }

      // update contents
      const contents = [
        `Update available ${chalk.gray(this.program.version)} → ${chalk.greenBright('3.0.0')}`,
        `Run ${chalk.blueBright(`npm i -g ${this.program.name}`)} or ${chalk.blueBright(`${this.program.binName} upgrade`)} to update`,
      ];

      const removeColor = c => c.replace(/\x1B\[\d+m/g, '');
      const maxLen = contents.map(removeColor)
        .sort((a, b) => a.length - b.length)
        .pop().length;

      // show content
      const distanceLen = 2;
      const displayContents: string[] = [];
      const contentLen = maxLen + distanceLen * 2;
      displayContents.push('┌' + '─'.repeat(contentLen) + '┐');
      displayContents.push('│' + ' '.repeat(contentLen) + '│');
      displayContents.push('│' + ' '.repeat(contentLen) + '│');

      contents.forEach(c => {
        const realContentLen = removeColor(c).length;
        const leftSpace = ' '.repeat(distanceLen + (maxLen - realContentLen) / 2);
        const rightSpace = ' '.repeat(contentLen - leftSpace.length - realContentLen);
        displayContents.push('│' + leftSpace + c + rightSpace + '│');
      });

      displayContents.push('│' + ' '.repeat(contentLen) + '│');
      displayContents.push('│' + ' '.repeat(contentLen) + '│');
      displayContents.push('└' + '─'.repeat(contentLen) + '┘');
      console.info(`\n\n${displayContents.map(c => `  ${c}`).join('\n')}\n\n`);
    });
  }
}