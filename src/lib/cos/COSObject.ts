import { promisify } from 'util'
import * as path from 'path'
import * as fs from 'fs-extra'
import * as ProgressBar from 'progress'
import chalk from 'chalk'
import { COS, IConfig } from './COS'

interface IObjectConfig extends IConfig {
  Bucket: string
  Region: string
}

export class COSObject extends COS {
  bucketName: string
  region: string
  constructor(params: IObjectConfig) {
    super(params)
    this.bucketName = params.Bucket
    this.region = params.Region
  }
  list(prefix: string = '') {
    const getBucket = promisify(this.cos.getBucket).bind(this.cos)
    return getBucket({
      Bucket: this.bucketName,
      Region: this.region,
      Prefix: prefix
    }).catch(console.error)
  }
  uploadDir(dirPath: string) {
    const uploadFiles = promisify(this.cos.uploadFiles).bind(this.cos)
    const dirFilePaths = collectDirFilePaths(dirPath)
    const files = dirFilePaths.map((filePath: string) =>
      createUploadFileItem(
        this.bucketName,
        this.region,
        path.relative(dirPath, filePath),
        filePath
      )
    )
    const filesLength = files.length
    const bar = new ProgressBar('  uploading [:bar] :etas :key', {
      complete: chalk.green('>'),
      incomplete: chalk.gray('-'),
      width: 20,
      total: filesLength
    })
    return uploadFiles({
      files,
      SliceSize: 1024 * 1024,
      onFileFinish(err: any, data: any, options: any) {
        bar.tick({
          key: options.Key
        })
      }
    })
  }
}

function createUploadFileItem(
  bucketName: string,
  region: string,
  key: string,
  filePath: string
) {
  return {
    Bucket: bucketName,
    Region: region,
    Key: key,
    FilePath: filePath
  }
}

function collectDirFilePaths(dirPath: string) {
  const files: string[] = []
  ;(function recur(parentPath) {
    fs.readdirSync(parentPath).forEach((value) => {
      const childPath = path.join(parentPath, value)
      if (fs.statSync(childPath).isDirectory()) {
        recur(childPath)
      } else {
        files.push(childPath)
      }
    })
  })(dirPath)
  return files
}
