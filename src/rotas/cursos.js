import Prisma from '@prisma/client'
import express from 'express'

const { PrismaClient } = Prisma

const router = express.Router()
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
  const todosCursos = await prisma.curso.findMany()
  res.json(todosCursos)
})

router.post('/', async (req, res) => {
  const { nome, cargaHoraria, ativo } = req.body
  const post = await prisma.curso.create({
    data: {
      nome,
      cargaHoraria,
      ativo
    }
  })
  res.json(post)
})

export default router
