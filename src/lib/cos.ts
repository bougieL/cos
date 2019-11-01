import * as TCOS from 'cos-nodejs-sdk-v5'

export class COS {
  cos: any
  constructor(config: object) {
    this.cos = new TCOS(config)
  }
  listBuckets() {
    this.cos.getService((error: any, data: any) => {
      if (error) {
        console.error(error)
        return
      }
      console.table(data.Buckets)
    })
  }
}
