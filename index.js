

var app = require('./app')

function main() {
  return {
    status: 'version 1!',
    version: '1.0.0',
    auther: 'github.com/easa',
    desc: 'The NPM package to perform statistical models on any text and extract specific features',
    featuresList: app({ isFeatureNameRequired: true }),
    featuresCount: app({ isFeatureCountRequired: true }),
    extractFeatures: (input) => app({ input: input, isRawRequired: true })
  }
}

module.exports = main;