import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardPlaylist = styled.div `
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
background-color: aqua;
`

const urlPlaylists = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
  headers: {
  Authorization: "veronica-silveira-hooks"
  }
};

class App extends React.Component {

  state={
    playlists:[],
    playlistInput : "",
  };

  componentDidMount(){
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    axios.get(urlPlaylists, headers)
    .then((res)=> {
      this.setState({playlists: res.data.result.list})
      
    }).catch((err)=> {
      alert("Algo deu errado. Tente novamente")
    });
  };

  createPlaylist = ()=> {
    const body = {
      name: this.state.playlistInput
    }
    axios.post(urlPlaylists, body, headers)
    .then((res)=>{
      alert(`Playlist ${this.state.playlistInput} criada com sucesso!`)
      this.setState({playlistInput: ""});
      this.getAllPlaylists()
    })
    .catch((err)=>{
      alert("Ocorreu um erro. Tente novamente");
      this.setState({playlistInput: ""});
    })
  }

  deletePlaylist = (id)=> {
    
    const urlDeletePlaylist = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    
    axios.delete(urlDeletePlaylist, headers)
    .then((res)=>{
      alert(`Playlist deletada com sucesso!`)
      this.getAllPlaylists()
      
    })
    .catch((err)=>{
      alert("Ocorreu um erro. Tente novamente");
      
    })
  }

  onPlaylistTextChange = (event) => {
    this.setState({playlistInput: event.target.value});
  }

  render(){

    const playlistComponents = this.state.playlists.map((playlist)=>{
      return <li key={playlist.id}>
             <CardPlaylist key={playlist.id}>
                {playlist.name}
                <button onClick={()=>this.deletePlaylist (playlist.id)}>X</button>
             </CardPlaylist>
      </li>;
      
    })
  return (
    <div className="App">
      <h1>Labefy Music</h1>
      <input 
      placeholder= "Playlist" 
      value={this.state.playlistInput}
      onChange={this.onPlaylistTextChange} />
      
      <button onClick={this.createPlaylist}>Enviar</button>
      {playlistComponents}
     
    </div>
  );
  }
}

export default App;
