import styled from "styled-components";
import Input from '../Input'
import { useState } from "react";

const PesquisaContainer = styled.section`
    Background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFFFFF;
    text-align: center;
    padding:85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFFFFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitulo = styled.h3`
    font-size:18px;
    font-weight: 500;
    margin-bottom:40px;
`;

function Pesquisa(){
  const[textoDigitado, setTextoDigitado] = useState(""); // pega o texto/valor que o usuario digitar. o espaço ("") é o valor inicial do estado.
    
  return(
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input 
      placeholder="Escreva sua próxima leitura"
      onBlur={evento => setTextoDigitado(evento.target.value)}// quando o usuario sair do campo de input, o valor digitado é salvo no estado textoDigitado
      value={textoDigitado} // o valor do input é o estado textoDigitado
      />
    </PesquisaContainer>
  )
}

export default Pesquisa;
