import 'reflect-metadata';
import tsconfig from './tsconfig.json';
import { register } from 'tsconfig-paths';
import path from 'path';
import coffee from 'coffee';
import fs from 'fs';
import { ForkOptions } from 'child_process';
import assert from 'node:assert';

register({
  baseUrl: tsconfig.compilerOptions.baseUrl,
  paths: tsconfig.compilerOptions.paths,
});

export function fork(target: string, args: string[] = [], options: ForkOptions = {}) {
  const bin = [
    path.join(__dirname, target, 'src/bin/cli.ts'),
    path.join(__dirname, target, 'src/bin.ts'),
  ].find(p => fs.existsSync(p));

  assert(bin, `${target} cannot found bin file`);
  return coffee.fork(bin, args, {
    cwd: __dirname,
    execArgv: [ '-r', require.resolve('ts-node/register') ].concat(options.execArgv || []),
    ...options,
  });
}
