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
cos/0.0.1 darwin-x64 node-v12.2.0
$ cos --help [COMMAND]
USAGE
  $ cos COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cos Bucket [ACTION] [ACTIONVALUE]`](#cos-bucket-action-actionvalue)
* [`cos Config [CONFIGKEY] [CONFIGVALUE]`](#cos-config-configkey-configvalue)
* [`cos autocomplete [SHELL]`](#cos-autocomplete-shell)
* [`cos help [COMMAND]`](#cos-help-command)
* [`cos update [CHANNEL]`](#cos-update-channel)

## `cos Bucket [ACTION] [ACTIONVALUE]`

Bucket actions

```
USAGE
  $ cos Bucket [ACTION] [ACTIONVALUE]

ARGUMENTS
  ACTION       [default: list] oneof list, create, delete, select
  ACTIONVALUE  action value

OPTIONS
  -h, --help           show CLI help
  -r, --region=region

EXAMPLE
  $ cos bucket --list ap-chengdu
```

_See code: [src/commands/Bucket.ts](https://github.com/bougieL/cos/blob/v0.0.1/src/commands/Bucket.ts)_

## `cos Config [CONFIGKEY] [CONFIGVALUE]`

Configure cos

```
USAGE
  $ cos Config [CONFIGKEY] [CONFIGVALUE]

ARGUMENTS
  CONFIGKEY    Config key, id, key or app
  CONFIGVALUE  Config value

OPTIONS
  -h, --help  show CLI help
  -l, --list  List config

EXAMPLE
  $ cos config secretKey 12345
  $ cos config --list
```

_See code: [src/commands/Config.ts](https://github.com/bougieL/cos/blob/v0.0.1/src/commands/Config.ts)_

## `cos autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ cos autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ cos autocomplete
  $ cos autocomplete bash
  $ cos autocomplete zsh
  $ cos autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.4/src/commands/autocomplete/index.ts)_

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

## `cos update [CHANNEL]`

update the cos CLI

```
USAGE
  $ cos update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.9/src/commands/update.ts)_
<!-- commandsstop -->
