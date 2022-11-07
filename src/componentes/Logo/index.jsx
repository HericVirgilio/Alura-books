import logo from '../../img/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    margin: 0px 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Paragrafo = styled.p`
    margin-left: 20px;
`

function Logo(){
    return(
        <LogoContainer>
            <img src={logo} alt ='logo'></img>
            <Paragrafo><strong>Alura </strong>Books</Paragrafo>
        </LogoContainer>
    )
}
export default Logo;