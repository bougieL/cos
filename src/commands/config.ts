import { Command, flags } from '@oclif/command'
import { setSecretId, setSerectKey, getConfigList } from '../lib'

export default class Config extends Command {
  static description = 'Configure cos'

  static examples = [
    `$ cos config secretKey 12345
$ cos config --list
`
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    list: flags.boolean({ char: 'l', description: 'List config' })
  }

  static args = [
    { name: 'configKey', description: 'Config key, id or key' },
    { name: 'configValue', description: 'Config value' }
  ]

  async run() {
    const { args, flags } = this.parse(Config)
    if (flags.list) {
      this.log(
        getConfigList()
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n')
      )
      return
    }
    if (args.configKey === 'id') {
      setSecretId(args.configValue)
    }
    if (args.configKey === 'key') {
      setSerectKey(args.configValue)
    }
  }
}
