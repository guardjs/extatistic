

/**
 * return all string from codeString 
 * @param {code string} codeString 
 */
function app(codeString) {
	if (typeof codeString !== 'string') throw new Error('param should be code string')

	var s1 = codeString.match(/"(.*?)[^\\]"/gi) || []
	var s2 = codeString.match(/'(.*?)[^\\]'/gi) || []
	var s3 = codeString.match(/`(.*?)[^\\]`/gi) || []

	return s1.concat(s2).concat(s3)
}

module.exports = app