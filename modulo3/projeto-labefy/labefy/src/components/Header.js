import React from "react";
import styled from "styled-components";


const HeaderContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
border: 1px solid black;
background-color: deeppink;
margin: 0 ;
`

const Header = (props) => {
    return(
        <HeaderContainer>
             <h1>Labefy Music</h1>
             <button onClick={()=>props.atualizarTela('playlistCreate')} >Criar PlayList</button>
             <button onClick={()=>props.atualizarTela('playlistManager')} >Gerenciar PlayList</button>
        </HeaderContainer>
    )
}

export default Header;