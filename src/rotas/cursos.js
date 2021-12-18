import express from 'express'
import Prisma from '@prisma/client'
import CursoService from '../servicos/cursos.js'

const { PrismaClient } = Prisma
const router = express.Router()
const prisma = new PrismaClient()

const cursoService = new CursoService(prisma.curso)

router.get('/', async (req, res) => {
  const todosCursos = await cursoService.listaTodos()
  res.json(todosCursos)
})

router.post('/', async (req, res) => {
  try {
    const { nome, cargaHoraria, ativo } = req.body
    if (nome && cargaHoraria) {
      const retorno = await cursoService.adiciona({ nome, cargaHoraria, ativo })
      res.status(201).json(retorno)
    } else {
      res.status(400).send('Campos obrigatórios não preenchidos')
    }
  } catch (error) {
    console.error(error)
    res.status(400).send(error.message)
  }
})

export default router
