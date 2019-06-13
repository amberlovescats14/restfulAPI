const express = require('express')

const app = express()

const personRoute = require('./routes/person')
app.use((req,res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`)
  next()
})
app.use(personRoute)
app.use(express.static('public'))

app.use((req,res,next) => {
  res.status(404).send(`We think you are lost`)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.info(`Listening on port ${PORT}`))