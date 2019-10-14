

var strs = require('./common/exStr')

function app(str) {
  var strMap = strs(str)
  if (strMap.length < 1) return 0
  var str20 = strMap.map(i => { if (i) if (i.length < 20) return 1 })
  return str20.length
}

module.exports = app
