#! /usr/bin/env node

import {featureExtractorHandler, registerFeaturesList, getListOfFeaturesName} from '../index'
import filehandler from '..//lib/fileHandler'
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
