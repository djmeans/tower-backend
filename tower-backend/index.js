const app = require('./app')
var port = 'https://sommstudy.herokuapp.com/'|| 3000

app.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, "listening on "+ port))
