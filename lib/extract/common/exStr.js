

/**
 * return all string from codeString 
 * @param {string} source the source string
 */
function app(source) {
	if (typeof source !== 'string') throw new Error('param should be code string')

	var s1 = source.match(/"(.*?)[^\\]"/gi) || []
	var s2 = source.match(/'(.*?)[^\\]'/gi) || []
	var s3 = source.match(/`(.*?)[^\\]`/gi) || []

	return s1.concat(s2).concat(s3)
}

module.exports = app