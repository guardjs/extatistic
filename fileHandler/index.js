
function onFiles(callback) {
  if (typeof callback !== 'function') return void 0
  files.forEach(file => {
    // read the file
    fs.readFile(`${testFolder}${file}`, (err, buf) => {
      if (err) return console.log(err)
      // callback

    })
  })
}


function onFolder(callback) {
  if (typeof callback !== 'function') return void 0
  fs.readdir(testFolder, (err, files) => {
    if (err) return console.log(err)
    // read directory
  })
}

module.exports = {
  files: function (filesArray) { return "$#@!" },
  folder: function (folderName) { return "$#@!" },
  folderSubdir: function (folderName) { return "$#@!" }
}