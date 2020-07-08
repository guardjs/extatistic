const fs = require('fs')
const path = require('path')
var yargonaut = require('yargonaut')
const { array } = require('yargs')
var chalk = yargonaut.chalk()
exports.command = ['create', 'create-feature']
exports.desc = 'create a feature file (override)'
exports.builder = (arg) => {
  arg.positional('name', {
    alias: 'n',
    type: 'string',
    default: 'newFeature.js',
    describe: 'The name of the new feature',
  })
}
exports.handler = argv => {
  const src = path.join(argv.here, '../template/feature.js')
  const { name, ext } = path.parse(argv['name'])
  if (!ext)
    argv['name'] += '.js'
  const dst = path.join(argv.there, argv['name'])

  fs.readFile(src, function read(err, data) {
    if (err) { throw chalk.red(err) }
    data = data.toString().replace(/newFeature/g, name)
    fs.writeFile(dst, data, function (err) {
      if (err) { throw chalk.red(err) }
      console.log(chalk.green(`NEW FEATURE ADDED TO ${dst}`));
    })
  })
}