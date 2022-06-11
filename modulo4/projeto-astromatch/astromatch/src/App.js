import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';
import TelaInicialCard from "./components/TelaInicial/TelaInicial";
import TelaMatches from "./components/TelaMatches/TelaMatches";



const App = () => {

  const [mudarTela, setMudarTela]= useState('escolherPessoas')

  const atualizaTela = ()=> {
    if (mudarTela === 'escolherPessoas') {
      return <TelaInicialCard/>
    } else if (mudarTela === 'verMatches') {
      return <TelaMatches/>
    }
  }

  const changePage = (mudarTela) => {
    setMudarTela(mudarTela)
  }


  return (
    <div className="App">
      
      
      
      <TelaInicialCard changePage={changePage}/>
     
      
      <TelaMatches/>
       
    </div>
  );
}

export default App;
