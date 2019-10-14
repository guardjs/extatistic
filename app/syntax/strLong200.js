

var strs = require('./common/exStr')

function app(str) {
  var strMap = strs(str)
  if (strMap.length < 1) return 0
  return strMap.reduce((count, curr) => {
    count += (curr.length > 200) ? curr.length : 0;
    return count
  }, 0)
}

module.exports = app
