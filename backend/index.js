require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

const app = express()
app.use(cors())
app.use(express.json())

// API routes first
app.get('/api/health', (req, res) => {
  res.send({ status: 'ok' })
})

// Debug: Check if public directory exists
const publicPath = path.join(__dirname, 'public')
console.log('Public directory path:', publicPath)
console.log('Public directory exists:', fs.existsSync(publicPath))

if (fs.existsSync(publicPath)) {
  console.log('Files in public directory:', fs.readdirSync(publicPath))
  
  // Serve static files only if directory exists
  app.use(express.static(publicPath))
  
  // Serve React app for non-API routes
  app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'public', 'index.html')
    console.log('Serving index.html from:', indexPath)
    res.sendFile(indexPath)
  })
} else {
  console.log('Public directory not found - frontend not built')
  
  // Fallback for missing frontend
  app.get('/', (req, res) => {
    res.status(404).send('Frontend build not found. Run build process first.')
  })
}

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})