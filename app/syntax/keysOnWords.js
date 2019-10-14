

var keys = require('./keywords')
var wrds = require('./wordCount')

function app(str) {
  return ((keys(str) / wrds(str)) * 10000) | 0
}

module.exports = app