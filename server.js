const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())

app.get('/ping', (req, res) => {
  res.send('Servidor corriendo...')
})

app.use(require('./routes/routes'))

const PORT = 3000

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
