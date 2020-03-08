#! /usr/bin/env node

// FIXME: Because the ES6 module are not working on ---
// Jest subprocess-cli test, then on CLI we're using common.js format
const featureExtractorHandler = require('../extractor')
const filehandler = require('../fileHandler')
require('yargs')
  .middleware(argv => {
    argv.app = featureExtractorHandler
    argv.file = filehandler
    return argv
  })
  .commandDir('./cmd/')
  .demandCommand()
  .help()
  .argv
