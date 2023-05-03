import PlaylistComponent  from "./PlaylistComponent";
import PlaylistDetails from "./PlaylistDetails";
import React, {useState} from "react";
import styled from "styled-components";

const ListaDePlaylists = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const PlaylistManager = () => {

    const [renderList, setRenderList] = useState('playlistComponent')
    const [playlistId, setPlaylistId] = useState('')
    const renderManager = () => {
        if (renderList === 'playlistComponent' ){
          return  <PlaylistComponent showPage={showPage}/>
        }else if(renderList === 'playlistDetails') {
          return   <PlaylistDetails showPage={showPage} playlistId={playlistId}/>
        }
      }
    
      const showPage =(renderList, idPlaylist) =>{
        setRenderList(renderList)
        setPlaylistId(idPlaylist)
      }

    return(
        <ListaDePlaylists>
             <h1>Gerenciamento de Playlists</h1>
           
            {renderManager()}
          
        </ListaDePlaylists>

    )
}

export default PlaylistManager;