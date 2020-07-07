#! /usr/bin/env node

import featureExtractorHandler from '../extractor'
import filehandler from '../fileHandler'
require('yargs')
  .middleware(argv => {
    argv.app = featureExtractorHandler
    argv.file = filehandler
    return argv
  })
  .commandDir('./command/')
  .demandCommand()
  .help()
  .argv
