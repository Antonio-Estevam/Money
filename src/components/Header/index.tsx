
import logoImg from "../../assets/logo.svg"
import { HeaderContainer, HeaderContent, NewTransectionButton } from "./styles"

export function Header(){
    return(
        <HeaderContainer>
          <HeaderContent>
            <img src={logoImg} alt="" />
            <NewTransectionButton>Nova Tranasação</NewTransectionButton>
            </HeaderContent>  
            </HeaderContainer>
        ) 
}