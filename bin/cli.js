#!/usr/bin/env node

const index = require('../index')
require('yargs')
  .middleware(argv => {
    const thisPath = argv[1]
    const node_modulesPath = /^(.*)node_modules/.exec(thisPath) || []
    argv.basePath = node_modulesPath[1] || __dirname
    argv.app = index
    return argv
  })
  .commandDir('./command/')
  .demandCommand()
  .help()
  .argv