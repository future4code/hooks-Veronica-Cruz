import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { axiosConfig, BASE_URL } from "../constants/Instance";
import PlaylistCard from "./PlaylistCardComponente";
import axios from "axios";

const ListaPlaylistsContaniner = styled.div`
display: flex;
flex-direction: column;
text-align: center;
h5{
    text-align: center;
    font-size: 20pt;
}

`


const PlaylistComponent = (props) => {

    const[playlists, setPlaylists] = useState([])

    const getAllPlaylists = () => {
        axios.get(BASE_URL, axiosConfig)
        .then(res=> setPlaylists(res.data.result.list))
        .catch((error) =>console.error(error))
    }

    useEffect(() => {
        getAllPlaylists()
    },[])
    
    const deletePlaylist = (event, playlistId) => {
        event.preventDefault();
        axios.delete(`${BASE_URL}/${playlistId}`, axiosConfig)
        .then(() => {
            alert('Playlist successfully deleted')
            getAllPlaylists()
            
        })
        .catch((error) => console.error(error))
    }

    const renderedPlaylist = playlists.map((playlist) => {
        return <PlaylistCard 
        
        key={playlist.id}
        playlistId={playlist.id}
        showPage={props.showPage}
        playlistName={playlist.name}
        deletePlaylist={deletePlaylist}
    
        />
       
    })

    return(
        <ListaPlaylistsContaniner>
            <h5>Lista de Playlists</h5>
            {renderedPlaylist}
        </ListaPlaylistsContaniner>
    )
};

export default PlaylistComponent;