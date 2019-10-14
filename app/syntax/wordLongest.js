

var wordMap = require('./common/parseWords')

function app(str) {
  var wMap = wordMap(str)
  var wordcount = Object.keys(wMap)
  if (wordcount.length < 1) return 0
  var max = Math.max(...wordcount.map(i => i.length))
  return max
}

module.exports = app