cos
===



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cos.svg)](https://npmjs.org/package/cos)
[![Downloads/week](https://img.shields.io/npm/dw/cos.svg)](https://npmjs.org/package/cos)
[![License](https://img.shields.io/npm/l/cos.svg)](https://github.com/Projects/cos/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cos
$ cos COMMAND
running command...
$ cos (-v|--version|version)
cos/0.0.0 darwin-x64 node-v10.16.0
$ cos --help [COMMAND]
USAGE
  $ cos COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cos bucket [CONFIGKEY] [CONFIGVALUE]`](#cos-bucket-configkey-configvalue)
* [`cos config [CONFIGKEY] [CONFIGVALUE]`](#cos-config-configkey-configvalue)
* [`cos help [COMMAND]`](#cos-help-command)

## `cos bucket [CONFIGKEY] [CONFIGVALUE]`

describe the command here

```
USAGE
  $ cos bucket [CONFIGKEY] [CONFIGVALUE]

ARGUMENTS
  CONFIGKEY    Config key, id or key
  CONFIGVALUE  Config value

OPTIONS
  -h, --help  show CLI help
  -l, --list  List buckets

EXAMPLE
  $ cos bucket --list
```

_See code: [src/commands/bucket.ts](https://github.com/Projects/cos/blob/v0.0.0/src/commands/bucket.ts)_

## `cos config [CONFIGKEY] [CONFIGVALUE]`

Configure cos

```
USAGE
  $ cos config [CONFIGKEY] [CONFIGVALUE]

ARGUMENTS
  CONFIGKEY    Config key, id or key
  CONFIGVALUE  Config value

OPTIONS
  -h, --help  show CLI help
  -l, --list  List config

EXAMPLE
  $ cos config secretKey 12345
  $ cos config --list
```

_See code: [src/commands/config.ts](https://github.com/Projects/cos/blob/v0.0.0/src/commands/config.ts)_

## `cos help [COMMAND]`

display help for cos

```
USAGE
  $ cos help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
