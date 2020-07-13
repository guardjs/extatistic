// Developed by easa
// TODO: get all features here
// import someFeatures from './syntaxFeatures'
const registerFeature = require('./register/function/registerFeature')
const errorMessages = require('./common/errorMessages')
const featuresList = {}
const nameFeatureRecursive = (name, number = 0) => {
  const tempname = `${name}${number || ''}`
  if (typeof featuresList[tempname] === 'undefined')
    return tempname
  return nameFeatureRecursive(name, number + 1)
}
/** 
 * Helper Functions
 */
exports.useHelperFunctions = () => ({
  /** 
   * @returns List of keywords in the string
   */
  getParsedKeywords: (source) => {
    //console.log('getParsedKeywords', arguments)
    return source
  },
  /**
   * @returns List of all words in the string
   */
  getParsedWords: (source) => {
    //console.log('getParsedWords', arguments)
    return source
  }
})
/**
 * @returns List of the names of features in the feature-set
 */
exports.getListOfFeaturesName = () => Object.keys(featuresList)

/**
 * @returns Number of registered features in the feature-set
 */
exports.getNumberOfFeatures = () => Object.keys(featuresList).length

/**
 * @returns Raw of calculated features that are listed in feature-set
 * @param {string} inputString source string [code-string, regular-string]
 */
exports.extractfeaturesRaw = inputString =>
  Object.keys(featuresList)
    .map(model => featuresList[model](inputString))

/** 
  * Add a feature-model to set of features to calculate them on demand
  * @param {function} featureModel a function that caclulates a feature (source-string, token-number)
 */
exports.registerAFeature = featureModel => {
  if (typeof featureModel.name !== 'string')
    throw new Error(errorMessages['anonymous function'])
  const name = nameFeatureRecursive(featureModel.name)
  featuresList[name] = registerFeature(featureModel)
}

/** 
  * Add a list of feature-models to set of features to calculate them on demand
  * @param {array} featureModelsList a list of features that
*/
exports.registerFeaturesList = featureModelsList => {
  featureModelsList.forEach(f => { registerFeature(f) })
}
