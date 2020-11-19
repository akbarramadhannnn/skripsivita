import React, { useEffect, useState, Fragment } from "react";
import axios from 'axios';
import { Accordion, Button, Card, Table } from "react-bootstrap";

const HasilPerhitunganFuzzy = (props) => {
    const idBobot = props.match.params.idBobot
    const [matrixFAhp,setMatrixFAhp] = useState([]);
    const [matrixAhp,setMatrixAhp] = useState([]);
    const [sintetis,setSintetis] = useState([]);
    const [vector,setVector] = useState([]);
    const [normalisasiVector,setNormalisasiVector] = useState([]);
    const [subKriteria,setSubkriteria] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/bobot/fuzzy/${idBobot}`)
        .then((response) => {
            console.log('fuzzy',response)
            setMatrixAhp(response.data.kriteria.matrix_ahp)
            setMatrixFAhp(response.data.kriteria.matrix_fahp)
            setSintetis(response.data.kriteria.syntetic)
            setVector(response.data.kriteria.vector)
            setNormalisasiVector(response.data.kriteria.normalisasi_vector)
            setSubkriteria(response.data.sub_kriteria)
        });
    }, [idBobot])

    return (
        <div className="animated fadeIn">
            <h2>Hasil Perhitungan Fuzzy</h2>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Kriteria
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div className="table-responsive mb-3">
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
                            </div>

                            <h4>Matrix F-AHP</h4>
                            <div className="table-responsive mb-3">
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

                            <h4>Perhitungan Sintetis</h4>
                            <div className="table-responsive mb-3">
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
                            </div>

                            <h4>Penentuan Nilai Vector dan Nilai Defuzifikasi</h4>
                            <div className="table-responsive mb-3">
                                {
                                    vector.map((d,i) => {
                                        return (
                                            <Fragment key={i}>
                                                {
                                                    d.name !== 'total' && (
                                                        <Table className="table-bordered text-center">
                                                            <thead>
                                                                <tr>
                                                                    <th>{d.name}</th>
                                                                    <th>Defuzifikasi</th>
                                                                </tr>
                                                            </thead>

                                                            {
                                                                d.bobot.vector && d.bobot.vector.map((v,iv) => {
                                                                    return (
                                                                        <tbody key={iv}>
                                                                            <tr>
                                                                                <td>{v.name}</td>
                                                                                <td>{v.value}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    )
                                                                })
                                                            }
                                                            
                                                            {
                                                                d.bobot.min && (
                                                                    <tfoot>
                                                                        <tr>
                                                                            <td><b>min defuzifikasi</b></td>
                                                                            <td>{d.bobot.min.value}</td>
                                                                        </tr>
                                                                    </tfoot>
                                                                )
                                                            }
                                                        </Table>
                                                    )
                                                }
                                            </Fragment>
                                        )
                                    })
                                }
                            </div>

                            <h4>Normalisasi Vector</h4>
                            <div className="table-responsive mb-3">
                                <Table className="table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th rowSpan="3" ></th>
                                            <th>Sensor</th>
                                            <th>Resolusi</th>
                                            <th>Harga</th>
                                            <th>Fitur</th>
                                            <th>Iso</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>w1</td>
                                            {
                                                vector.map((d,i) => {
                                                    return (
                                                        <Fragment key={i}>
                                                            <td>
                                                                {d.bobot.min ? d.bobot.min.value : d.bobot}
                                                            </td>
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </tr>
                                        <tr>
                                            <td>w2</td>
                                            {
                                                normalisasiVector.map((d,i) => {
                                                    return <td key={i}>{d.bobot}</td>
                                                })
                                            }
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {
                    subKriteria.map((sub,iSub) => {

                        return (
                            <Card key={iSub}>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={iSub + 1}>
                                        Sub Kriteria {sub.nama_subkriteria}
                                    </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey={iSub + 1}>
                                    <Card.Body>
                                        <div className="table-responsive mb-3">
                                            <h4>Matrix AHP</h4>
                                            <Table className="table-bordered text-center">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>{sub.matrix_ahp[0].name}</th>
                                                        <th>{sub.matrix_ahp[1].name}</th>
                                                        <th>{sub.matrix_ahp[2].name}</th>
                                                    </tr>
                                                </thead>

                                                {sub.matrix_ahp.map((d, i) => {
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
                                        </div>

                                        <h4>Matrix F-AHP</h4>
                                        <div className="table-responsive mb-3">
                                            <Table className="table-bordered text-center">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="3" ></th>
                                                        <th colSpan="3">{sub.matrix_ahp[0].name}</th>
                                                        <th colSpan="3">{sub.matrix_ahp[1].name}</th>
                                                        <th colSpan="3">{sub.matrix_ahp[2].name}</th>
                                                        {/* <th colSpan="3" >Sensor</th>
                                                        <th colSpan="3" >Resolusi</th>
                                                        <th colSpan="3" >Harga</th>
                                                        <th colSpan="3" >Fitur</th>
                                                        <th colSpan="3" >Iso</th> */}
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
                                                    </tr>
                                                </thead>

                                                {sub.matrix_fahp.map((d, i) => {
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

                                        <h4>Perhitungan Sintetis</h4>
                                        <div className="table-responsive mb-3">
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

                                                {sub.syntetic.map((d, i) => {
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
                                        </div>

                                        <h4>Penentuan Nilai Vector dan Nilai Defuzifikasi</h4>
                                        <div className="table-responsive mb-3">
                                            {
                                                sub.vector.map((d,i) => {
                                                    return (
                                                        <Fragment key={i}>
                                                            {
                                                                d.name !== 'total' && (
                                                                    <Table className="table-bordered text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>{d.name}</th>
                                                                                <th>Defuzifikasi</th>
                                                                            </tr>
                                                                        </thead>

                                                                        {
                                                                            d.bobot.vector && d.bobot.vector.map((v,iv) => {
                                                                                return (
                                                                                    <tbody key={iv}>
                                                                                        <tr>
                                                                                            <td>{v.name}</td>
                                                                                            <td>{v.value}</td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                )
                                                                            })
                                                                        }
                                                                        
                                                                        {
                                                                            d.bobot.min && (
                                                                                <tfoot>
                                                                                    <tr>
                                                                                        <td><b>min defuzifikasi</b></td>
                                                                                        <td>{d.bobot.min.value}</td>
                                                                                    </tr>
                                                                                </tfoot>
                                                                            )
                                                                        }
                                                                    </Table>
                                                                )
                                                            }
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </div>

                                        <h4>Normalisasi Vector</h4>
                                        <div className="table-responsive mb-3">
                                            <Table className="table-bordered text-center">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="3" ></th>
                                                        <th>{sub.matrix_ahp[0].name}</th>
                                                        <th>{sub.matrix_ahp[1].name}</th>
                                                        <th>{sub.matrix_ahp[2].name}</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td>w1</td>
                                                        {
                                                            sub.vector.map((d,i) => {
                                                                return (
                                                                    <Fragment key={i}>
                                                                        <td>
                                                                            {d.bobot.min ? d.bobot.min.value : d.bobot}
                                                                        </td>
                                                                    </Fragment>
                                                                )
                                                            })
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td>w2</td>
                                                        {
                                                            sub.normalisasi_vector.map((d,i) => {
                                                                return <td key={i}>{d.bobot}</td>
                                                            })
                                                        }
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}

export default HasilPerhitunganFuzzy