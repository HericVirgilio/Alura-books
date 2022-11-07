import styled from 'styled-components'
import Input from '../input';
import { useState } from 'react';
import { livros } from './dadosPesquisa'
const Section = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%,#326589 16%)
    color: #FFFFFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
    margin-top: -90px;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitulo = styled.h3`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 40px;
    color: #FFF;
`
const Nome = styled.p`
    color: white;
    width: 200px;
`
const ID = styled.p`
    color:  white;
    width: 50px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    img{
        width: 100px;
    }
    &:hover{
        border: 1px solid white;
    }
`
const Imagem = styled.img`
    margin-left: 30px;
`
function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return(
        <Section>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante. </SubTitulo>
            <Input
                placeholder='Escreva sua proxima leitura'
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livros => livros.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map( livro => (
                <Resultado>
                    <Nome><strong>{livro.nome}</strong></Nome>
                    <ID>{'ID: ' + livro.id}</ID>
                    <Imagem src={livro.src}></Imagem>
                </Resultado>
            ))  }
        </Section>
    )
}
export default Pesquisa;