

// it's a rare so 
function app(str) {
  var sa1 = str.match(/=\s*?"(.*?)[^\\]"/gi) || []
  var sa2 = str.match(/=\s*?'(.*?)[^\\]'/gi) || []
  var sa3 = str.match(/=\s*?`(.*?)[^\\]`/gi) || []
  var matches = sa1.concat(sa2).concat(sa3)
  return matches ? matches.length : 0
}

module.exports = app