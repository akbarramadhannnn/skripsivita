import React, { useEffect, useState } from 'react'
import { Row, Col, Card, CardHeader, CardBody, Table } from 'reactstrap'
import { getAllUser } from '../../api'
import moment from 'moment'
import 'moment/locale/id';

const Pengguna = () => {
    const[user,setUser] = useState([])

    useEffect(() => {
        getAllUser()
        .then(res => {
            if(res) {
                setUser(res.data)
            }
        })
    }, [])

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

                                {
                                    user && user.map((u,i) => {
                                        return (
                                            <tbody key={i}>
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{u.nama}</td>
                                                    <td>{u.jenisKelamin}</td>
                                                    <td>{u.tempatLahir}</td>
                                                    <td>{moment(u.tanggalLahir).format('LL')}</td>
                                                    <td>{u.email}</td>
                                                </tr>
                                            </tbody>
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

export default Pengguna