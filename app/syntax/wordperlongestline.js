

var rgxmatch = require('./common/exRgxPatt')
var wordcount = require('./wordCount')

function app(str) {
  var line = rgxmatch(str, /([\w\W][^\n])*/g) || []
  if (line.length < 1) return 0
  var maxLine = line.find(i => i.length === Math.max(...line.map(i => i.length))) || ' '
  return wordcount(maxLine)
}

module.exports = app