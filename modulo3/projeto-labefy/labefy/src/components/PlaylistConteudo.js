import React, {useState} from "react";
import PlaylistCardComponente from "./PlaylistCardComponente";
import styled from "styled-components";

const ListaPlaylistsContaniner = styled.div`
display: flex;
flex-direction: column;
text-align: center;
h5{
    text-align: center;
    font-size: 20pt;
}

button{
    max-width: 10em;
    background-color: blueviolet;
    color: white;
    border-radius: 10px;
    margin: 0 auto;
}


`

const PlaylistConteudo = (props) => {

    const[playlists, setPlaylists] = useState([
        {
            "id": "6aae0f9c-6b64-4940-887a-1068e2d07a3c",
            "name": "Rock Nacional"
        },
        {
            "id": "964d6454-8761-4837-b75a-8047615322c8",
            "name": "Rock Internacional"
        },
        {
            "id": "964d6454-8761-4837-b75a-8047615348c8",
            "name": "Flashback"
        },
        {
            "id": "964d6454-8761-4837-b75a-8047615675c8",
            "name": "Reggae"
        }

    ])

    const renderizaPlaylist = playlists.map((playlist) => {
        return <PlaylistCardComponente/>
    })

    return(
        <ListaPlaylistsContaniner>
            <h5>Lista de Playlists</h5>
            {renderizaPlaylist}
            <button className="detalhesBotao" onClick={() => props.mostrarTela('listaDePlaylist')}><b>Ver Detalhes</b></button>
        </ListaPlaylistsContaniner>
    )
};

export default PlaylistConteudo;