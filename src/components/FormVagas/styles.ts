import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${variaveis.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const BotaoPesquisar = styled.button`
  background-color: ${variaveis.principal};
  border: 1px solid ${variaveis.principal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${variaveis.secundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${variaveis.principal};
`
