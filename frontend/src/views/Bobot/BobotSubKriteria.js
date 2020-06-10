import React from 'react'
import { Row, Col, Card, CardHeader, CardBody, FormGroup, Button, Input } from 'reactstrap';

const BobotSubKriteria = () => {

    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="12" lg="12">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Bobot Sub Kriteria
                        </CardHeader>
                        <CardBody>
                            <Col md="12">
                                <FormGroup >
                                    <Input type="select">
                                        <option value="">Pilih Sub Kriteria</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </Input>
                                </FormGroup>
                            </Col>

                            <Col md="12">
                                <Button color="primary">Hitung</Button>
                            </Col>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default BobotSubKriteria