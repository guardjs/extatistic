var yargonaut = require('yargonaut')
var chalk = yargonaut.chalk()
exports.command = ['list', 'features']
exports.desc = 'Show a list of registered features.'
exports.builder = {}
exports.handler = function (argv) {
  if (err) { throw chalk.red(err) }
  console.log(argv.app.getListOfFeaturesName())
}
