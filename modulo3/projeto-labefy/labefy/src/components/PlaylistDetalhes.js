import React from "react";
import styled from "styled-components";

const DetalhesPlaylistsContaniner = styled.div`
h5{
    text-align: center;
    font-size: 20pt;
}

button{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blueviolet;
    color: white;
    border-radius: 10px;
    margin: 0 auto;
}
`


const PlaylistDetalhes = (props) => {
    return(
        <DetalhesPlaylistsContaniner>
            <h5>Detalhes da Playlist</h5>

            <button onClick={() => props.mostrarTela('detalhesPlaylist')}><b>Lista de Playlists</b></button>
        </DetalhesPlaylistsContaniner>
    )
};

export default PlaylistDetalhes;