

var fs = require('fs')
var rgxFeatures = require('./rgxPatternCounter')
var app = rgxFeatures()

/**
 * folders to look for feature extraction function
 */
load('.')

function load(folder) {
	var files = fs.readdirSync(__dirname + '\\' + folder)
	if (!files) throw new Error(err)
	files.forEach(file => {
		var featureName = app[file] ? (folder + file) : file
		featureName = /^([\d\w]+)\.js/gi.exec(featureName)
		// prevent this file from loading
		if (!featureName || 'index'.indexOf(featureName[1]) >= 0) return void 0
		// feature : feature extractor model
		app[featureName[1]] = require(`./${folder}/${file}`)
	})
}

module.exports = app