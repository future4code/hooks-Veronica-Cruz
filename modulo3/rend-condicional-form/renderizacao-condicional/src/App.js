
import React from 'react';
import './App.css';
import styledComponents from 'styled-components';
import {PrimeiraEtapa} from './components/Etapa1';
import {SegundaEtapa} from './components/Etapa2';
import {TerceiraEtapa} from './components/Etapa3';
import {EtapaFinal} from './components/EtapaFinal'




function App() {
  return (
    <div>
      <PrimeiraEtapa/>
      <SegundaEtapa/>
      <TerceiraEtapa/>
      <EtapaFinal/>
    </div>
  );
}

export default App;
