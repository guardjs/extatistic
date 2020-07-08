const fs = require('fs')
const path = require('path')
exports.command = ['create', 'create-feature']
exports.desc = 'create a feature file'
exports.builder = (arg) => {
  arg.positional('featureName', {
    alias: 'f',
    type: 'string',
    default: 'newFeature',
    describe: 'The name of the new feature',
  })
}
exports.handler = argv => {
  fs.readFile('./template/feature.js', function read(err, data) {
    if (err) { throw err; }
    newPath = path.join(argv.base, argv['f'])
    fs.writeFile(newPath, data, function (err) {
      if (err) { throw err; }
      console.log(`NEW FEATURE ADDED: ${newPath}`);
    })
  })
}