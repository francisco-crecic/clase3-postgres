const express = require('express')
const app = express()

app.use(express.json())

app.get('/ping', (req, res) => {
    res.send('Servidor corriendo...')
})

app.use(require('./routes/routes'))


const PORT=3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})