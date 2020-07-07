exports.command = ['count', 'total']
exports.desc = 'Show total count of registered features.'
exports.builder = {}
exports.handler = function (argv) {
  console.log(argv.app.calculateFeatureCount())
}