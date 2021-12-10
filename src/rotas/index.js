import express from 'express'
import cursosRouter from './cursos.js'
import alunosRouter from './alunos.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('App online, ok!')
})

router.use('/cursos', cursosRouter)
router.use('/alunos', alunosRouter)

export default router
