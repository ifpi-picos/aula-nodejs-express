class CursoService {
  constructor (CursoModel) {
    this.curso = CursoModel
  }

  async listaTodos () {
    const todosCursos = await this.curso.findMany()
    return todosCursos
  }

  async adiciona (curso) {
    // verificar se já existe curso cadastrado com o mesmo nome
    const cursoPorNome = await this.curso.findFirst({
      where: { nome: curso.nome }
    })
    if (cursoPorNome) {
      throw new Error('Já existe curso cadastrado com o mesmo nome')
    }
    return await this.curso.create({ data: curso })
  }
}

export default CursoService
