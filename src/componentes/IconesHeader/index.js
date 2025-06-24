import sacola from '../../imagens/sacola.svg';
import perfil from '../../imagens/perfil.svg';
import styled from 'styled-components';

const Icone = styled.li` 
  margin-right: 30px;
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const icones = [perfil, sacola];

function IconesHeader() {
    return (
      <Icones>
          {icones.map((icone) => (
            <Icone><img src={icone} alt='icone' /></Icone>
          ))}
         </Icones>

    )
}

export default IconesHeader;
