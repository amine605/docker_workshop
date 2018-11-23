const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  let stage = process.env.STAGE;
  response.send('Hello from Express!, Stage = ' + stage)
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})