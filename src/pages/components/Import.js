// Importar.js
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const Importar = () => {
    const [fileData, setFileData] = useState([]);
    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const xmlString = e.target.result;
            // Aqui você pode analisar o arquivo XML e extrair as informações desejadas
            // Por exemplo, você pode usar uma biblioteca como xml2js para analisar o XML
            // e extrair os dados relevantes.

            // Simulando dados de exemplo
            const extractedData = [
                { id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
                { id: 2, firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
                { id: 3, firstName: 'Larry', lastName: 'Bird', username: '@twitter' }
            ];

            setFileData(extractedData);
        };

        reader.readAsText(file);
    };

    return (
        <>
            {/* ... (seu conteúdo existente) */}
            <Col className="d-flex justify-content-center">
                <Card>
                    <Card.Body>
                        <Row className="my-2">
                            <Col className="d-flex justify-content-end">
                                <input type="file" onChange={handleFileChange} />
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
                                        {fileData.map((data) => (
                                            <tr key={data.id}>
                                                <td>{data.id}</td>
                                                <td>{data.firstName}</td>
                                                <td>{data.lastName}</td>
                                                <td>{data.username}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        {/* ... (seu conteúdo existente) */}
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Importar;
