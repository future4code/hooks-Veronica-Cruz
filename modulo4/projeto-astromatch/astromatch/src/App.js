import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';
import TelaInicialCard from "./components/TelaInicial/TelaInicial";
import TelaMatches from "./components/TelaMatches/TelaMatches";


const App = () => {

  const [escolherPerfil, setEscolherPerfil] = useState([]);
  const [nomePerfil, setNomePerfil] = useState("");

  useEffect(() => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
      .then((res) => {
        setEscolherPerfil(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      
      <h1>Astromatch</h1>
      <TelaInicialCard>
      
      </TelaInicialCard>
      <TelaMatches/>
       
    </div>
  );
}

export default App;
