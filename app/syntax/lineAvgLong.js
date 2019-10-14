

var rgxmatch = require('./common/exRgxPatt')

function app(str) {
  var line = rgxmatch(str, /([\w\W][^\n])*/g) || []
  var linelong = line.map(i => i.length)
  var avgLong = linelong.reduce((p, c) => { p += (c ? c : 0); return p }, 0) / linelong.length
  return avgLong
}

module.exports = app