


/**
 * returns array of all matched string 
 * @param {string} source the source text to find the pattern in it
 * @param {string} pattern regexp pattern to match or a simple string
 */
function app(source, pattern) {
	if (typeof source !== 'string') throw new Error('param "source" should be code string')
	if (!pattern) throw new Error('param pattern should be code string')

	var matches = source.match(pattern)
	return matches ? matches : []
}

module.exports = app