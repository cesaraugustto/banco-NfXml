// src/components/sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from '../css/Sidebar.module.css'; // Arquivo de estilos para o menu lateral

const Sidebar = () => {
  return (
    <div className={`${Styles.sidebar}`}>
      <ul>
        <li><NavLink to="/importar">Importar NF</NavLink></li>
        <li><NavLink to="/listar">Lista total</NavLink></li>
        <li><NavLink to="/exportar">Exportar para Excel</NavLink></li>
        {/* Adicione outros links conforme necessário */}
      </ul>
    </div>
  );
};

export default Sidebar;
