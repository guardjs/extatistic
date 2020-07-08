// Developed by easa

// import someFeatures from './syntaxFeatures'
import registerFeature from './register/function/registerFeature'
import errorMessages from './common/errorMessages'
const featuresList = {}
const featureNames = Object.keys(featuresList)
const nameFeatureRecursive = (name, number = 1) => {
  const tempname = `${name}${number}`
  if (typeof featuresList[tempname] === 'undefined')
    return tempname
  return nameFeatureRecursive(name, number + 1)
}

/**
 * @returns List of the names of features in the feature-set
 */
export const getListOfFeaturesName = () => featureNames.reduce((res, name) => res += ', ' + name)

/**
 * @returns Number of registered features in the feature-set
 */
export const getNumberOfFeatures = () => featureNames.length

/**
 * @returns Raw of calculated features that are listed in feature-set
 * @param {string} inputString source string [code-string, regular-string]
 */
export const extractfeaturesRaw = inputString => featureNames.reduce((res, model) =>
  res += `${res !== '' ? ', ' : ''}${featuresList[model](inputString)}`
  , '')

/** 
  * Add a feature-model to set of features to calculate them on demand
  * @param {function} featureModel a function that caclulates a feature (source-string, token-number)
 */
export const registerAFeature = featureModel => {
  if (typeof featureModel.name !== 'string')
    throw new Error(errorMessages['anonymous function'])
  const name = nameFeatureRecursive(featureModel.name)
  featuresList[name](registerFeature(featureModel))
}

/** 
  * Add a list of feature-models to set of features to calculate them on demand
  * @param {array} featureModelsList a list of features that
*/
export const registerFeaturesList = featureModelsList => {
  featureModelsList.forEach(fm => { registerFeature(featuresList, fm) })
}
