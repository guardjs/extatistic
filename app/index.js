var syntaxesFeatures = require('./syntax')

var app = syntaxesFeatures,
	kys = Object.keys(app)

/**
 * getListOfFeaturesName, 
 * calculateFeatureCount, 
 * extractfeaturesRaw
 */
module.exports = {
	getListOfFeaturesName: () => kys.reduce((res, name) => res += ', ' + name),
	calculateFeatureCount: () => kys.length,
	extractfeaturesRaw: inputString => kys.reduce((res, model) =>
		res += `${res !== '' ? ', ' : ''}${features[model](inputString)}`
		, '')
}
