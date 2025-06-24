import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    padding: 1rem;
    font-size: 1.5rem;
`;

const LogoImg = styled.img`
  margin-right: 0.5rem;
`;

function Logo (){
    return (
      <LogoContainer>
           <LogoImg 
           src={logo}
           alt='logo'
           />
           <p><strong>Alura</strong>books</p>
      </LogoContainer>
    )
}

export default Logo;