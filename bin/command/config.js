const fs = require('fs')
const path = require('path')
const yargonaut = require('yargonaut')
const { array } = require('yargs')
const getConfig = require('../getConfig')
const chalk = yargonaut.chalk()
exports.command = ['config', 'setting', 'option']
exports.desc = 'Config that save on config file'
exports.builder = (arg) => {
  arg.positional('input', {
    alias: 'i',
    type: 'string',
    describe: 'Input directory of text files (code or document) as input.',
  })
  arg.positional('output', {
    alias: 'o',
    type: 'string',
    describe: 'Output directory to save the results.'
  })
  arg.positional('feature', {
    alias: 'f',
    type: 'string',
    describe: 'The directory of feature (js files) functions.'
  })
}
exports.handler = argv => {
  const optionFilePath = path.join(`${argv.there}`, 'extatistic.config.json')
  const setConfig = (name, value) => {
    let config = {}
    if (fs.existsSync(optionFilePath))
      config = Object.assign(config, require(optionFilePath))
    config[name] = value
    fs.writeFileSync(optionFilePath, `{${Object.keys(config).reduce((r, i) => r += (r ? ',' : '') + `"${i}":"${config[i]}"`, '')}}`)
    console.log(chalk.bgGreen(`${name}: ${value}`))
  }
  const getConfig = (name) => {
    if (!fs.existsSync(optionFilePath)) return console.log('')
    const config = require(optionFilePath)
    console.log(config[name] ? chalk.bgGreen(config[name]) : '')
  }
  Array({ cmd: 'input', conf: 'inputDirectories' },
    { cmd: 'output', conf: 'outputDirectories' },
    { cmd: 'feature', conf: 'featureDirectories' }).forEach(item => {
      if (typeof argv[item.cmd] === 'string')
        if (argv[item.cmd].length > 1)
          setConfig(item.conf, argv[item.cmd])
        else getConfig(item.conf)
    })
}