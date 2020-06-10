import React, { Fragment, useState, useEffect } from 'react'
import { getDataKriteria } from '../../api'
import { Row, Col, Card, CardHeader, CardBody, FormGroup, Label, Input, Button } from 'reactstrap'

const BobotKriteria = () => {

    const[stateDataKriteria,setStateDataKriteria] = useState([])
    const[stateSkalaSaaty] = useState([
        {
            intensitas: '1',
            keterangan: 'Kedua elemen sama saja pentingnya'
        },
        {
            intensitas: '3',
            keterangan: 'Elemen yang satu sedikit lebih penting dari pada elemen yang lainnya'
        },
        {
            intensitas: '5',
            keterangan: 'Elemen yang satu lebih penting dari pada yang lainnya'
        },
        {
            intensitas: '7',
            keterangan: 'Elemen yang satu jelas lebih mutlak penting dari pada elemen yang lainnya'
        },
        {
            intensitas: '9',
            keterangan: 'Satu elemen mutlak penting dari pada elemen lainnya'
        },
        {
            intensitas: '2,4,6,8',
            keterangan: 'Nilai-nilai antara dua nilai pertimbangan-pertimbangan yang berdekatan'
        },
        {
            intensitas: 'Kebalikan',
            keterangan: 'Jika aktifitas i mendapat satu angka dibandingkan dengan aktifitas j, maka j memiliki kebalikannya dibandingkan dengan i'
        }
    ])

    useEffect(() => {
        getDataKriteria()
        .then(res => {
            if(res) {
                setStateDataKriteria(res.data)
            }
        })
    })
    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="12" lg="12">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Bobot Kriteria
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col md="4">
                                    <FormGroup >
                                        <Label style={{fontSize: '20px'}}>Kriteria Pertama</Label>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="text" value="Sensor" disabled/>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="text" value="Resolusi" disabled/>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="text" value="Harga" disabled/>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="text" value="Fitur" disabled/>
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Label style={{fontSize: '20px'}}>Penilaian</Label>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select">
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select">
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option>{data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select">
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option>{data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select">
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option>{data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Label style={{fontSize: '20px'}}>Kriteria Kedua</Label>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select">
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select">
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select">
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select">
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Button color="primary">Hitung</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default BobotKriteria