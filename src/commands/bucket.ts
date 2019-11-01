import { Command, flags } from '@oclif/command'
import { getCompleteConfig, COS } from '../lib'

export default class Bucket extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ cos bucket --list
`
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    list: flags.boolean({ char: 'l', description: 'List buckets' })
  }

  static args = [
    { name: 'configKey', description: 'Config key, id or key' },
    { name: 'configValue', description: 'Config value' }
  ]

  async run() {
    const { args, flags } = this.parse(Bucket)
    const cos = new COS(getCompleteConfig())
    if (flags.list) {
      cos.listBuckets()
    }
  }
}
