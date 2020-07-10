var yargonaut = require('yargonaut')
var chalk = yargonaut.chalk()
exports.command = ['count', 'total']
exports.desc = 'Show total count of registered features.'
exports.builder = {}
exports.handler = function (argv) {
  // if (err) { throw chalk.red(err) }
  // reset, bold, dim, italic, underline, inverse, hidden, strikethrough
  // black, red, green, yellow, blue, magenta, cyan, white, gray, grey
  // bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite
  argv.app.register
  console.log(argv.app.calculateFeatureCount())
}