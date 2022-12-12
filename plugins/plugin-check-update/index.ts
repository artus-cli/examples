import { Inject, ApplicationLifecycle, LifecycleHook, LifecycleHookUnit } from '@artus/core';
import { Program, CommandContext, Utils } from '@artus-cli/artus-cli';
import process from 'node:process';
import { throttle } from 'lodash';

@LifecycleHookUnit()
export default class UsageLifecycle implements ApplicationLifecycle {
  @Inject()
  private readonly program: Program;

  @LifecycleHook()
  async configDidLoad() {
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
  }
}