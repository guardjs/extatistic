// Developed by easa

import someFeatures from './syntaxFeatures'
import registerFeature from './lib/registerFeature'
const featuresList = someFeatures
const featureNames = Object.keys(featuresList)

/**
 * Returns the list of names of features in feature-set
 */
export const getListOfFeaturesName = () => featureNames.reduce((res, name) => res += ', ' + name)

/**
 * Returns the length of feature-set (the count of features)
 */
export const getNumberOfFeatures = () => featureNames.length

/**
 * Returns a raw of calculated features that are listed in feature-set
 * @param {string} inputString source string [code-string, regular-string]
 */
export const extractfeaturesRaw = inputString => featureNames.reduce((res, model) =>
  res += `${res !== '' ? ', ' : ''}${featuresList[model](inputString)}`
  , '')

/** 
  * Add a feature-model to set of features to calculate them on demand
  * @param {function} featureModel a function that caclulates a feature (source-string, token-number)
 */
export const registerAFeature = featureModel => { registerFeature(featuresList, featureModel) }

/** 
  * Add a list of feature-models to set of features to calculate them on demand
  * @param {array} featureModelsList a list of features that
*/
export const registerFeaturesList = featureModelsList => { registerFeature(featuresList, featureModelsList) }
