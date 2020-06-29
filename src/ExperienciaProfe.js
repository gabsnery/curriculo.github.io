import React from 'react';
import logo from './logo.svg';
import './App.css';


function ExperienciaProfe() {
  return (
    <>
    <div style = {{width:'100%',padding:'10px 0',borderBottom:'1px dotted #282c34'}}> 
    <label>Experiencias Professionais</label><br/>
    </div>
    <div class = "cv-content">
      <label>2 anos - TID Software</label><br/>
      <label>Desenvolvimento de software</label><br/>
      <label>Desenvolvimento e suporte do sistema ERP utilizando linguagem Clarion e banco de dados SQL Server</label><br/>
    </div>
    <div class = "cv-content">
      <label>2 anos - Fundação da Agência das Bacias PCJ</label><br/>
      <label>Analista/desenvolvedor de Sistemas</label><br/>
      <label>
        Durantes o tempo de serviço fui responsável pela implantação e treinamento do SharePoint e Onedrive for bussnises em toda a empresa.<br/>
      Fiz parte da equipe de implatação e treinamento do ERP MS Dynamics 365 e todo o primeiro suporte do sistema na parte de contas a pagar e contabilidade principalmente.<br/>
      Desenhei e desenvolvi o sistema de gestão de contratos utilizando SPFx + react + typescript para a WebApp no SharePoint com api em .Net Core (C#) e banco de dados em postgres.<br/>
      </label><br/>
    </div>
 
    </>
  );
}
export default ExperienciaProfe;
