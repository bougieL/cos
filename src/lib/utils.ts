import chalk from 'chalk'
import * as path from 'path'
import { dateFormat } from '@bougiel/utils'

const consoleLog = console.log

const now = () => dateFormat(new Date(), 'hh:mm:ss')

export const log = {
  info(...message: string[]) {
    message.forEach((m) => {
      consoleLog(chalk.gray(`[${now()}]`) + '    ' + chalk.blue(m))
    })
  },
  warnning(...message: string[]) {
    message.forEach((m) => {
      consoleLog(chalk.gray(`[${now()}]`) + '    ' + chalk.yellow(m))
    })
  },
  error(...message: string[]) {
    message.forEach((m) => {
      consoleLog(chalk.gray(`[${now()}]`) + '    ' + chalk.red(m))
    })
  },
  success(...message: string[]) {
    message.forEach((m) => {
      consoleLog(chalk.gray(`[${now()}]`) + '    ' + chalk.green(m))
    })
  }
}

export function cwd(...paths: string[]) {
  const base = /^\//.test(paths[0]) ? '/' : process.cwd()
  return path.join(base, ...paths)
}
