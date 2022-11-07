import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader';
import IconeHeader from '../IconesHeader';
import styled from 'styled-components'

const AppStyle = styled.header`

    background-color: white;
    display: flex;
    justify-content: center;

`
function Header(){
    return(
            <AppStyle>
                <Logo/>
                <OpcoesHeader/>
                <IconeHeader/>
                
            </AppStyle>  
    )
}
export default Header;