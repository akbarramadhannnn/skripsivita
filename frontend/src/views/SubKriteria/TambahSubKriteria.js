import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Row, Col, Card, CardHeader, CardBody, CardFooter,FormText, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import { tambahSubKriteria, getKriteriaByIdKriteria } from '../../api'

const TambahSubKriteria = (props) => {
    // const[stateSubKriteria,setStateSubKriteria]         = useState([
    //     { nama: '' }
    // ])
    const[stateNamaKriteria,setStateNamaKriteria]       = useState('')
    const[stateIdNamaKriteria,setStateIdNamaKriteria]   = useState('')
    const[stateNamaSubKriteria,setStateNamaSubKriteria] = useState('')
    const[errorNamaSubKriteria,setErrorNamaSubKriteria] = useState('')
    const[message,setMessage]                           = useState('')

    useEffect(() => {
        getKriteriaByIdKriteria(props.match.params.idKriteria)
        .then(res => {
            if(res.status === true) {
                setStateNamaKriteria(res.data.namaKriteria)
                setStateIdNamaKriteria(res.data._id)
            }
        })
    }, [props.match.params.idKriteria])

    // const changeSelect = (e) => {
    //     const idKriteria = e.target[e.target.selectedIndex].id
    //     setStateNamaKriteria(e.target.value)
    //     setStateIdNamaKriteria(idKriteria)
    //     setErrorNamaKriteria('')
    // }

    const changeNamaSubKriteria = (e) => {
        setStateNamaSubKriteria(e.target.value)
        setErrorNamaSubKriteria('')
    }

    // const tambahKolomKriteria = () => {
    //     setStateSubKriteria([...stateSubKriteria, { nama: '' }])
    // }

    // const kuranginKolomKriteria = (index) => {
    //     const values = [...stateSubKriteria];
    //     values.splice(index, 1);
    //     setStateSubKriteria(values);
    // }

    // const changeSubKriteria = (e,index) => {
    //     const values = [...stateSubKriteria];
    //     values[index].nama = e.target.value;
    //     setStateSubKriteria(values);
    // }

    const simpan = () => {
        if (stateNamaSubKriteria === '') {
            setErrorNamaSubKriteria('nama sub kriteria tidak boleh kosong')
        } else {
            tambahSubKriteria(stateIdNamaKriteria,stateNamaSubKriteria)
            .then(res => {
                if(res.status === true) {
                    setStateNamaSubKriteria('')
                    setMessage('data subkriteria berhasil ditambahkan')
                    setTimeout(() => {
                        setMessage('')
                        props.history.push(`/subkriteria/${props.match.params.idKriteria}`)
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
                        <CardHeader> Tambah Sub Kriteria</CardHeader>
                        <CardBody>
                            <Row>
                                <Col md="12">
                                    {
                                        message && (
                                            <Alert color="primary">{message}</Alert>
                                        )
                                    }
                                </Col>
                                {/* <Col md="6">
                                    <FormGroup>
                                        <Label>Nama Kriteria</Label>
                                        <Input type="select" value={stateNamaKriteria} onChange={changeSelect}>
                                            <option value="">Silahkan Pilih Kriteria</option>
                                            {
                                                dataKriteria && dataKriteria.map((data,i) => {
                                                    return (
                                                        <Fragment key={i}>
                                                            <option value={data.namaKriteria} id={data._id}>{data.namaKriteria}</option>
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </FormGroup>
                                    {
                                        errorNamaKriteria && (
                                            <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorNamaKriteria}</FormText>
                                        )
                                    }
                                </Col> */}
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Nama Kriteria</Label>
                                        <Input disabled type="text" placeholder="nama sub kriteria" value={stateNamaKriteria} />
                                    </FormGroup>
                                </Col>

                                <Col md="6">
                                    <FormGroup>
                                        <Label>Nama Sub Kriteria</Label>
                                        <Input type="text" placeholder="nama sub kriteria" value={stateNamaSubKriteria} onChange={changeNamaSubKriteria}/>
                                    </FormGroup>
                                    {
                                        errorNamaSubKriteria && (
                                            <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorNamaSubKriteria}</FormText>
                                        )
                                    }
                                </Col>

                                {/* <Col md="8">
                                    <Label>Nama Sub Kriteria</Label>
                                    {
                                        stateSubKriteria.map((data,i) => {
                                            return (
                                                <Fragment key={i}>
                                                    <Row style={{marginBottom: '20px'}}>
                                                        <Col md="8">
                                                            <Input type="text" value={data.nama} onChange={(e) => changeSubKriteria(e,i)} />
                                                        </Col>

                                                        <Col md="auto">
                                                            {
                                                                i === 0 ? (
                                                                    <Button color="primary" onClick={tambahKolomKriteria}><i className="fa fa-plus"></i></Button>
                                                                ) : (
                                                                    <Button color="danger" onClick={() => kuranginKolomKriteria(i)}><i className="fa fa-minus"></i></Button>
                                                                )
                                                            }
                                                        </Col>
                                                    </Row>
                                                </Fragment>
                                            )
                                        })
                                    }
                                </Col> */}
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Link to={`/subkriteria/${props.match.params.idKriteria}`}>
                                <Button type="button" color="warning">
                                    <i className="fa fa-dot-circle-o"></i> Kembali
                                </Button>{' '}
                            </Link>
                            <Button type="button" color="primary" onClick={simpan}>
                                <i className="fa fa-dot-circle-o"></i> Simpan
                            </Button>{' '}
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(TambahSubKriteria)