import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Vaga = styled.li`
  border: 1px solid ${variaveis.principal};
  background-color: ${variaveis.secundaria};
  color: ${variaveis.principal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${variaveis.principal};
    color: ${variaveis.secundaria};
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${variaveis.secundaria};
  background-color: ${variaveis.principal};
  color: ${variaveis.secundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  :hover {
    border-color: ${variaveis.principal};
    background-color: ${variaveis.secundaria};
    color: ${variaveis.principal};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
