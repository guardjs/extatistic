const {
  getListOfFeaturesName,
  getNumberOfFeatures,
  extractfeaturesRaw,
  registerAFeature,
  registerFeaturesList
} = require('./index')

describe('All Module functions should be available!', () => {
  test('Get list of features should be a function.', () => {
    expect(typeof getListOfFeaturesName).toBe('function')
  })
  test('Get number of features should be a function.', () => {
    expect(typeof getNumberOfFeatures).toBe('function')
  })
  test('Extract a raw of features should be a function.', () => {
    expect(typeof extractfeaturesRaw).toBe('function')
  })
  test('Register a feature should be a function.', () => {
    expect(typeof registerAFeature).toBe('function')
  })
  test('Register features list should be a function.', () => {
    expect(typeof registerFeaturesList).toBe('function')
  })
})