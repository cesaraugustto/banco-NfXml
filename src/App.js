// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './pages/components/Sidebar';
import Importar from './pages/components/Import';
import Listar from './pages/components/List';
import Exportar from './pages/components/Export';



function App() {
  return (
    <div className="app">
      <Router>
        <div className="container-fluid">
          <Row>
            <Col lg={2} className="p-0 m-0">
              <Sidebar />
            </Col>
            <Col className="p-0 m-0">

              <Routes>
                <Route path="/importar" element={<Importar />} />
                <Route path="/listar" element={<Listar />} />
                <Route path="/exportar" element={<Exportar />} />
              </Routes>

            </Col>
          </Row>
        </div>
      </Router>
    </div>
  );
}

export default App;
