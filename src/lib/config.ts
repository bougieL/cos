import * as path from 'path'
import * as fs from 'fs-extra'

const configPath = path.resolve(__dirname, '..', 'config.json')

export const setSerectKey = (key: string) => {
  const config = readConfig()
  config.SecretKey = key
  writeConfig(config)
}

export const setSecretId = (id: string) => {
  const config = readConfig()
  config.SecretId = id
  writeConfig(config)
}

export const getConfigList = () => {
  return Object.entries(readConfig())
}

export const getCompleteConfig = () => {
  const config = readConfig()
  if (!config.SecretKey) {
    throw new Error(`Read SecretKey faild`)
  }
  if (!config.SecretId) {
    throw new Error(`Read SecretId faild`)
  }
  return config
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
