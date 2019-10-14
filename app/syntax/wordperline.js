

var rgxmatch = require('./common/exRgxPatt')
var wordcount = require('./wordCount')

function app(str) {
  var lineCount = rgxmatch(str, /\n/g).length || 1
  return (wordcount(str) / lineCount) | 0
}

module.exports = app