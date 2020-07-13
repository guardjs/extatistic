const fs = require('fs')
const path = require('path')
const yargonaut = require('yargonaut')
const chalk = yargonaut.chalk()
exports.command = ['serve', 'run', 'start', 'extract', 'execute']
exports.desc = 'Execute all features on all source texts.'
exports.builder = (arg) => {
  arg.positional('folder', {
    alias: 'f',
    type: 'string',
    // default: './data',
    describe: '[optional] Directory of JS files as input.',
  })
  arg.positional('input', {
    alias: 'i',
    type: 'string',
    describe: '[optional] Input text.'
  })
  arg.positional('output', {
    alias: 'o',
    type: 'string',
    describe: '[optional] Output csv file address.'
  })
}
exports.handler = argv => {
  argv.featuredir.forEach(featureDirectory => {
    if (!fs.existsSync(featureDirectory)) return console.log(chalk.red(featureDirectory + " Doesn't exists!"))
    fs.readdir(featureDirectory, (err, featureList) => {
      if (err) { throw chalk.red(err) }
      const features = featureList.map(feature => require(path.join(featureDirectory, feature)))
      argv.lib.registerFeaturesList(features)
      argv.inputdir.forEach(inputDirectory => {
        fs.readdir(inputDirectory, (err, inputList) => {
          if (err) { throw chalk.red(err) }
          inputList.forEach(input => {
            const sourceString = fs.readFileSync(path.join(inputDirectory, input))
            const CSVRaw = argv.lib.extractfeaturesRaw(sourceString).join(', ')
            console.log(CSVRaw)
          })
        })
      })
    })
  })
}