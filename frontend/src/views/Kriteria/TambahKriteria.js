import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, CardHeader, CardBody, CardFooter,FormText, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import { tambahKriteria } from '../../api'

const TambahKriteria = () => {
    const[stateKodeKriteria,setStateKodeKriteria]       = useState('')
    const[errorKodeKriteria,setErrorKodeKriteria]       = useState('')
    const[stateNamaKriteria,setStateNamaKriteria]       = useState('')
    const[errorNamaKriteria,setErrorNamaKriteria]       = useState('')
    const[message,setMessage]                           = useState('')

    const changeKode = (e) => {
        setStateKodeKriteria(e.target.value)
        setErrorKodeKriteria('')
    }

    const changeNama = (e) => {
        setStateNamaKriteria(e.target.value)
        setErrorNamaKriteria('')
    }

    const simpanData = (e) => {
        e.preventDefault()
        if(stateKodeKriteria === '' && stateNamaKriteria === '') {
            setErrorKodeKriteria('inputan kode kriteria tidak boleh kosong')
            setErrorNamaKriteria('inputan nama kriteria tidak boleh kosong')
        } else if(stateKodeKriteria === '') {
            setErrorKodeKriteria('inputan kode kriteria tidak boleh kosong')
        } else if(stateNamaKriteria === '') {
            setErrorNamaKriteria('inputan nama kriteria tidak boleh kosong')
        } else {
            tambahKriteria(stateKodeKriteria,stateNamaKriteria)
            .then(res => {
                if(res.status === true) {
                    setStateKodeKriteria('')
                    setStateNamaKriteria('')
                    setMessage('data kriteria berhasil ditambahkan')
                    setTimeout(() => {
                        setMessage('')
                    }, 3000);
                }
            })
        }
    }

    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="12" sm="12">
                    <Card>
                        <CardHeader> Tambah Kriteria</CardHeader>
                        <CardBody>
                            <Row>
                                <Col md="12">
                                    {
                                        message && (
                                            <Alert color="primary">{message}</Alert>
                                        )
                                    }
                                </Col>
                                <Col md="12">
                                    <FormGroup>
                                        <Label>Kode Kriteria</Label>
                                        <Input type="text" placeholder="kode kriteria" value={stateKodeKriteria} onChange={changeKode}/>
                                    </FormGroup>
                                    {
                                        errorKodeKriteria && (
                                            <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorKodeKriteria}</FormText>
                                        )
                                    }
                                </Col>

                                <Col md="12">
                                    <FormGroup>
                                        <Label>Nama Kriteria</Label>
                                        <Input type="text" placeholder="nama kriteria" value={stateNamaKriteria} onChange={changeNama}/>
                                    </FormGroup>
                                    {
                                        errorNamaKriteria && (
                                            <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorNamaKriteria}</FormText>
                                        )
                                    }
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Link to="/kriteria">
                                <Button type="button" color="warning">
                                    <i className="fa fa-dot-circle-o"></i> Kembali
                                </Button>{' '}
                            </Link>
                            <Button type="button" color="primary" onClick={simpanData}>
                                <i className="fa fa-dot-circle-o"></i> Simpan
                            </Button>{' '}
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default TambahKriteria