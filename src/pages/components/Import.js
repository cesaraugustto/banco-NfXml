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

            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

            const nfe = xmlDoc.getElementsByTagName('NFe')[0];
            const infNFe = nfe.getElementsByTagName('infNFe')[0];

            const infEmit = nfe.getElementsByTagName('emit')[0];
            const infDest = nfe.getElementsByTagName('dest')[0];

            const extractedData = {
                senderName: infEmit.getElementsByTagName('xNome')[0].textContent,
                senderCode: infEmit.getElementsByTagName('CNPJ')[0].textContent,

                receiverName: infDest.getElementsByTagName('xNome')[0].textContent,
                receiverCode: infDest.getElementsByTagName('CNPJ')[0].textContent,
                // Add other fields as required

                //supplier: infNFe.getElementsByTagName('xNome')[0].textContent,
                invoiceNumber: infNFe.getElementsByTagName('nNF')[0].textContent,
            };

            console.log(extractedData);
            setFileData([extractedData]); // Coloque os dados em um array
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
                                            <th>Invoice</th>
                                            <th>Remetente</th>
                                            <th>CNPJ Remetente</th>
                                            <th>Destinatário</th>
                                            <th>CNPJ Destinatário</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {fileData.map((data, index) => (
                                            <tr key={index}>
                                                <td>{data.invoiceNumber}</td>
                                                <td>{data.senderName}</td>
                                                <td>{data.senderCode}</td>
                                                <td>{data.receiverName}</td>
                                                <td>{data.receiverCode}</td>
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
