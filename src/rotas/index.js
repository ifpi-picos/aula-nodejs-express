const express = require('express')
const router = express.Router()
const alunosRouter = require('./alunos')

router.get('/', (req, res) => {
  res.send('App online, ok!')
})

router.use('/alunos', alunosRouter)
// router.use('/cursos',)
// router.use('/professores',)

module.exports = router
