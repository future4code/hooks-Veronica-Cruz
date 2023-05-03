import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { axiosConfig, BASE_URL } from "../constants/Instance";
import TrackCard from "./TrackCard";
import axios from "axios";


const PlaylistDetailsContainer = styled.div`
  h5 {
    align-items: center;
    text-align: center;
    font-size: 20pt;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: blueviolet;
    color: white;
    border-radius: 10px;
    border: none;
    padding: 10px;
    box-shadow: 2px 2px 2px deeppink;
    width: 250px;
    margin: 0 auto;
    margin-bottom: 15px;
    cursor: pointer;
  }
`;

const AddMusicContainer = styled.form`
  background-color: #FFC0CB;
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  input{
    margin-left: 1rem;
  }
 

   button {
    display: flex;
    align-items: center;
    background-color: blueviolet;
    color: white;
    border-radius: 10px;
    border: none;
    padding: 10px;
    box-shadow: 2px 2px 2px deeppink;
    width: 150px;
    margin: 5px;
    cursor: pointer;
  
  }
`;

const PlaylistDetails = (props) => {
  const [tracks, setTracks] = useState( [])
  const [trackName, setTrackName] = useState('')
  const [trackArtist, setTrackArtist] = useState('')
  const [trackUrl, setTrackUrl] = useState('')

  

  useEffect(()=> {
    
    getPlaylistTracks()
},[])

const getPlaylistTracks = () =>{
  axios.get(`${BASE_URL}/${props.playlistId}/tracks`, axiosConfig)
  .then(res => {
    setTracks(res.data.result.tracks)
  })
  .catch(err => console.error(err))
}


  const addTrack = (event) => {
    event.preventDefault()

    const body = {
      name:trackName,
      artist:trackArtist,
      url:trackUrl
    }
    axios.post(`${BASE_URL}/${props.playlistId}/tracks`, body, axiosConfig)
    .then(()=> {
      alert('Track added')
      getPlaylistTracks()
      setTrackName('')
      setTrackArtist('')
      setTrackUrl('')
    })
    .catch(err => console.log(err))
  }

  const removeTrackFromPlaylist = (trackId) => {
  axios.delete(`${BASE_URL}/${props.playlistId}/tracks/${trackId}`, axiosConfig)
  .then(() => {
    alert('Track removed')
    getPlaylistTracks()
  })
  .catch((error) => console.error(error))
}

  const renderedTracks = tracks.map((track) =>{
    return <TrackCard key={track.id} track={track} removeTrackFromPlaylist={removeTrackFromPlaylist} />
  })

  

  return (
    <PlaylistDetailsContainer>
      <h5>Detalhes da Playlist</h5>

      <AddMusicContainer onSubmit={addTrack} preventDefault>
        <div>
        <label>Name</label>
        <input 
        type="text" 
        placeholder="Name"
        value={trackName}
        onChange={(event)=> {setTrackName(event.target.value)}} 
        />
        </div>

        <div>
        <label>Artist</label>
        <input type="text" 
        placeholder="Artist"
        value={trackArtist}
        onChange={(event)=> {setTrackArtist(event.target.value)}}  />
        </div>

        <div>
        <label>URL</label>
        <input type="text" 
        placeholder="URL"
        value={trackUrl}
        onChange={(event)=> {setTrackUrl(event.target.value)}}  />
         </div>

        <button type='submit'><b>Adicionar</b></button>
       
      </AddMusicContainer>
      {renderedTracks}

      <button onClick={() => props.showPage('playlistComponent')}><b>Lista de Playlists</b>
      </button>
    </PlaylistDetailsContainer>
  );
};

export default PlaylistDetails;
