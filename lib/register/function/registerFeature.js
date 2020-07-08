

const error = require('../../common/errorMessages.js')
/**
 * @returns {function} featureList A list of all features
 * @param {function} newFeature A single function with a number or string return value 
 */
const registerFeature = (newFeature) => {
  if (typeof newFeature !== 'function')
    throw new Error(error['function type'])
  if (typeof newFeature(sampleTestParam) === 'undefined')
    throw new Error(error['primitive type'])
  // if (typeof featureList !== 'object' || typeof featureList.push !== 'function')
  //   throw new Error(error['feature array'])

  return newFeature
}

const sampleTestParam = {
  orginalString: 'test value',
  tokens: ['test', 'value'],
  separators: [' ']
}

module.exports = registerFeature