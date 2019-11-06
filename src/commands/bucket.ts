import { Command, flags } from '@oclif/command'
import { getCompleteConfig, getAppIdFromConfig, COSBucket } from '../lib'

export default class Bucket extends Command {
  static description = 'bucket actions'

  static examples = [`$ cos bucket --list ap-chengdu`]

  static flags = {
    help: flags.help({ char: 'h' }),
    list: flags.boolean({ char: 'l' }),
    region: flags.string({
      char: 'r',
      description: 'set bucket region'
    })
  }

  static args = [
    {
      name: 'action',
      description: 'oneof create, delete',
      default: 'list'
    },
    { name: 'actionValue', description: 'action value' }
  ]

  async run() {
    const { args, flags } = this.parse(Bucket)
    const bucket = new COSBucket(getCompleteConfig())
    if (flags.list) {
      bucket.list(flags.region).then((data: any) => console.table(data.Buckets))
      return
    }
    if (args.action === 'create') {
      bucket.create(
        args.actionValue,
        getAppIdFromConfig(),
        flags.region as string
      )
    }
    if (args.action === 'delete') {
      bucket.delete(args.actionValue, flags.region)
    }
  }
}
