import * as TCOS from 'cos-nodejs-sdk-v5'

export interface IConfig {
  SecretKey: string
  SecretId: string
}

export class COS {
  cos: any
  config: IConfig
  constructor(config: IConfig) {
    this.config = config
    this.cos = new TCOS(config)
  }
}
