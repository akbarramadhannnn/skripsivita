import React from 'react'
import { Row, Col, Card, CardHeader, CardBody, Table } from 'reactstrap'

const Pengguna = () => {

    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="12" lg="12">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Data Pengguna
                        </CardHeader>
                        <CardBody>
                            <Table className="text-center" responsive>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>Jenis Kelamin</th>
                                        <th>Tempat</th>
                                        <th>Tanggal Lahir</th>
                                        <th>E-mail</th>
                                    </tr>
                                </thead>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Pengguna