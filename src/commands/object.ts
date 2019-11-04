import { Command, flags } from '@oclif/command'
import { getCompleteConfig, COSObject, getBucketConfig, cwd } from '../lib'

export default class ObjectCli extends Command {
  static description = 'Object actions'

  static examples = [`$ cos object`]

  static flags = {
    help: flags.help({ char: 'h' }),
    list: flags.boolean({ char: 'l' })
  }

  static args = [
    {
      name: 'action',
      description: 'action name, oneof upload'
    },
    { name: 'actionValue', description: 'action value' }
  ]

  async run() {
    const { args, flags } = this.parse(ObjectCli)
    const object = new COSObject({
      ...getCompleteConfig(),
      ...getBucketConfig()
    })
    if (flags.list) {
      const { Contents } = await object.list(args.actionValue)
      const trimedContent = Contents.map((item: any) => ({
        Key: item.Key,
        LastModified: item.LastModified,
        Size: item.Size
      }))
      console.table(trimedContent)
    }
    if (args.action === 'upload') {
      object.upload(cwd(args.actionValue))
    }
  }
}
