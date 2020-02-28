"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerFeaturesList = exports.registerAFeature = exports.extractfeaturesRaw = exports.getNumberOfFeatures = exports.getListOfFeaturesName = void 0;

var _syntaxFeatures = _interopRequireDefault(require("./syntaxFeatures"));

var _registerFeature = _interopRequireDefault(require("./lib/registerFeature"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Developed by easa
const featuresList = _syntaxFeatures.default;
const featureNames = Object.keys(featuresList);
/**
 * Returns the list of names of features in feature-set
 */

const getListOfFeaturesName = () => featureNames.reduce((res, name) => res += ', ' + name);
/**
 * Returns the length of feature-set (the count of features)
 */


exports.getListOfFeaturesName = getListOfFeaturesName;

const getNumberOfFeatures = () => featureNames.length;
/**
 * Returns a raw of calculated features that are listed in feature-set
 * @param {string} inputString source string [code-string, regular-string]
 */


exports.getNumberOfFeatures = getNumberOfFeatures;

const extractfeaturesRaw = inputString => featureNames.reduce((res, model) => res += `${res !== '' ? ', ' : ''}${featuresList[model](inputString)}`, '');
/** 
  * Add a feature-model to set of features to calculate them on demand
  * @param {function} featureModel a function that caclulates a feature (source-string, token-number)
 */


exports.extractfeaturesRaw = extractfeaturesRaw;

const registerAFeature = featureModel => {
  (0, _registerFeature.default)(featuresList, featureModel);
};
/** 
  * Add a list of feature-models to set of features to calculate them on demand
  * @param {array} featureModelsList a list of features that
*/


exports.registerAFeature = registerAFeature;

const registerFeaturesList = featureModelsList => {
  (0, _registerFeature.default)(featuresList, featureModelsList);
};

exports.registerFeaturesList = registerFeaturesList;