var yargonaut = require('yargonaut')
var chalk = yargonaut.chalk()
exports.command = ['count', 'total']
exports.desc = 'Show total count of registered features.'
exports.builder = {}
exports.handler = function (argv) {
  if (err) { throw chalk.red(err) }
  console.log(argv.app.calculateFeatureCount())
}