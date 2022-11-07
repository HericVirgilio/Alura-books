import styled from 'styled-components'
import{ livros} from './dadosUltimosLancamentos'
import {Titulo} from '../Titulo'
import Recomendo from '../CardRecomenda'
import Elfen from '../../img/elfen-lied.jpg'
const DivtionContainer = styled.section`
    text-align: center;
`
const SectionImg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;`
const Imagem = styled.img`
    min-width: 150px;
    max-height: 200px;
    margin:20px;
    cursor: pointer;
`
function UltimosLancamentos(){
    return(
        <DivtionContainer>
            <Titulo cor="#FFF">Últimos Lançamentos</Titulo>
            <Titulo>Mangas</Titulo>
            <SectionImg>
                {livros.map(
                    (livro) =>  
                     (<Imagem src={livro.src} ></Imagem>)
                )}
            </SectionImg>
            <Recomendo
               titulo="Talvez você se interesse por ..." 
               subtitulo="Elfen Lied"
               descricao="Um dos diclonius, Lucy, conseguiu escapar de uma das instalações em que eles ficavam presos e acabou entrando em uma grande aventura ao lado de dois humanos que não faziam ideia do que estavam se metendo, já que, ao olhar deles, ela aparentava ser uma menina jovem e inocente."
               img = {Elfen}
            />
        </DivtionContainer>
    )
}
export default UltimosLancamentos;