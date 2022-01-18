const net = require('net')

const server = net.createServer(function (socket) {
  const date = new Date()
  const dateForResponse = `${date.getFullYear()
    }-${(date.getMonth() + 1).toString().padStart(2, '0')
    }-${(date.getDate()).toString().padStart(2, '0')
    } ${date.getHours().toString().padStart(2, '0')
    }:${date.getMinutes().toString().padStart(2, '0')
    }\n`

  socket.end(dateForResponse)
})

const port = parseInt(process.argv[2])

server.listen(port)