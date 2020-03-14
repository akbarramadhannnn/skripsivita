import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import { getDataKriteria } from '../../api'

const Kriteria = () => {
    const[dataKriteria,setDataKriteria]                     = useState([])
    const[openTabelKriteria,setOpenTabelKriteria]           = useState(false)
    // const[openTabelSubKriteria,setOpenTabelSubKriteria]     = useState(false)

    useEffect(() => {
        getDataKriteria()
        .then(res => {
            if(res.status === true) {
                setOpenTabelKriteria(true)
                setDataKriteria(res.data)
            }
        })
    }, [])

    // const clickSubKriteria = (id) => {
    //     console.log(id)
    //     setOpenTabelKriteria(false)
    //     setOpenTabelSubKriteria(true)
    // }

    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="12" lg="12">
                    {
                        openTabelKriteria && (
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-align-justify"></i> Data Kriteria
                                </CardHeader>
                                <CardBody>
                                    
                                    <Link to="/kriteria/tambah">
                                        <Button color="primary">Tambah Kriteria</Button>{' '}
                                    </Link>
                                    <br />
                                    <br />

                                    <Table className="text-center" responsive>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Kode</th>
                                                <th>Kriteria</th>
                                                <th>Keterangan</th>
                                            </tr>
                                        </thead>

                                        {
                                            dataKriteria && dataKriteria.map((data,i) => {
                                                return (
                                                    <Fragment key={i}>
                                                        <tbody>
                                                            <tr>
                                                                <td>{i + 1}</td>
                                                                <td>{data.kodeKriteria}</td>
                                                                <td>{data.namaKriteria}</td>
                                                                <td>
                                                                    <Link to={`/subkriteria/${data._id}`}>
                                                                        <Button color="primary">subkriteria</Button>{' '}
                                                                    </Link>
                                                                    <Button color="warning">edit</Button>{' '}
                                                                    <Button color="danger">hapus</Button>{' '}
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
                        )
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Kriteria