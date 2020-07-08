import {
  useHelperFunctions,
  registerAFeature
} from 'extatistic'

const newFeature = (sourceString) => {
  // There are some utilities to help with calculating
  // All are tested and optimon
  // You can see them at the github repository guardjs/extatistic
  const { getParsedKeywords, getParsedWords } = useHelperFunctions
  const parsedWords = getParsedWords(sourceString)
  const parsedKeywords = getParsedKeywords(sourceString)
  // Do your calculations here and return the result
  // The result will be the feature's value in a raw 
  // that a raw is a sample(source string)
  return parsedWords.length / parsedKeywords.length
}
// To register the feature here
// Then you need to call this file on your script, right before extracting function!
registerAFeature(newFeature)
// To export and register this feature on other script. More readable!
export default newFeature 