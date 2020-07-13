

var rgxmatch = require('./exRgxPatt')

function app(codeString) {
  if (typeof codeString !== 'string') throw new Error('param codeString should be code string')
  var words = rgxmatch(codeString, /\b[A-Za-z\d-_]+\b/g)
  return words.reduce((map, word) => {
    map[word] = (map[word] || 0) + 1
    return map
  }, {})
}

module.exports = app