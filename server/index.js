const express = require('express')
const animals = require('./animals.json')
const user = require('./adopters.json')

const app = express()
const port = 3001

app.get('/api/animals', (_req, res) => {
  res.json(animals)
})

app.get('/api/adopters', (_req, res) => {
  res.json(user)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
