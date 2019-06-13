const express = require('express')
const router = express.Router()

//OueryString => 
//localhost:3000/person?name=thomas&age=20
router.get('/person', (req, res) => {
  if(req.query.name){
    res.send(`A person by the name of ${req.query.name}` )
  }else {
    res.send("No query string. Just people")
  }
})

//params property
router.get('/person/:name', (req, res) => {

  res.send(`Requested a person ${req.params.name}` )
})


module.exports = router