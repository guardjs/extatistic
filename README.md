# extatistic

[![Test][test]][testURL] [![Publish NPM][npm]][npmURL] ![version][version]

Perform (statistical) methods on *TEXT*. Extract user defined features. Contains predefined helper functions.
Analyse any source string (code, statement, quote, html, xml, json, etc).  

Github repository: [npm/extatistic](https://github.com/guardjs/extatistic)
| npm package: [npm/extatistic](https://npmjs.com/package/extatistic)

> This project is part of the [Guardjs](https://guardjs.github.io), that used to extract features of normal javascript source code.  
It has the capability to easily reduce or increase a feature model to the feature set through cli or api.

## CLI

`npx extatistic create --name lengthOfstr.js`  
To create a new feature named __lengthOfstr.js__. It can provided as a path.

`npx extatistic list`  
To get the list of all registered features. If any error be in features there should be shown.
```bash
npx extatistic list > res.csv
```

`npx extatistic execute`  
To start executing all features (methods in folder called 'features') on source text (of files in folder called 'input').
Results willl be saved as a csv file in a folder called 'ouput'.
```bash
npx extatistic execute >> res.csv
```

## API

There's a sample code to show how to use the code and how it works:

```js
const {
    registerAFeature,       // register a feature in to feature list
    registerFeaturesList,   // register a list of features to feature list
    getListOfFeaturesName,  // return a list of all registered features
    getNumberOfFeatures,    // return total number of registerd features
    extractfeaturesRaw,     // calculate and return a raw of features value
} = require('extatistic')

const newFeature = sourceString => sourceString.length || 0
registerAFeature(newFeature)

console.log(getListOfFeaturesName())                // newFeature
console.log(getNumberOfFeatures())                  // 1
console.log(extractfeaturesRaw('a sample string'))  // 15

const anotherFeature = sourceString => (sourceString.length / 2) || 0
registerAFeature(anotherFeature)

console.log(getListOfFeaturesName())                // newFeature, anotherFeature
console.log(getNumberOfFeatures())                  // 2
console.log(extractfeaturesRaw('a sample string'))  // 15, 7.5
```

The API:

| function              | params     | returns     | description                                  |
|:----------------------|:-----------|:------------|:---------------------------------------------|
| getListOfFeaturesName |            | `string`    | return a list of all registered features     |
| getNumberOfFeatures   |            | `number`    | return total number of registerd features    |
| extractfeaturesRaw    | `string`   | `string`    | calculate and return a raw of features value |
| registerAFeature      | `function` | `undefined` | register a feature in to feature list        |
| registerFeaturesList  | `object`   | `undefined` | register a list of features to feature list  |

>> every feature added should return a primitive value, it's important!

### Anatomy of project

There's Babel used to build this package, Jest used for test,
 yargs for command line application and fs uesd for manage files.

## Contribution

### How to help with develop

1. Fork
2. Make a change
3. Request a merge!
4. And for maintaining this project, if anyone are available and intrested please contact me to be a maintainer!

## Contact us

Don't hesitate to contact me about this project  
[me on github](https://github.com/easa)  
[me on telegram](https://t.me/eisanodehi)  

[test]: https://github.com/guardjs/extatistic/workflows/test/badge.svg
[testURL]: https://github.com/guardjs/extatistic/actions?query=branch%3Amaster+workflow%3A%22test%22

[build]: https://github.com/guardjs/extatistic/workflows/Build%2010.x/badge.svg
[buildURL]: https://github.com/guardjs/extatistic/actions?query=branch%3Amaster+workflow%3A%22Build+10.x%22

[gpr]: https://github.com/guardjs/extatistic/workflows/Publish%20GPR%20Package/badge.svg
[gprURL]: https://github.com/guardjs/extatistic/actions?query=branch%3Amaster+workflow%3A%22Publish+GPR+Package%22

[npm]: https://github.com/guardjs/extatistic/workflows/publish/badge.svg
[npmURL]: https://github.com/guardjs/extatistic/actions?query=branch%3Amaster+workflow%3A%22publish%22

[version]: https://img.shields.io/github/package-json/v/guardjs/extatistic?color=%23333&label=%E2%80%8C&logo=github&logoColor=%23b5b5b5&style=social
