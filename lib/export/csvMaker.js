
import error from '../common/errorMessages.js'
import fs from 'fs'

export const save = (fileName = 'result', data = undefined, flags = { rewrite: false }) => {
  if (!data) throw new Error(error['undefined data'])
  // TODO: if file exists then number it
  // TODO: if rewrite flag was true then delete files and write new ones
  if (flags.rewrite) fs.unlink(`${fileName}.csv`)

  fs.appendFile(`${fileName}.csv`, data, (error) => {
    if (error)
      console.log(error)
  })
}