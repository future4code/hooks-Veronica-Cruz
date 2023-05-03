import React, {useState} from "react";
import styled from "styled-components"
import Header from "./components/Header"
import CreatePlaylist from "./components/CreatePlaylist";
import PlaylistManager from "./components/PlaylistManager";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0 auto;

`

const App = () => {

  const [currentPage, setCurrentPage] = useState('playlistCreate') // 'playlistManager'

  const renderCurrentPage = () => {
    if (currentPage === 'playlistCreate' ){
      return  <CreatePlaylist />
    }else if(currentPage === 'playlistManager') {
      return   <PlaylistManager />
    }
  }

  const refreshScreen =(currentPage) =>{
    setCurrentPage(currentPage)
  }
  
  return (
    <AppContainer className="App">
     
      <Header refreshScreen={refreshScreen}/>
     
      {renderCurrentPage()}
     
    </AppContainer>
  );
  }


export default App;
