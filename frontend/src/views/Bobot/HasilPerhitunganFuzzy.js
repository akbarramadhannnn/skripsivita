import React, { useEffect, useState, Fragment } from "react";
import { CardBody, Card, Table } from "reactstrap";
import axios from 'axios';

const HasilPerhitunganFuzzy = (props) => {
    const idBobot = props.match.params.idBobot
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/bobot/fuzzy/${idBobot}`)
        .then((response) => {
            console.log(response)
            setData(response.data.data)
        });
    }, [idBobot])

    return (
        <div className="animated fadeIn">
            <h2>Hasil Perhitungan Fuzzy</h2>
            <Card>
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
                                </tr>
                            </thead>

                            {data.map((d, i) => {
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
            </Card>
        </div>
    )
}

export default HasilPerhitunganFuzzy