const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

app.get('/api/health', (req, res) => {
  res.send({ status: 'ok' })
})

module.exports = app
