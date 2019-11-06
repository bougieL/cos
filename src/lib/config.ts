import * as path from 'path'
import * as fs from 'fs-extra'
import chalk from 'chalk'

const configPath = '~/.cosrc.json'

export const setSerectKey = (key: string) => setConfigItem('SecretKey', key)

export const setSecretId = (id: string) => setConfigItem('SecretId', id)

export const setAppId = (id: string) => setConfigItem('AppId', id)

export const setBucket = (bucket: string) => setConfigItem('Bucket', bucket)

export const setRegion = (region: string) => setConfigItem('Region', region)

export const getConfigList = () => {
  return Object.entries(readConfig())
}

export const getCompleteConfig = () => {
  const config = readConfig()
  const SecretKey = config.SecretKey
  const SecretId = config.SecretId
  SecretKey || readConfigItemFaild('SecretKey')
  SecretId || readConfigItemFaild('SecretId')
  return {
    SecretKey,
    SecretId
  }
}

export const getBucketConfig = () => {
  const config = readConfig()
  const Bucket = config.Bucket
  const Region = config.Region
  Bucket || readConfigItemFaild('Bucket')
  Region || readConfigItemFaild('Region')
  return {
    Bucket,
    Region
  }
}

export const getAppIdFromConfig = () => {
  const config = readConfig()
  if (!config.AppId) {
    console.log(
      `Could not get AppId from config, run ${chalk.green(
        'cos config AppId xxx'
      )} first`
    )
    throw new Error(`Read AppId faild`)
  }
  return config.AppId
}

function readConfig() {
  fs.ensureFileSync(configPath)
  const content = fs.readFileSync(configPath, 'utf8')
  try {
    const parsedContent = JSON.parse(content)
    return parsedContent
  } catch (error) {
    fs.writeFileSync(configPath, '{}')
    return {}
  }
}

function writeConfig(config: JSON) {
  fs.writeFileSync(configPath, JSON.stringify(config))
}

function setConfigItem(key: string, value: string) {
  const config = readConfig()
  config[key] = value
  writeConfig(config)
}

function readConfigItemFaild(key: string) {
  console.error(
    `Read config.${key} faild, run ${chalk.green(
      `cos config ${key} xxx`
    )} first.`
  )
  throw new Error(`Read config.${key} faild`)
}
