import React, { useState } from "react";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";


function App() {
  const[currentPage, setCurrentPage] = useState("")
  const[detailUrl, setDetailUrl] = useState("")

  const goToDetailsPage = (url) => {
    setCurrentPage("/detalhes")
    setDetailUrl(url)
}

const goToList = () => {
  setCurrentPage("/")
}

//função que vai rendenrizar cada tela com uma condição
function selectPage() {
  if (currentPage === "/") {
    return <CharacterListPage goToDetailsPage={goToDetailsPage}/>
  }else {
    return <CharacterDetailPage goToList={goToList} url={detailUrl}/>
  }
}

  return (
    <div className="App">
   
      <h1>Star Wars</h1>
      {selectPage()}
    </div>
  );
}

export default App;
