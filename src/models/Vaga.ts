class Vaga {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]

  constructor(
    id: string,
    titulo: string,
    localizacao: string,
    nivel: string,
    modalidade: string,
    salarioMin: number,
    salarioMax: number,
    requisitos: string[]
  ) {
    this.id = id
    this.titulo = titulo
    this.localizacao = localizacao
    this.modalidade = modalidade
    this.nivel = nivel
    this.requisitos = requisitos
    this.salarioMin = salarioMin
    this.salarioMax = salarioMax
    this.requisitos = requisitos
  }
}

export default Vaga
