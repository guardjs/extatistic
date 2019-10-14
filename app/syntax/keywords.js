

var wordMap = require('./common/parseWords')
var reserved = require('./common/reservedWords')

function app(str) {
  var wMap = wordMap(str)
  var wordarray = Object.keys(wMap)
  var keys = wordarray.map(i => { if (reserved.indexOf(i) > 0) return 1 })
  return keys.reduce((count, curr) => { count += wMap[curr] || 0; return count }, 0)
}

module.exports = app