import React, { useEffect, useState, Fragment } from "react";
import { CardBody, Card, Table } from "reactstrap";
import axios from 'axios';

const HasilPerhitunganFuzzy = (props) => {
    const idBobot = props.match.params.idBobot
    const [matrixFAhp,setMatrixFAhp] = useState([]);
    const [matrixAhp,setMatrixAhp] = useState([]);
    const [sintetis,setSintetis] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/bobot/fuzzy/${idBobot}`)
        .then((response) => {
            console.log(response)
            setMatrixAhp(response.data.matrix_ahp)
            setMatrixFAhp(response.data.matrix_fahp)
            setSintetis(response.data.syntetic)
        });
    }, [idBobot])

    return (
        <div className="animated fadeIn">
            <h2>Hasil Perhitungan Fuzzy</h2>
            <Card>
                <CardBody>
                    <h4>Matrix AHP</h4>
                    <Table className="table-bordered text-center">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Sensor</th>
                            <th>Resolusi</th>
                            <th>Harga</th>
                            <th>Fitur</th>
                            <th>Iso</th>
                        </tr>
                        </thead>

                        {matrixAhp.map((d, i) => {
                            return (
                                <Fragment key={i}>
                                    <tbody>
                                        <tr>
                                            <td>{d.name}</td>
                                            {d.bobot.map((b, i1) => {
                                                return <td key={i1}>{b}</td>;
                                            })}
                                        </tr>
                                    </tbody>
                                </Fragment>
                            );
                        })}
                    </Table>
                </CardBody>

                <CardBody>
                    <h4>Matrix F-AHP</h4>
                    <div className="table-responsive">
                        <Table className="table-bordered text-center">
                            <thead>
                                <tr>
                                    <th rowSpan="3" ></th>
                                    <th colSpan="3" >Sensor</th>
                                    <th colSpan="3" >Resolusi</th>
                                    <th colSpan="3" >Harga</th>
                                    <th colSpan="3" >Fitur</th>
                                    <th colSpan="3" >Iso</th>
                                    <th colSpan="3" >Jumlah Baris</th>
                                </tr>
                                <tr>
                                    <th>L</th>
                                    <th>M</th>
                                    <th>U</th>
                                    <th>L</th>
                                    <th>M</th>
                                    <th>U</th>
                                    <th>L</th>
                                    <th>M</th>
                                    <th>U</th>
                                    <th>L</th>
                                    <th>M</th>
                                    <th>U</th>
                                    <th>L</th>
                                    <th>M</th>
                                    <th>U</th>
                                    <th>L</th>
                                    <th>M</th>
                                    <th>U</th>
                                </tr>
                            </thead>

                            {matrixFAhp.map((d, i) => {
                                return (
                                    <Fragment key={i}>
                                        <tbody>
                                            <tr>
                                                <td>{d.name}</td>
                                                {d.bobot.map((b, i1) => {
                                                    return (
                                                        <Fragment key={i1}>
                                                            {
                                                                b.map((c,i2) => {
                                                                    return <td key={i2}>{c}</td>
                                                                })
                                                            }
                                                        </Fragment>
                                                    )
                                                })}
                                            </tr>
                                        </tbody>
                                    </Fragment>
                                );
                            })}
                        </Table>
                    </div>
                </CardBody>

                <CardBody>
                    <h4>Perhitungan Sintetis</h4>
                    <Table className="table-bordered text-center">
                        <thead>
                            <tr>
                                <th rowSpan="3" ></th>
                                <th colSpan="3" >Nilai Sintetis</th>
                            </tr>
                            <tr>
                                <th>L</th>
                                <th>M</th>
                                <th>U</th>
                            </tr>
                        </thead>

                        {sintetis.map((d, i) => {
                            return (
                                <Fragment key={i}>
                                    <tbody>
                                        <tr>
                                            <td>{d.name}</td>
                                            {d.bobot.map((b, i1) => {
                                                return <td key={i1}>{b}</td>;
                                            })}
                                        </tr>
                                    </tbody>
                                </Fragment>
                            );
                        })}
                    </Table>
                </CardBody>
            </Card>
        </div>
    )
}

export default HasilPerhitunganFuzzy