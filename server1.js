const express = require('express')
const app2 = require('./server2')
const superagent = require('superagent')
// const superagentDefaults = require('superagent-defaults')
// var superagent = superagentDefaults()
var cacheModule = require('cache-service-cache-module')
var cache = new cacheModule({storage: 'session', defaultExpiration: 60})
var superagentCache = require('superagent-cache-plugin')(cache)

var app = express()
app.get('/', (req, res, next) => {
  superagent.get('http://localhost:3001/api/person')
  .use(superagentCache)
  .then((response) => response.body)
  .then((body) => res.send(body))
})

app.listen(3000)
app2.listen(3001)
