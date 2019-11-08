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
$ npm install -g @bougiel/cos
$ cos COMMAND
running command...
$ cos (-v|--version|version)
@bougiel/cos/0.0.8 darwin-x64 node-v10.16.0
$ cos --help [COMMAND]
USAGE
  $ cos COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cos autocomplete [SHELL]`](#cos-autocomplete-shell)
* [`cos bucket [ACTION] [ACTIONVALUE]`](#cos-bucket-action-actionvalue)
* [`cos config [CONFIGKEY] [CONFIGVALUE]`](#cos-config-configkey-configvalue)
* [`cos help [COMMAND]`](#cos-help-command)
* [`cos object [ACTION] [ACTIONVALUE]`](#cos-object-action-actionvalue)
* [`cos update [CHANNEL]`](#cos-update-channel)

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

## `cos bucket [ACTION] [ACTIONVALUE]`

bucket actions

```
USAGE
  $ cos bucket [ACTION] [ACTIONVALUE]

ARGUMENTS
  ACTION       [default: list] oneof create, delete
  ACTIONVALUE  action value

OPTIONS
  -h, --help           show CLI help
  -l, --list
  -r, --region=region  set bucket region

EXAMPLE
  $ cos bucket --list ap-chengdu
```

_See code: [src/commands/bucket.ts](https://github.com/bougieL/cos/blob/v0.0.8/src/commands/bucket.ts)_

## `cos config [CONFIGKEY] [CONFIGVALUE]`

Configure cos

```
USAGE
  $ cos config [CONFIGKEY] [CONFIGVALUE]

ARGUMENTS
  CONFIGKEY    config key, one of SecretId, SecretKey, AppId, Bucket, Region
  CONFIGVALUE  config value

OPTIONS
  -h, --help  show CLI help
  -l, --list  list config

EXAMPLE
  $ cos config SecretKey 12345
  $ cos config --list
```

_See code: [src/commands/config.ts](https://github.com/bougieL/cos/blob/v0.0.8/src/commands/config.ts)_

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

## `cos object [ACTION] [ACTIONVALUE]`

object actions

```
USAGE
  $ cos object [ACTION] [ACTIONVALUE]

ARGUMENTS
  ACTION       action name, oneof upload
  ACTIONVALUE  action value

OPTIONS
  -h, --help  show CLI help
  -l, --list

EXAMPLE
  $ cos object
```

_See code: [src/commands/object.ts](https://github.com/bougieL/cos/blob/v0.0.8/src/commands/object.ts)_

## `cos update [CHANNEL]`

update the cos CLI

```
USAGE
  $ cos update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.9/src/commands/update.ts)_
<!-- commandsstop -->
