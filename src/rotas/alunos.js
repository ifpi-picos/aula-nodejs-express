const express = require('express')
const router = express.Router()

const alunos = []
alunos.push({ nome: 'Aluno 1', matricula: 1 })
alunos.push({ nome: 'Aluno 2', matricula: 2 })
alunos.push({ nome: 'Aluno 3', matricula: 3 })
alunos.push({ nome: 'Aluno 4', matricula: 4 })

router.get('/', (req, res) => {
  res.json(alunos)
})

router.post('/', (req, res) => {
  console.log('Dados do novo aluno: ', req.body)
  alunos.push(req.body)
  res.status(201).send('Aluno adicionado com sucesso')
})

module.exports = router
