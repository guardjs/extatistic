"use strict";

var app = require('../syntaxFeatures');

var filehandler = require('../fileHandler');

require('yargs').middleware(argv => {
  argv.app = app;
  argv.file = filehandler;
  return argv;
}).commandDir('./command/').demandCommand().help().argv;