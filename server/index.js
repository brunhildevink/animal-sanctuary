const express = require('express')
const animals = require('./animals.json')
const adopters = require('./adopters.json')

const app = express()
const port = 3001

app.get('/api/animals', (req, res) => {
  res.json(animals)
})

app.get('/api/adopters', (req, res) => {
  console.log(adopters)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
