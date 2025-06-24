import styled from 'styled-components';

//componentes estilizados pra lista de opções 
const Opcoes = styled.ul` 
  display: flex;
  
`
const Opcao = styled.li`
  font-size: 1.1rem;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
`
//array com as opções do header
const textoOpcoes = ['Categorias', 'Estante', 'Favoritos']

//componente que renderiza as opções do header
//utilizando o método map para iterar sobre o array de opções
function OpcoesHeader() {
    return (
        <Opcoes>
             {textoOpcoes.map((texto) => ( //funcao map
             <Opcao key={texto}><p>{texto}</p></Opcao>
          ))}
      </Opcoes>
    )
}

export default OpcoesHeader;