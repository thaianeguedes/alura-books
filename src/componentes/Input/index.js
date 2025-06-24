import styled from 'styled-components';

const Input = styled.input `
border: 0.1rem solid rgb(255, 255, 255);
background: transparent;
border-radius: 1.4rem;
padding: 1rem 8rem;
width: 200px;
font-size: 1rem;
margin-bottom: 1rem;

&::placeholder {
  color: #FFFFFF;
`;

export default Input;