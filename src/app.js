import express from 'express'
import logger from './middlewares/logger.js'
import rotas from './rotas/index.js'

const app = express()
app.use(express.json())
app.use(logger)
app.use('/', rotas)

app.listen(3000, () => {
  console.log('App online!')
})
