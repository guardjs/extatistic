# extatistic  
[![build workflow](https://github.com/guardjs/extatistic/workflows/Node%20CI/badge.svg)](https://github.com/guardjs/extatistic/actions?query=branch%3Amaster+workflow%3A%22Node+CI%22)    

The NPM package to perform statistical models on any text and extract specific features

[![GitHub package.json version](https://img.shields.io/github/package-json/v/guardjs/extatistic?color=%23333&label=%E2%80%8C&logo=github&logoColor=%23b5b5b5&style=social)](#)

This app extracts features from string.   
This project is part of the [Guardjs](https://guardjs.github.io) organization.   
**Github repository: [extatistic](https://github.com/guardjs/extatistic).**
It has the capability to easily reduce or increase a feature model to the feature set. Just try to change it on github. It's so easy.    
Dynamic features will add on version 1.2.0!

## Usage   
Just call it :)   
3 function it has :  
* features list  
* features total count
* extract features # using models (in folder "syntax")

## Default feature set
Each feature is a file contains a single function that calls on string. You can easily add or remove these functions!
Attention: the order of features are by the order of files of feature-model that the app uses and the order of features here isn't a default order! THERE'S NOT ANY ORDER  

| no. | feature      | description                          |
|:---:|--------------|--------------------------------------|
|  1  | of           | The number of 'of'                   |
|  2  | the          | The number of 'the'                  |
|  3  | space        | The number of blank spaces           |
|  4  | hexvalue     | The number of hex values             |
|  5  | utfvalue     | The number of utf values             |
|  6  | words        | The number of all words              |
|  7  | keywords     | The number of special keywords       |
|  8  | chars        | The number of characters             |
|  9  | keyOnWords   | The ratio between keywords and words |
| 10  | wordPerline  | The entropy of the script as a whole |
| 11  | longestWord  | The length of the longest word       |
| 12  | shortestWord | The length of the shortest word      |
| 13  | avg          | Average length of words              |


## Contribution
### How to help with develop
Fork, make a change, request a pull!
### To maintaining
Yeap if anyone are available and intrested please contact me to be a maintainer!
### Anatomy of project
`app` folder contains feature-models.
```  
.
+-- - app  
|   +-- - syntax  
    |   +-- index.js # this will handle all suntax features  
    |   +-- + rgxPatternCounter # the models inside this folder are simple regex functions   
    |   +-- + common # function uses in many models  
+-- index.js # simple order of functions for customization
```

## Contact me
Don't hesitate to contact me about this project  
[me on github](https://github.com/easa)  
[email me](mailto:easanodehi@gmail.com)  
[me on telegram (fast way)](https://t.me/eisanodehi)  
