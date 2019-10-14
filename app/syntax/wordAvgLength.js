

var wordMap = require('./common/parseWords')
var wordCount = require('./wordCount')

function app(str) {
  var wMap = wordMap(str)
  var count = wordCount(str)
  var weightXword = Object.keys(wMap).reduce(function (multiple, word) {
    multiple += word.length * wMap[word]
    return multiple
  }, 0)
  return (weightXword / count) | 0
}

module.exports = app