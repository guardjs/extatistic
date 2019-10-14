

var wordMap = require('./common/parseWords')

function app(str) {
  var wMap = wordMap(str)
  return Object.keys(wMap).reduce((count, curr) => {
    count += wMap[curr]
    return count
  }, 0)
}

module.exports = app