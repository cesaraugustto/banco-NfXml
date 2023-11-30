// src/components/MainContent.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Importar from "./Import";
import Listar from "./List";
import Exportar from "./Export";

const MainContent = () => {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                <Routes>
                    <Route path="/importar" element={<Importar />} />
                    <Route path="/listar" element={<Listar />} />
                    <Route path="/exportar" element={<Exportar />} />
                </Routes>
            </div>
        </div>
    );
};

export default MainContent;
