require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

// Serve static files from the correct directory
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/health', (req, res) => {
  res.send({ status: 'ok' })
})

// Serve React app for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})