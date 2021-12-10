import express from 'express'
import logger from './middlewares/logger.js'
import routers from './rotas/index.js'

const app = express()
app.use(express.json())
app.use(logger)
app.use('/', routers)

app.listen(3000, () => {
  console.log('App online!')
})
