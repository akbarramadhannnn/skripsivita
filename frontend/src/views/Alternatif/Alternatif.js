import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, Col, Row, Table, Button, Alert } from 'reactstrap';
import { getDataAlternatif, hapusAlternatif } from '../../api'

const Alternatif = () => {
    const[dataAlternatif,setDataAlternatif] = useState([])
    const[message,setMessage]               = useState('')

    useEffect(() => {
        getDataAlternatif()
        .then(res => {
            if(res.status === true) {
                setDataAlternatif(res.data)
            }
        })
    }, [])

    const deleteAlternatif = (id) => {
        hapusAlternatif(id)
        .then(res => {
            if(res) {
                getDataAlternatif()
                .then(res => {
                    setMessage('Alternatif berhasil di hapus')
                    setDataAlternatif(res.data)
                    setTimeout(() => {
                        setMessage('')
                    }, 3000);
                })
            }
        })
    }

    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="12" lg="12">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Data Alternatif
                        </CardHeader>
                        <CardBody>
                            {
                                message && (
                                    <Alert color="danger">{message}</Alert>
                                )
                            }
                            <Link to="/alternatif/tambah">
                                <Button color="primary">Tambah Alternatif</Button>{' '}
                            </Link>
                            <br />
                            <br />

                            <Table className="text-center" responsive>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Kode</th>
                                        <th>Merek Kamera</th>
                                        <th>Keterangan</th>
                                    </tr>
                                </thead>
                                
                                {
                                    dataAlternatif && dataAlternatif.map((data,i) => {
                                        return (
                                            <Fragment key={i}>
                                                <tbody>
                                                    <tr>
                                                        <td>{i + 1}</td>
                                                        <td>{data.kode}</td>
                                                        <td>{data.merk}</td>
                                                        <td>
                                                            <Link to={`/alternatif/edit/${data._id}`}>
                                                                <Button color="warning">Edit</Button>{' '}
                                                            </Link>
                                                            <Button color="danger" onClick={() => deleteAlternatif(data._id)} >Hapus</Button>{' '}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Fragment>
                                        )
                                    })
                                }
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Alternatif