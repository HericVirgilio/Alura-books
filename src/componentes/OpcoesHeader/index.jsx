import styled from 'styled-components'
const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`
const textOpcoes = ['CATEGORIA','FAVORITOS','MINHA LISTA']
function OpcoesHeader(){
    return(
        <Opcoes>
            {textOpcoes.map(
                (text) => <Opcao><p>{text}</p></Opcao>
            ) 

            }
        </Opcoes>
    )
}
export default OpcoesHeader;