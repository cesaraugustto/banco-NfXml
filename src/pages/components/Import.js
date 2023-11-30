// Importar.js
import React from 'react';
import Styles from "../css/Sidebar.module.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const Importar = () => {
    return (
        <>
        <Row className="ms-2">
            <h3>Bem vindo(a), usuário</h3>
        </Row>
        <Row className="ms-2">
            <h6>Importar XML/NF</h6>
        </Row>
            <Col className="d-flex justify-content-center">
                <Card>
                    <Card.Body>
                        <Row className="my-2">
                            <Col className="d-flex justify-content-end">
                                <Button variant="primary">Selecionar Arquivo</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Table striped bordered hover variant="light">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan={2}>Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col className="d-flex justify-content-end">
                                <Button variant="primary">Confirmar</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>

        </>



    );
};

export default Importar;