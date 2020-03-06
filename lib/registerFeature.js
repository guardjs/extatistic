

import error from './errorMessages.js'
/**
 * @param {array} featureList A list of all features
 * @param {function} newFeature A single function with a number or string return value 
 */
const registerFeature = (featureList, newFeature) => {
  if (typeof newFeature !== 'function')
    throw new Error(error['function'])
  if (typeof newFeature(sampleTestParam) === 'undefined')
    throw new Error(error['primitive type'])
  if (typeof featureList !== 'object' || typeof featureList.push !== 'function')
    throw new Error(error['feature array'])

  featureList.push(newFeature)
}

const sampleTestParam = {
  orginalString: 'test value',
  tokens: ['test', 'value'],
  separators: [' ']
}

export default registerFeature