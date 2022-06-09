import PlaylistConteudo from "./PlaylistConteudo";
import PlaylistDetalhes from "./PlaylistDetalhes";
import React, {useState} from "react";
import styled from "styled-components";

const ListaDePlaylists = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const GerenciarPlaylists = () => {

    const [renderizaLista, setRenderizaLista] = useState('detalhesPlaylist')

    const rendenrizarGerenciador = () => {
        if (renderizaLista === 'detalhesPlaylist' ){
          return  <PlaylistConteudo mostrarTela={mostrarTela}/>
        }else if(renderizaLista === 'listaDePlaylist') {
          return   <PlaylistDetalhes mostrarTela={mostrarTela}/>
        }
      }
    
      const mostrarTela =(renderizaLista) =>{
        setRenderizaLista(renderizaLista)
      }

    return(
        <ListaDePlaylists>
             <h1>Gerenciamento de Playlists</h1>
           
            {rendenrizarGerenciador()}
          
        </ListaDePlaylists>

    )
}

export default GerenciarPlaylists;