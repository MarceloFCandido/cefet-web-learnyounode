const fs = require("fs")
const path = require('path')


module.exports = function (dir, extension, callback) {
  fs.readdir(dir, function (err, data) {
    if (err) { return callback(err) }

    const filesWithExtension = data.filter(element => path.extname(element) === `.${extension}`)

    callback(null, filesWithExtension)
  })
}