class Server {
  constructor(path, port, links) {
    this.express = require('express')
    this.app = this.express()
    this.socket = require('socket.io')
    
    this.http = require('http').createServer(this.app)
    
    this.app.use(this.express.static(__dirname + path))
    
    this.opt = {
      root: path
    }
    
    this.app.get('/', (req, res) => {
      res.sendFile('index.html', this.opt)
    })

    this.io = this.socket(this.http, {
      cors: {
        origins: links
      }
    })
    
    this.io.on('connection', (socket) => {
      const time = new Date(Date.now()).toString().replace(/ \(.+\)/g, '')
      console.log(`[${time}] ${socket.id} connected!`)
      this.socket.on('disconnect', () => {
        const off = new Date(Date.now()).toString().replace(/ \(.+\)/g, '')
        console.log(`${off} ${socket.id} disconnected!`)
      })
    })

    this.http.listen(port, () => {
      console.log(`Listening on port ${port}`)
    })
  }
}

const files = {
  arrays: [
    'unite',
    'subtract',
    'intersect',
    'exclude',
    'filter',
    'partition',
    'frequency',
    'mode',
    'mergeSort',
    'shellSort',
    'quickSort',
    'zip',
  ],
  numbers: [
    'triangular',
    'factorial',
    'fibonacci',
    'prime',
    'factors',
    'hcf',
    'gcd',
  ],
  objects: [
    'matches',
    'must',
    'property',
    'matchesProperty',
  ],
  loops: [
    'range'
  ],
  multi: [
    
  ]
}

class Qux {
  constructor(scope) {
    if (files[scope]) {
      for (const method of files[scope]) {
        this[method] = require(`./${scope}/${method}`)
      }
    } else {
      for (const [key, value] of Object.entries(files)) {
        for (const method of value) {
          eval(`this.${method} = require('./${key}/${method}')`)
        }
      }
    }
  }
}

module.exports = {
  Server: Server,
  Qux: Qux,
}