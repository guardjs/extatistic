

import * as index from './index';

test('Module is up!', () => {
  expect(typeof index).toBe('object');
})

test('Get list of features should be a function.', () => {
  expect(typeof index['getListOfFeaturesName']).toBe('function');
})

test('Get number of features should be a function.', () => {
  expect(typeof index['getNumberOfFeatures']).toBe('function');
})

test('Extract a raw of features should be a function.', () => {
  expect(typeof index['extractfeaturesRaw']).toBe('function');
})

test('Register a feature should be a function.', () => {
  expect(typeof index['registerAFeature']).toBe('function');
})

test('Register features list should be a function.', () => {
  expect(typeof index['registerFeaturesList']).toBe('function');
})

test('Register features list should be a function.', () => {
  //const result = index.registerAFeature()
})
