import axios from "axios";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import {BASE_URL, axiosConfig} from '../constants/Instance'


const ContainerPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
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
    border: none;
    padding: 10px;
    box-shadow: 2px 2px 2px deeppink;
`
const InputAddPlaylist = styled.input `
    text-align: center;
    border-radius: 8px ;
    border-color:deeppink;
    padding: 8px;
    width: 250px;
`


const PlaylistCreate = () => {

    const [newPlaylistInput, setNewPlaylistInput] = useState('')

   const createPlaylist = (event)=>{

    event.preventDefault()

    const body = {
        name: newPlaylistInput
    }
        axios.post(BASE_URL, body, axiosConfig)
        .then(() => {
            alert('Playlist created')
            setNewPlaylistInput('')
        })
        .catch(error => console.error(error))
   } 
        
    return(
        <ContainerPlaylist>
             <h1>Criar Nova Playlist</h1>

             <FormularioNovaPlaylist>
                <label> Nova Playlist </label>
                    <InputAddPlaylist 
                    placeholder="Nome da playlist"
                    value={newPlaylistInput}
                    onChange={(event)=>{setNewPlaylistInput(event.target.value)}}
                    />
                    <BotaoAdicionar onClick={createPlaylist}><b>Adicionar</b></BotaoAdicionar>
              
             </FormularioNovaPlaylist>

        </ContainerPlaylist>
    )
}

export default PlaylistCreate;





