"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _errorMessages = _interopRequireDefault(require("./errorMessages.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {array} featureList A list of all features
 * @param {function} newFeature A single function with a number or string return value 
 */
const app = (featureList, newFeature) => {
  if (typeof newFeature !== 'function') throw new Error(_errorMessages.default['function']);
  if (typeof newFeature(sampleTestParam) === 'undefined') throw new Error(_errorMessages.default['primitive type']);
  if (typeof featureList !== 'object' || typeof featureList.push !== 'function') throw new Error(_errorMessages.default['feature array']);
  featureList.push(newFeature);
};

const sampleTestParam = {
  orginalString: 'test value',
  tokens: ['test', 'value'],
  separators: [' ']
};
var _default = app;
exports.default = _default;