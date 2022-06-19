import React from "react";
import styled from "styled-components";


const ContainerPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
   

`
const FormularioNovaPlaylist = styled.form`
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
   
`

const BotaoAdicionar = styled.button`
    background-color: blueviolet;
    color: white;
    border-radius: 10px;
`
const InputAddPlaylist = styled.input `
    text-align: center;
    border: 1px solid black;
`

const CriarPlaylist = () => {
    return(
        <ContainerPlaylist>
             <h1>Criar Nova Playlist</h1>

             <FormularioNovaPlaylist>
                <label> Nova Playlist </label>
                    <InputAddPlaylist placeholder="Nome da playlist"/>
                    <BotaoAdicionar><b>Adicionar</b></BotaoAdicionar>
              
             </FormularioNovaPlaylist>

        </ContainerPlaylist>
    )
}

export default CriarPlaylist;





