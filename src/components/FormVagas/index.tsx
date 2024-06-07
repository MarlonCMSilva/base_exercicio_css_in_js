import { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/vaga'

const FormVagas = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.termo)

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alteraTermo(termo.toLocaleLowerCase())
  }

  return (
    <S.Formulario onSubmit={aoEnviarForm}>
      <S.Campo
        placeholder="Front-end, fullstack, node, design"
        value={termo}
        onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        type="search"
      />
      <S.BotaoPesquisar type="submit">Pesquisar</S.BotaoPesquisar>
    </S.Formulario>
  )
}

export default FormVagas
