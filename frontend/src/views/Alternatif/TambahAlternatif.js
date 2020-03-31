import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, CardHeader, CardBody, CardFooter,FormText, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import { tambahAlternatif } from '../../api'

const TambahAlternatif = () => {
    const[stateKode,setStateKode]                 = useState('')
    const[errorKode,setErrorKode]                 = useState('')

    const[stateMerk,setStateMerk]                 = useState('')
    const[errorMerk,setErrorMerk]                 = useState('')

    const[stateSensor,setStateSensor]             = useState('')
    const[errorSensor,setErrorSensor]             = useState('')

    const[stateResolusi,setStateResolusi]         = useState('')
    const[errorResolusi,setErrorResolusi]         = useState('')

    const[stateHarga,setStateHarga]               = useState('')
    const[errorHarga,setErrorHarga]               = useState('')

    const[stateIso,setStateIso]                   = useState('')
    const[errorIso,setErrorIso]                   = useState('')

    const[stateFitur,setStateFitur]               = useState([
        { namaFitur: '' }
    ])
    const[errorFitur,setErrorFitur]               = useState('')

    const[stateKeterangan,setStateKeterangan]     = useState('')
    const[errorKeterangan,setErrorKeterangan]     = useState('')
    
    const[message,setMessage]                      = useState('')

    const changeKode = (e) => {
        setStateKode(e.target.value)
        setErrorKode('')
    }

    const changeMerk = (e) => {
        setStateMerk(e.target.value)
        setErrorMerk('')
    }

    const changeSensor = (e) => {
        setStateSensor(e.target.value)
        setErrorSensor('')
    }

    const changeResolusi = (e) => {
        setStateResolusi(e.target.value)
        setErrorResolusi('')
    }

    const changeHarga = (e) => {
        setStateHarga(e.target.value)
        setErrorHarga('')
    }

    const changeIso = (e) => {
        setStateIso(e.target.value)
        setErrorIso('')
    }

    const changeFitur = (e,index) => {
        const { value } = e.target;
        const list = [...stateFitur];
        list[index].namaFitur = value;
        setStateFitur(list);
        setErrorFitur('')
    }

    const addFieldFitur = () => {
        setStateFitur([...stateFitur, { namaFitur: '' }])
    }

    const minusFieldFitur = (i) => {
        const list = [...stateFitur];
        list.splice(i, 1);
        setStateFitur(list);
    }

    const changeKeterangan = (e) => {
        setStateKeterangan(e.target.value)
        setErrorKeterangan('')
    }

    const simpanData = (e) => {
        e.preventDefault()
        if(stateKode === '' && stateMerk === '' && stateSensor === '' && stateResolusi === '' && stateHarga === '' && stateIso === '' && stateKeterangan === '') {
            setErrorKode('inputan kode tidak boleh kosong')
            setErrorMerk('inputan merek tidak boleh kosong')
            setErrorSensor('inputan sensor tidak boleh kosong')
            setErrorResolusi('inputan resolusi tidak boleh kosong')
            setErrorHarga('inputan harga tidak boleh kosong')
            setErrorIso('inputan iso tidak boleh kosong')
            setErrorKeterangan('inputan keterangan tidak boleh kosong')
        } else if (stateKode === '' && stateMerk === '') {
            setErrorKode('inputan kode tidak boleh kosong')
            setErrorMerk('inputan merek tidak boleh kosong')
        } else if (stateKode === '' && stateSensor === '') {
            setErrorKode('inputan kode tidak boleh kosong')
            setErrorSensor('inputan sensor tidak boleh kosong')
        } else if (stateKode === '' && stateResolusi === '') {
            setErrorKode('inputan kode tidak boleh kosong')
            setErrorResolusi('inputan resolusi tidak boleh kosong')
        } else if (stateKode === '' && stateHarga === '') {
            setErrorKode('inputan kode tidak boleh kosong')
            setErrorHarga('inputan harga tidak boleh kosong')
        } else if (stateKode === '' && stateIso === '') {
            setErrorKode('inputan kode tidak boleh kosong')
            setErrorIso('inputan iso tidak boleh kosong')
        } else if (stateKode === '' && stateKeterangan === '') {
            setErrorKode('inputan kode tidak boleh kosong')
            setErrorKeterangan('inputan keterangan tidak boleh kosong')
        } else if (stateMerk === '' && stateSensor === '') {
            setErrorMerk('inputan merek tidak boleh kosong')
            setErrorSensor('inputan sensor tidak boleh kosong')
        } else if (stateMerk === '' && stateResolusi === '') {
            setErrorMerk('inputan merek tidak boleh kosong')
            setErrorResolusi('inputan resolusi tidak boleh kosong')
        } else if (stateMerk === '' && stateHarga === '') {
            setErrorMerk('inputan merek tidak boleh kosong')
            setErrorHarga('inputan harga tidak boleh kosong')
        } else if (stateMerk === '' && stateIso === '') {
            setErrorMerk('inputan merek tidak boleh kosong')
            setErrorIso('inputan iso tidak boleh kosong')
        } else if (stateMerk === '' && stateKeterangan === '') {
            setErrorMerk('inputan merek tidak boleh kosong')
            setErrorKeterangan('inputan keterangan tidak boleh kosong')
        } else if (stateKode && stateMerk && stateSensor && stateResolusi && stateHarga && stateIso  && stateKeterangan) {
            tambahAlternatif(stateKode,stateMerk,stateSensor,stateResolusi,stateHarga,stateIso,stateFitur,stateKeterangan)
            .then(res => {
                if(res) {
                    setStateKode('')
                    setStateMerk('')
                    setStateSensor('')
                    setStateResolusi('')
                    setStateHarga('')
                    setStateIso('')
                    setStateFitur([{namaFitur: ''}])
                    setStateKeterangan('')
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
                                <Col md="4">
                                    <FormGroup>
                                        <Label>Kode</Label>
                                        <Input type="text" placeholder="kode kamera" value={stateKode} onChange={changeKode}/>
                                    </FormGroup>
                                    {
                                        errorKode && (
                                            <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorKode}</FormText>
                                        )
                                    }
                                </Col>

                                <Col md="4">
                                    <FormGroup>
                                        <Label>Merek Kamera</Label>
                                        <Input type="text" placeholder="merek kamera" value={stateMerk} onChange={changeMerk}/>
                                    </FormGroup>
                                    {
                                        errorMerk && (
                                            <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorMerk}</FormText>
                                        )
                                    }
                                </Col>

                                <Col md="4">
                                    <FormGroup>
                                        <Label>Sensor Kamera</Label>
                                        <Input type="text" placeholder="sensor kamera" value={stateSensor} onChange={changeSensor}/>
                                    </FormGroup>
                                    {
                                        errorSensor && (
                                            <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorSensor}</FormText>
                                        )
                                    }
                                </Col>

                                <Col md="4">
                                    <FormGroup>
                                        <Label>Resolusi Kamera</Label>
                                        <Input type="number" placeholder="resolusi kamera" value={stateResolusi} onChange={changeResolusi}/>
                                    </FormGroup>
                                    {
                                        errorResolusi && (
                                            <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorResolusi}</FormText>
                                        )
                                    }
                                </Col>

                                <Col md="4">
                                    <FormGroup>
                                        <Label>Harga Kamera</Label>
                                        <Input type="number" placeholder="harga kamera" value={stateHarga} onChange={changeHarga}/>
                                    </FormGroup>
                                    {
                                        errorHarga && (
                                            <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorHarga}</FormText>
                                        )
                                    }
                                </Col>

                                <Col md="4">
                                    <FormGroup>
                                        <Label>Iso Kamera</Label>
                                        <Input type="number" placeholder="iso kamera" value={stateIso} onChange={changeIso}/>
                                    </FormGroup>
                                    {
                                        errorIso && (
                                            <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorIso}</FormText>
                                        )
                                    }
                                </Col>

                                <Col md="8">
                                    <FormGroup>
                                        <Label>Fitur Kamera</Label>
                                        {
                                            stateFitur.map((data,i) => {
                                                return (
                                                    <Fragment key={i}>
                                                        <Row>
                                                            <Col md="8" style={{marginBottom: '10px'}}>
                                                                <Input type="text" placeholder="fitur kamera" value={data.namaFitur} onChange={(e) => changeFitur(e,i)}/>
                                                            </Col>
                                                            <Col md="4">
                                                                {
                                                                    i === 0 ? (
                                                                        <Button color="primary" onClick={addFieldFitur}><i className="fa fa-plus"></i></Button>
                                                                    ) : (
                                                                        <Button color="danger" onClick={() => minusFieldFitur(i) }><i className="fa fa-minus"></i></Button>
                                                                    )
                                                                }
                                                                
                                                            </Col>
                                                        </Row>
                                                        {
                                                            errorFitur && (
                                                                <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorFitur}</FormText>
                                                            )
                                                        }
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </FormGroup>
                                </Col>

                                <Col md="12">
                                    <FormGroup>
                                        <Label>Keterangan Kamera</Label>
                                        <Input type="textarea" placeholder="keterangan kamera" value={stateKeterangan} onChange={changeKeterangan}/>
                                    </FormGroup>
                                    {
                                        errorKeterangan && (
                                            <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorKeterangan}</FormText>
                                        )
                                    }
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Link to="/alternatif">
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

export default TambahAlternatif