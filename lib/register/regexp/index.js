

const rgxmatch = require('../../extract/common/exRgxPatt')
const features = require('./patterns')

function app(str) {
  const result = {}
  Object.keys(features).forEach(f => {
    const rgx = features[f]
    result[f] = function (str) { return rgxmatch(str, rgx).length }
  })
  return result
}

module.exports = app