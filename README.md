# artus-cli examples

## 默认 demo

```bash
$ npx ts-node egg-bin/bin/cli.ts -h
```

## 继承 demo

继承 egg-bin 并且增添指令的 demo

```bash
$ npx ts-node chair-bin/bin/cli.ts -h
```

## 简单 demo

```bash
$ npx ts-node simple-bin/bin/cli.ts -h
```

## 单文件 demo

```bash
$ npx ts-node singlefile/bin.ts -h
```

## 指令覆盖 demo

用于验证指令覆盖

```bash
$ npx ts-node override-bin/bin/cli.ts -h
```

## 插件 demo

- plugins/plugin-codegen `codegen 指令`
- plugins/plugin-codegen-extra `拓展 codegen 指令`
