import React, { useState } from 'react'
import { Row, Col, Card, CardHeader, CardBody, CardFooter,FormText, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import { tambahAlternatif } from '../../api'

const TambahAlternatif = () => {
    const[stateKode,setStateKode]       = useState('')
    const[errorKode,setErrorKode]       = useState('')
    const[stateNama,setStateNama]       = useState('')
    const[errorNama,setErrorNama]       = useState('')
    const[stateJenis,setStateJenis]     = useState('')
    const[errorJenis,setErrorJenis]     = useState('')
    const[message,setMessage]           = useState('')

    const changeKode = (e) => {
        setStateKode(e.target.value)
        setErrorKode('')
    }

    const changeNama = (e) => {
        setStateNama(e.target.value)
        setErrorNama('')
    }

    const changeJenis = (e) => {
        setStateJenis(e.target.value)
        setErrorJenis('')
    }

    const simpanData = (e) => {
        e.preventDefault()
        if(stateKode === '' && stateNama === '' && stateJenis === '') {
            setErrorKode('inputan kode tidak boleh kosong')
            setErrorNama('inputan nama tidak boleh kosong')
            setErrorJenis('inputan jenis tidak boleh kosong')
        } else if (stateKode === '' && stateNama === '') {
            setErrorKode('inputan kode tidak boleh kosong')
            setErrorNama('inputan nama tidak boleh kosong')
        } else if (stateKode === '' && stateJenis === '') {
            setErrorKode('inputan kode tidak boleh kosong')
            setErrorJenis('inputan jenis tidak boleh kosong')
        } else if (stateNama === '' && stateJenis === '') {
            setErrorNama('inputan nama tidak boleh kosong')
            setErrorJenis('inputan jenis tidak boleh kosong')
        } else {
            tambahAlternatif(stateKode,stateNama,stateJenis)
            .then(res => {
                if(res.status === true) {
                    setStateKode('')
                    setStateNama('')
                    setStateJenis('')
                    setMessage('data alternatif berhasil ditambahkan')
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
                        <CardHeader> Tambah Alternatif</CardHeader>
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
                                        <Label>Kode</Label>
                                        <Input type="text" placeholder="kode camera" value={stateKode} onChange={changeKode}/>
                                    </FormGroup>
                                    {
                                        errorKode && (
                                            <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorKode}</FormText>
                                        )
                                    }
                                </Col>

                                <Col md="12">
                                    <FormGroup>
                                        <Label>Nama Kamera</Label>
                                        <Input type="text" placeholder="nama camera" value={stateNama} onChange={changeNama}/>
                                    </FormGroup>
                                    {
                                        errorNama && (
                                            <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorNama}</FormText>
                                        )
                                    }
                                </Col>

                                <Col md="12">
                                    <FormGroup>
                                        <Label>Jenis Kamera</Label>
                                        <Input type="text" placeholder="jenis camera" value={stateJenis} onChange={changeJenis}/>
                                    </FormGroup>
                                    {
                                        errorJenis && (
                                            <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorJenis}</FormText>
                                        )
                                    }
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
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

export default TambahAlternatif