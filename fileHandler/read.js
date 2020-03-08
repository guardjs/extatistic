

import fs from 'fs'

export const readAFile = (filename) => {
  if (!filename) return 0
  files.forEach(file => {
    // read the file
    fs.readFile(`${testFolder}${file}`, (err, buf) => {
      if (err) return console.log(err)
      // callback

    })
  })
}