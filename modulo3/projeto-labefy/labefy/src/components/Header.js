import React from "react";
import styled from "styled-components";



const HeaderContainer = styled.div`
display: flex;
height: 100px;
width: 100%;
align-items: center;
justify-content: space-around;
border: 1px solid black;
background-color: deeppink;


`
const ButtonContainer = styled.div`
    border-radius: 10px;
    background-color: white;
    padding: 8px;
    box-shadow: 5px 5px 5px black;
    cursor: pointer;
`
const TittleHeader = styled.h1`
    font-size: 3em ;
    text-shadow: 2px 2px 1px white;
    font-weight: bold;
    letter-spacing: 3px;
      

`

const Header = (props) => {
    return(
        <HeaderContainer>
             <TittleHeader>Labefy Music</TittleHeader>
             <ButtonContainer onClick={()=>props.refreshScreen('playlistCreate')} >Criar PlayList</ButtonContainer>
             <ButtonContainer onClick={()=>props.refreshScreen('playlistManager')} >Gerenciar PlayList</ButtonContainer>
        </HeaderContainer>
    )
}

export default Header;