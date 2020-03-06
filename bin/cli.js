var app = require('../syntaxFeatures')
var filehandler = require('../fileHandler')

require('yargs')
  .middleware(argv => {
    argv.app = app
    argv.file = filehandler
    return argv
  })
  .commandDir('./cmd/')
  .demandCommand()
  .help()
  .argv
