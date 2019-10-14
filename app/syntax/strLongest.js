

var strs = require('./common/exStr')

function app(str) {
  var strMap = strs(str)
  if (strMap.length < 1) return 0
  var max = Math.max(...strMap.map(i => i.length))
  return max
}

module.exports = app
