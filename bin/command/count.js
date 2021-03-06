const fs = require('fs')
const path = require('path')
const yargonaut = require('yargonaut')
const chalk = yargonaut.chalk()
exports.command = ['count', 'total']
exports.desc = 'Show total count of registered features.'
exports.builder = {}
exports.handler = function (argv) {
  argv.featuredir.forEach(fdir => {
    fs.readdir(fdir, (err, files) => {
      if (err) { throw chalk.red(err) }
      const features = files.map(f => require(path.join(fdir, f)))
      argv.lib.registerFeaturesList(features)
      const countOfFeatures = argv.lib.getNumberOfFeatures()
      console.log(chalk.bgBlue(' ' + countOfFeatures + ' '))
    })
  })
}