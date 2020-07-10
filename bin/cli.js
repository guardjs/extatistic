#!/usr/bin/env node
const process = require('process')
const arg = process.argv
const { inputDirectories, outputDirectories, featureDirectories } = require('./getConfig')(arg)
const index = require('../lib')

require('yargs')
  .middleware(argv => {
    const node_modulesPath = /^(.*)node_modules/.exec(arg[1]) || []
    argv.way = arg[1]
    argv.there = node_modulesPath[1]
    argv.here = __dirname
    argv.inputdir = inputDirectories
    argv.outputdir = outputDirectories
    argv.featuredir = featureDirectories
    argv.lib = index
    return argv
  })
  .commandDir('./command/')
  .demandCommand()
  .help()
  .argv