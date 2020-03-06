import {
  useHelperFunctions,
  registerAFeature
} from 'extatistic'

const newFeature = (sourceString) => {

  const { getParsedKeywords, getParsedWords } = useHelperFunctions

  const parsedWords = getParsedWords(sourceString)
  const parsedKeywords = getParsedKeywords(sourceString)

  return parsedWords.length / parsedKeywords.length
  
}

registerAFeature(newFeature)

export default newFeature
