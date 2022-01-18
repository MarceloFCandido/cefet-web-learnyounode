const fs = require('fs')
const path = require('path')

const [dir, extension] = process.argv.slice(2)

function callback(err, list) {
  if (err) {
    throw new Error(err)
  }

  const filesWithExtension = list.filter(element => path.extname(element) === `.${extension}`)

  filesWithExtension.forEach((element) => console.log(element));
}

fs.readdir(dir, callback)