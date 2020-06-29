import React from 'react';
import Informacoes from './Informacoes.js';
import ExperienciaProfe from './ExperienciaProfe.js';
import Educacao from './Educacao.js';
import EducacaoComplementar from './EducacaoComplementar.js';
import Conhecimentos from './Conhecimentos.js';
import Sobre from './Sobre.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="App-header">
      <div className="App-header2" style = {{width:'80%'}}>
          <Informacoes/>
          <Sobre/>
          <ExperienciaProfe/>
          <Educacao/>
          <EducacaoComplementar/>
          <Conhecimentos/>
      </div>
    </div>
    </>
  );
}

export default App;
