

exports.command = ['serve', 'run', 'start', 'extract']
exports.desc = 'Extract features.'
exports.builder = (arg) => {
  arg.positional('folder', {
    alias: 'f',
    type: 'string',
    default: './data',
    describe: '[optional] Directory of JS files as input.',
  })
  arg.positional('input', {
    alias: 'i',
    type: 'string',
    describe: '[optional] Input text.'
  })
  arg.positional('output', {
    alias: 'o',
    type: 'string',
    describe: '[optional] Output csv file address.'
  })
}
exports.handler = argv => {
  /* TODO:
    if a input string was served do on it otherwise use the files in data folder
    if there's any output then write on file otherwise log on console
   */
  if (typeof argv.input === 'string')
    console.log(argv.app.extractfeaturesRaw(argv.input))
  // else if (typeof argv.data === 'string') { }
  else {
    // TODO: look for files in folder and extractfeaturesRaw for each file
    console.log('underconstruction')
  }
}
