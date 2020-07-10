const fs = require('fs')
const path = require('path')
const yargonaut = require('yargonaut')
const chalk = yargonaut.chalk()
exports.command = ['list', 'features']
exports.desc = 'Show a list of registered features.'
exports.builder = {}
exports.handler = function (argv) {
  fs.readdir(`${argv.fea}`, (err, files) => {
    if (err) { throw chalk.red(err) }
    const features = files.map(f => require(path.join(`${argv.fea}`, f)))
    argv.app.registerFeaturesList(features)
    const listoffeatures = argv.app.getListOfFeaturesName()
    // listoffeatures.reduce((res, name) => res += (res ? ', ' : '') + name, '')
    console.log(chalk.green('list of features are: '), chalk.bgBlue(' ', ...listoffeatures, ' '))
  })
}
