exports.command = ['list', 'features']
exports.desc = 'Show a list of registered features.'
exports.builder = {}
exports.handler = function (argv) {
  console.log(argv.app.getListOfFeaturesName())
}
