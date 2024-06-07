import { useSelector } from 'react-redux'

import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import * as S from './styles'

import { RootReducer } from '../../store'

const ListaVagas = () => {
  const { termo, itens } = useSelector((state: RootReducer) => state.termo)

  const filtraTarefas = () => {
    let TarefasFiltradas = itens

    if (termo !== undefined) {
      TarefasFiltradas = itens.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      return TarefasFiltradas
    } else {
      return itens
    }
  }

  const listadevaga = filtraTarefas()

  return (
    <div>
      <FormVagas />
      <S.listagemVagas>
        {listadevaga.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </S.listagemVagas>
    </div>
  )
}

export default ListaVagas
