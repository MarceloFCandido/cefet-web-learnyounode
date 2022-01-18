const fs = require('fs')

const filepath = process.argv[2]

const bufferAsString = fs.readFileSync(filepath).toString()
const fileContentArray = Array.from(bufferAsString)
const numberOfNewLines = fileContentArray.filter((char) => char === '\n')

console.log(numberOfNewLines.length)