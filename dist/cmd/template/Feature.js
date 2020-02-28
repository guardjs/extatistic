"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extatistic = require("extatistic");

const newFeature = sourceString => {
  const {
    getParsedKeywords,
    getParsedWords
  } = _extatistic.useHelperFunctions;
  const parsedWords = getParsedWords(sourceString);
  const parsedKeywords = getParsedKeywords(sourceString);
  return parsedWords.length / parsedKeywords.length;
};

(0, _extatistic.registerAFeature)(newFeature);
var _default = newFeature;
exports.default = _default;