const { clear } = require('console')
const fs = require('fs')

const filepath = process.argv[2]

function callback(err, data) {
  if (err) {
    throw new Error(err)
  }

  const bufferAsString = data.toString()
  const fileContentArray = Array.from(bufferAsString)
  const numberOfNewLines = fileContentArray.filter((char) => char === '\n')

  console.log(numberOfNewLines.length)
}

fs.readFile(filepath, {}, callback)