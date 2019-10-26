

var app = require('./app')

/**
 * feature list: return list of features to see them and order of them
 * feature count: return total features count
 * extract feature: return a raw of features as each model is defined
 */
module.exports = {
  version: '1.0.3',
  auther: 'github.com/easa',
  desc: 'The NPM package to perform statistical models on any text and extract specific features',
  featuresList: app.getListOfFeaturesName,
  featuresCount: app.calculateFeatureCount,
  extractFeatures: app.extractfeaturesRaw
}

// TODO: try features as extensions - add them by demand on any file,
// just call this as : app.newfeature = function model(str) { }