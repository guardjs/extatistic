# extatistic

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/guardjs/extatistic/Node%20CI?style=flat-square)](https://github.com/guardjs/extatistic/actions?query=branch%3Amaster+workflow%3A%22Node+CI%22)

The NPM package to perform statistical models on any text and extract specific features

V 1.0.3   
This app extracts features from source ''code'' files.  
This project is part of the [Guardjs](https://guardjs.github.io) organization.   
**Github repository: [npmExtatistic](https://github.com/guardjs/npmExtatistic).**
It has the capability to easily reduce or increase a feature model to the feature set. Just try to change it on github. It's so easy.

## Usage   
Just call it :)   
3 function it has :  
* features list  
* features total count
* extract features # using models (in folder "syntax")

# Feature set
Each feature is a file contains a single function that calls on string. You can easily add or remove these functions!
Attention: the order of features are by the order of files of feature-model that the app uses and the order of features here isn't a default order! THERE'S NOT ANY ORDER  

| no. | feature                   | description                                   |
|:---:|---------------------------|-----------------------------------------------|
|  1  | eval                      | The number of eval                            |
|  2  | setTimeout                | The number of setTimeout                      |
|  3  | iframe                    | The number of strings containing “iframe”     |
|  4  | unescape                  | The number of unescape                        |
|  5  | escape                    | The number of escape                          |
|  6  | classid                   | The number of classid                         |
|  7  | parseInt                  | The number of parseInt                        |
|  8  | fromCharCode              | The number of fromCharCode                    |
|  9  | ActiveXObject             | The number of ActiveXObject                   |
| 10  | strDirect                 | The number of directly string assignments     |
| 11  | concat                    | The number of concat                          |
| 12  | indexOf                   | The number of indexOf                         |
| 13  | substring                 | The number of substring                       |
| 14  | replace                   | The number of replace                         |
| 15  | document.addEventListener | The number of document.addEventListener       |
| 16  | attachEvent               | The number of attachEvent                     |
| 17  | createElement             | The number of createElement                   |
| 18  | getElementById            | The number of getElementById                  |
| 19  | document.write            | The number of document.write                  |
| 20  | words                     | The number of words in JavaScript             |
| 21  | keywords                  | The number of JavaScript keywords             |
| 22  | chars                     | The number of characters in JavaScript        |
| 23  | keyOnWords                | The ratio between keywords and words          |
| 24  | wordperline               | The entropy of the script as a whole          |
| 25  | longest                   | The length of the longest JavaScript word     |
| 26  | longer200                 | The number of long strings(> 200) characters  |
| 27  | shortstring               | The length of the shortest JavaScript word    |
| 28  | wordperlongline           | The entropy of the longest JavaScript word    |
| 29  | space                     | The number of blank spaces in the JavaScript  |
| 30  | avg                       | Average length of words in the JavaScript     |
| 31  | hexvalue                  | The number of hex values in the javascript    |
| 32  | utfvalue                  | The number of utf values in the JavaScript    |


# Anatomy of project
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

# farther question
Don't hesitate to contact me about this project  
[me on github](https://github.com/easa)  
[email me](mailto:easanodehi@gmail.com)  
[me on telegram (fast way)](https://t.me/eisanodehi)  
