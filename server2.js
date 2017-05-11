const express = require('express')
var app = express()
var router = express.Router()
router.get('/person', (req, res, next) => {
  console.log('Call made')
  res.send({name: 'Rahul', adresses: ['A', 'B', 'C']})
})

app.use('/api', router)
module.exports = app
