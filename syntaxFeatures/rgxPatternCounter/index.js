

var rgxmatch = require('../common/exRgxPatt')
var features = require('./patterns')

function app(str) {
  var result = {}
  Object.keys(features).forEach(f => {
    var rgx = features[f]
    result[f] = function (str) { return rgxmatch(str, rgx).length }
  })
  return result
}

module.exports = app