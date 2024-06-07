import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Vaga from '../../models/Vaga'

type VagaState = {
  termo: string
  itens: Vaga[]
}

const initialState: VagaState = {
  termo: '',
  itens: [
    {
      id: '1',
      titulo: 'Desenvolvedor front-end',
      localizacao: 'remoto',
      nivel: 'junior',
      modalidade: 'clt',
      salarioMin: 3000,
      salarioMax: 4500,
      requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    },
    {
      id: '2',
      titulo: 'Desenvolvedor NodeJS',
      localizacao: 'remoto',
      nivel: 'pleno',
      modalidade: 'pj',
      salarioMin: 5000,
      salarioMax: 6500,
      requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    },
    {
      id: '3',
      titulo: 'Desenvolvedor fullstack',
      localizacao: 'remoto',
      nivel: 'pleno',
      modalidade: 'pj',
      salarioMin: 4000,
      salarioMax: 6000,
      requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    },
    {
      id: '4',
      titulo: 'Designer de interfaces',
      localizacao: 'remoto',
      nivel: 'junior',
      modalidade: 'clt',
      salarioMin: 4000,
      salarioMax: 5000,
      requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    },
    {
      id: '5',
      titulo: 'Desenvolvedor front-end',
      localizacao: 'remoto',
      nivel: 'senior',
      modalidade: 'clt',
      salarioMin: 7000,
      salarioMax: 8000,
      requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    },
    {
      id: '6',
      titulo: 'Desenvolvedor front-end para projeto internacional',
      localizacao: 'remoto',
      nivel: 'senior',
      modalidade: 'pj',
      salarioMin: 12000,
      salarioMax: 15000,
      requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    },
    {
      id: '7',
      titulo: 'Desenvolvedor front-end',
      localizacao: 'São Paulo/SP',
      nivel: 'junior',
      modalidade: 'clt',
      salarioMin: 4000,
      salarioMax: 5000,
      requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    }
  ]
}

const termoSlice = createSlice({
  name: 'termo',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alteraTermo } = termoSlice.actions
export default termoSlice.reducer
