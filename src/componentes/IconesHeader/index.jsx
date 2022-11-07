import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`

  padding: 0px 10px;
  list-style: none;


`
const Icones = styled.ul`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const icones = [perfil,sacola]
function IconeHeader(){
    return(
        <Icones>
                {icones.map(
                  (icone) =>(
                    <Icone><img src={icone}></img></Icone>
                  )
                )}
          </Icones>

    )
}
export default IconeHeader;