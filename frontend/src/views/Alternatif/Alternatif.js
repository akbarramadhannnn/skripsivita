import React, { useEffect, useState, Fragment } from 'react'
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import { getDataAlternatif } from '../../api'

const Alternatif = () => {
    const[dataAlternatif,setDataAlternatif] = useState([])

    useEffect(() => {
        getDataAlternatif()
        .then(res => {
            if(res.status === true) {
                setDataAlternatif(res.data)
            }
        })
    }, [])

    return (
        <div className="animated fadeIn">
            <Row>
            <Col xs="12" lg="12">
                <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"></i> Data Alternatif
                </CardHeader>
                <CardBody>
                    <Table className="text-center" responsive>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Kode</th>
                                <th>Nama</th>
                                <th>Jenis</th>
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
                                                <td>{data.nama}</td>
                                                <td>{data.jenis}</td>
                                                <td>
                                                    <Button color="primary">Isi Data</Button>{' '}
                                                    <Button color="warning">Edit</Button>{' '}
                                                    <Button color="danger">Hapus</Button>{' '}
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