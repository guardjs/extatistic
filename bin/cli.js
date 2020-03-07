#! /usr/bin/env node
console.log("extatistic - extract")

// import fs from 'fs'
// import app from '../syntaxFeatures'
// import filehandler from '../fileHandler'

require('yargs')
  .middleware(argv => {
    argv.fs = {} // fs
    argv.app = {} // app
    argv.file = {} // filehandler
    return argv
  })
  .commandDir('./cmd/')
  .demandCommand()
  .help()
  .argv
