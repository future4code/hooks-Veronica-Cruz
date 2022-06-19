import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components"
import Header from "./components/Header"
import CriarPlaylist from "./components/CriarPlaylist";
import GerenciarPlaylists from "./components/GerenciarPlaylists";


const App = () => {

  const [paginaAtual, setPaginaAtual] = useState('playlistCreate') // 'playlistManager'

  const rendenrizarTela = () => {
    if (paginaAtual === 'playlistCreate' ){
      return  <CriarPlaylist />
    }else if(paginaAtual === 'playlistManager') {
      return   <GerenciarPlaylists />
    }
  }

  const atualizarTela =(paginaAtual) =>{
    setPaginaAtual(paginaAtual)
  }
  


  return (
    <div className="App">
     
      <Header atualizarTela={atualizarTela}/>
     
      {rendenrizarTela()}
     
    </div>
  );
  }


export default App;
