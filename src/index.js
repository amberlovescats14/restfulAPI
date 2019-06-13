const express = require('express')
const app = express()
const personRoute = require('./routes/person')
const customerRoute = require('./routes/customer')
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use((req,res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`)
  next()
})
app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

app.use((req,res,next) => {
  res.status(404).send(`We think you are lost`)
})

app.use((err,req, res, next) => {
  console.error(err.stack)

  res.sendFile(path.join(__dirname, '../public/500.html'))
})
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.info(`Listening on port ${PORT}`))