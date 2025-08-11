require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

const app = express()
app.use(cors())
app.use(express.json())

// Debug: Check if public directory exists
const publicPath = path.join(__dirname, 'public')
console.log('Public directory path:', publicPath)
console.log('Public directory exists:', fs.existsSync(publicPath))

if (fs.existsSync(publicPath)) {
  console.log('Files in public directory:', fs.readdirSync(publicPath))
}

// Serve static files from the correct directory
app.use(express.static(publicPath))

app.get('/api/health', (req, res) => {
  res.send({ status: 'ok' })
})

// Debug middleware to log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`)
  next()
})

// Serve React app for all non-API routes
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'public', 'index.html')
  console.log('Trying to serve:', indexPath)
  console.log('Index.html exists:', fs.existsSync(indexPath))
  
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath)
  } else {
    res.status(404).send('Frontend build not found')
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})