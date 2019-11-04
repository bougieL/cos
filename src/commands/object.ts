import { Command, flags } from '@oclif/command'
import { getCompleteConfig, COSObject, getBucketConfig } from '../lib'

export default class ObjectCli extends Command {
  static description = 'Object actions'

  static examples = [`$ cos object`]

  static flags = {
    help: flags.help({ char: 'h' })
  }

  static args = [
    {
      name: 'action',
      description: 'action name, oneof list',
      default: 'list'
    },
    { name: 'actionValue', description: 'action value' }
  ]

  async run() {
    const { args, flags } = this.parse(ObjectCli)
    const object = new COSObject({
      ...getCompleteConfig(),
      ...getBucketConfig()
    })
    if (args.action === 'list') {
      const { Contents } = await object.list(args.actionValue)
      const trimedContent = Contents.map((item: any) => ({
        Key: item.Key,
        LastModified: item.LastModified,
        Size: item.Size
      }))
      console.table(trimedContent)
    }
  }
}
