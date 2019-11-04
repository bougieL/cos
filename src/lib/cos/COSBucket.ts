import { promisify } from 'util'
import { COS } from './COS'

export class COSBucket extends COS {
  list(region: string = '') {
    const getService = promisify(this.cos.getService).bind(this.cos)
    return getService({ Region: region }).catch(console.error)
  }
  create(bucketName: string, appId: string, region: string) {
    const putBucket = promisify(this.cos.putBucket).bind(this.cos)
    return putBucket({
      Bucket: `${bucketName}-${appId}`,
      Region: region,
      ACL: 'public-read'
    }).catch(console.error)
  }
  delete(bucketName: string, region?: string) {
    const deleteBucket = promisify(this.cos.deleteBucket).bind(this.cos)
    return deleteBucket({
      Bucket: bucketName /* 必须 */,
      Region: region /* 必须 */
    }).catch(console.error)
  }
}
