

var wordMap = require('./common/parseWords')

function app(str) {
  var wMap = wordMap(str)
  var wordcount = Object.keys(wMap)
  if (wordcount.length < 1) return 0
  var min = Math.min(...wordcount.map(i => i.length))
  return min
}

module.exports = app