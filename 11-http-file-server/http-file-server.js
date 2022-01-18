const fs = require('fs')
const http = require('http')

const port = parseInt(process.argv[2])
const filepath = process.argv[3]

const server = http.createServer(function (req, res) {
  const stream = fs.createReadStream(filepath)
  stream.pipe(res)
})

server.listen(port)