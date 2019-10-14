var syntaxesFeatures = require('./syntax')

var app = syntaxesFeatures,
	kys = Object.keys(app)

var func = {
	isFeatureNameRequired: () => kys.reduce((res, name) => res += ', ' + name),
	isFeatureCountRequired: () => kys.length,
	isRawRequired: function () {
		return kys.reduce((res, func) => {
			return res += `${res !== '' ? ', ' : ''}${app[func](this.input)}`
		}, '')
	}
}

module.exports = function (opt) {
	return Object.keys(opt).reduce((result, i) => {
		if (opt[i] && typeof func[i] === 'function') {
			result += func[i].call(opt)
			return result
		} return result
	}, '')
}
