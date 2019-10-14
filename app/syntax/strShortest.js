

var strs = require('./common/exStr')

function app(str) {
  var strMap = strs(str)
  if (strMap.length < 1) return 0
  var min = Math.min(...strMap.map(i => i.length))
  return min
}

module.exports = app
