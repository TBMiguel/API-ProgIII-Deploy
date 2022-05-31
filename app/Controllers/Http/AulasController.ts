import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AulasController {
  aulas = [{
    id: 1, 
    disciplina: "Programação III",
    curso: "ADS"
  },
  {
      id: 2, 
      disciplina: "Projeto de Sistemas",
      curso: "ADS"
  },
  {
      id: 3, 
      disciplina: "Empreendedorismo",
      curso: "ADS"
  },
]

  public async index({}: HttpContextContract) {

    return{
      aulas: this.aulas,
    }
  }

  public async show({ params }: HttpContextContract) {

    for (const aula of this.aulas) {
      if(aula.id == params.id){
        return {
          aula: aula
        }
      }
    }

    return {
      message: "ID não encontrado"
    }
  }
}
