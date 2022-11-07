import Elfen from '../../img/elfen-lied.jpg'
import styled from 'styled-components'
const Card = styled.section`
    background-color: #005F9F;
    max-width: 60vw;
    min-width: 800px;
    margin: auto;
    border-radius: 30px;
    box-shadow: 5px 2px 10px black;
`
const Titulo = styled.h3`
    text-aling: center;
    color: #FFF;
    font-size: 26px;
    padding-top: 20px;
`
const Subtitulo = styled.h4`
    color: #EB9B00;
    font-size: 30px;
    text-align: left;
    margin-left: 100px;
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    margin-left: 100px;
`
const Descricao = styled.p`
    text-align: left;
    max-width: 35vw;
    color: #CCCCCC;
    display: flex;
    flex-direction: row;
    align-items: top;

`
const Imagem = styled.img`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: -70px;
    margin-left: 55px;
    border-radius: 10px;   
    cursor: pointer; 
`
const Botao = styled.button`
    margin-left: 65%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 15px 75px 15px 75px;
    background-color: #EB9B00;
    color: #FFF;
    border: none;
    font-size: 20px;
    cursor: pointer;
`
function CardRecomenda({titulo,subtitulo,descricao,img}){
    return(
            <Card>
                <Titulo>{titulo}</Titulo>
                    <Subtitulo>{subtitulo}</Subtitulo>
                    <Container>
                        <Descricao>{descricao}</Descricao>
                        <Imagem src={img}></Imagem>
                    </Container>
                    <Botao>Saiba Mais</Botao>
            </Card>
    )
}
export default CardRecomenda;