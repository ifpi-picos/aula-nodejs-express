const express = require('express')
const log = require('./middlewares/log')
const routers = require('./rotas')

const app = express()
app.use(express.json())
app.use(log)
app.use('/', routers)

app.listen(3000, () => {
  console.log('App online!')
})

// 200, 201
// 300
// 400 