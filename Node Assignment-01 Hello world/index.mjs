import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello this is express js server and kamran here!')
})

app.get('/water', (req, res) => {
    res.send('Here is your water')
  })

  app.get('/food', (req, res) => {
    res.send('Here is your water')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`)
})