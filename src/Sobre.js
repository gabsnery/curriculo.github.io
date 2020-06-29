import React from 'react';
import logo from './logo.svg';
import './App.css';

import {withRouter} from 'react-router';


function Sobre() {
  return (
    <>
    <div style = {{width:'100%',padding:'10px 0',borderBottom:'1px dotted #282c34'}}> 
      <label>Interesses</label><br/>
      <label class = "cv-content">
      <ul style={{color : '#282c34'}}>
        <li>Viajar</li>
        <li>Desenvolver</li>
        <li>Evolução</li>
        <li>Desafios</li>

    </ul>
      </label>
    </div>

 
    </>
  );
}
export default Sobre;
