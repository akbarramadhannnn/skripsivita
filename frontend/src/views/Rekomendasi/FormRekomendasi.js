import React, { useState, Fragment, useEffect } from "react";
import { Col, Row, FormGroup, Input, Label, Table } from "reactstrap";
import { Accordion, Card, Button } from "react-bootstrap";
import { RekomendasiAlternatif } from "../../api";

const FormRekomendasi = ({ setShowFormCari, dataAlternatif }) => {
  const [disabledButton, setDisabledButton] = useState(true);
  const [idAlternatif, setIdAlternatif] = useState([]);
  const [showHasil, setShowHasil] = useState(false);
  const [matrixFAhp, setMatrixFAhp] = useState([]);
  const [matrixAhp, setMatrixAhp] = useState([]);
  const [sintetis, setSintetis] = useState([]);
  const [vector, setVector] = useState([]);
  const [normalisasiVector, setNormalisasiVector] = useState([]);
  const [subKriteria, setSubkriteria] = useState([]);
  const [bobot, setBobot] = useState([]);

  useEffect(() => {
    if (dataAlternatif.length <= 1 || idAlternatif.length <= 1) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [dataAlternatif, idAlternatif]);

  const changeALternatif = (e, id) => {
    const clickedAlternatif = idAlternatif.indexOf(id);
    const newStateCheckedAlternatif = [...idAlternatif];
    if (clickedAlternatif === -1) {
      newStateCheckedAlternatif.push(id);
    } else if (clickedAlternatif !== -1) {
      newStateCheckedAlternatif.splice(clickedAlternatif, 1);
    }
    setIdAlternatif(newStateCheckedAlternatif);
  };

  const submit = () => {
    const payload = {
      id: idAlternatif,
      idUser: window.localStorage.getItem("idUser"),
    };
    RekomendasiAlternatif(payload).then((response) => {
      const sortBobot = response.bobot.sort((a, b) => b.total - a.total);
      setBobot(sortBobot);
      setMatrixAhp(response.kriteria.matrix_ahp);
      setMatrixFAhp(response.kriteria.matrix_fahp);
      setSintetis(response.kriteria.syntetic);
      setVector(response.kriteria.vector);
      setNormalisasiVector(response.kriteria.normalisasi_vector);
      setSubkriteria(response.sub_kriteria);
      setShowHasil(true);
    });
  };

  return (
    <Fragment>
      <Col className="mb-4">
        {dataAlternatif &&
          dataAlternatif.map((data, i) => {
            return (
              <Fragment key={i}>
                <FormGroup check inline>
                  <Input
                    checked={idAlternatif.includes(data._id)}
                    className="form-check-input"
                    type="checkbox"
                    id={`fasilitas-${data._id}`}
                    onChange={(e) => changeALternatif(e, data._id)}
                  />
                  <Label className="form-check-label">{data.merk}</Label>
                </FormGroup>
              </Fragment>
            );
          })}
      </Col>
      <Row>
        <Col md="6" className="text-center">
          <Button variant="warning" onClick={() => setShowFormCari(true)}>
            Cari Kamera
          </Button>
        </Col>
        <Col md="6" className="text-center">
          <Button variant="primary" disabled={disabledButton} onClick={submit}>
            Rekomendasi
          </Button>
        </Col>
      </Row>

      {showHasil && (
        <div className="mt-4">
          <Accordion defaultActiveKey="0">
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
                          <th rowSpan="3"></th>
                          <th colSpan="3">Sensor</th>
                          <th colSpan="3">Resolusi</th>
                          <th colSpan="3">Harga</th>
                          <th colSpan="3">Fitur</th>
                          <th colSpan="3">Iso</th>
                          <th colSpan="3">Jumlah Baris</th>
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
                                      {b.map((c, i2) => {
                                        return <td key={i2}>{c}</td>;
                                      })}
                                    </Fragment>
                                  );
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
                          <th rowSpan="3"></th>
                          <th colSpan="3">Nilai Sintetis</th>
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
                    {vector.map((d, i) => {
                      return (
                        <Fragment key={i}>
                          {d.name !== "total" && (
                            <Table className="table-bordered text-center">
                              <thead>
                                <tr>
                                  <th>{d.name}</th>
                                  <th>Defuzifikasi</th>
                                </tr>
                              </thead>

                              {d.bobot.vector &&
                                d.bobot.vector.map((v, iv) => {
                                  return (
                                    <tbody key={iv}>
                                      <tr>
                                        <td>{v.name}</td>
                                        <td>{v.value}</td>
                                      </tr>
                                    </tbody>
                                  );
                                })}

                              {d.bobot.min && (
                                <tfoot>
                                  <tr>
                                    <td>
                                      <b>min defuzifikasi</b>
                                    </td>
                                    <td>{d.bobot.min.value}</td>
                                  </tr>
                                </tfoot>
                              )}
                            </Table>
                          )}
                        </Fragment>
                      );
                    })}
                  </div>

                  <h4>Normalisasi Vector</h4>
                  <div className="table-responsive mb-3">
                    <Table className="table-bordered text-center">
                      <thead>
                        <tr>
                          <th rowSpan="3"></th>
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
                          {vector.map((d, i) => {
                            return (
                              <Fragment key={i}>
                                <td>
                                  {d.bobot.min ? d.bobot.min.value : d.bobot}
                                </td>
                              </Fragment>
                            );
                          })}
                        </tr>
                        <tr>
                          <td>w2</td>
                          {normalisasiVector.map((d, i) => {
                            return <td key={i}>{d.bobot}</td>;
                          })}
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            {subKriteria.map((sub, iSub) => {
              return (
                <Card key={iSub}>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey={iSub + 1}
                    >
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
                              <th rowSpan="3"></th>
                              <th colSpan="3">{sub.matrix_ahp[0].name}</th>
                              <th colSpan="3">{sub.matrix_ahp[1].name}</th>
                              <th colSpan="3">{sub.matrix_ahp[2].name}</th>
                              {/* <th colSpan="3" >Sensor</th>
                                                                    <th colSpan="3" >Resolusi</th>
                                                                    <th colSpan="3" >Harga</th>
                                                                    <th colSpan="3" >Fitur</th>
                                                                    <th colSpan="3" >Iso</th> */}
                              <th colSpan="3">Jumlah Baris</th>
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
                                          {b.map((c, i2) => {
                                            return <td key={i2}>{c}</td>;
                                          })}
                                        </Fragment>
                                      );
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
                              <th rowSpan="3"></th>
                              <th colSpan="3">Nilai Sintetis</th>
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
                        {sub.vector.map((d, i) => {
                          return (
                            <Fragment key={i}>
                              {d.name !== "total" && (
                                <Table className="table-bordered text-center">
                                  <thead>
                                    <tr>
                                      <th>{d.name}</th>
                                      <th>Defuzifikasi</th>
                                    </tr>
                                  </thead>

                                  {d.bobot.vector &&
                                    d.bobot.vector.map((v, iv) => {
                                      return (
                                        <tbody key={iv}>
                                          <tr>
                                            <td>{v.name}</td>
                                            <td>{v.value}</td>
                                          </tr>
                                        </tbody>
                                      );
                                    })}

                                  {d.bobot.min && (
                                    <tfoot>
                                      <tr>
                                        <td>
                                          <b>min defuzifikasi</b>
                                        </td>
                                        <td>{d.bobot.min.value}</td>
                                      </tr>
                                    </tfoot>
                                  )}
                                </Table>
                              )}
                            </Fragment>
                          );
                        })}
                      </div>

                      <h4>Normalisasi Vector</h4>
                      <div className="table-responsive mb-3">
                        <Table className="table-bordered text-center">
                          <thead>
                            <tr>
                              <th rowSpan="3"></th>
                              <th>{sub.matrix_ahp[0].name}</th>
                              <th>{sub.matrix_ahp[1].name}</th>
                              <th>{sub.matrix_ahp[2].name}</th>
                              <th>Total</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>w1</td>
                              {sub.vector.map((d, i) => {
                                return (
                                  <Fragment key={i}>
                                    <td>
                                      {d.bobot.min
                                        ? d.bobot.min.value
                                        : d.bobot}
                                    </td>
                                  </Fragment>
                                );
                              })}
                            </tr>
                            <tr>
                              <td>w2</td>
                              {sub.normalisasi_vector.map((d, i) => {
                                return <td key={i}>{d.bobot}</td>;
                              })}
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })}
          </Accordion>
          {/* {props.location.pathname === "/perhitungan" && (
            
          )} */}

          <Card>
            <Row>
              {bobot.map((d, i) => {
                return (
                  <Col md={12} key={i}>
                    <Card.Body>
                      <div className="table-responsive mb-3">
                        <h4>
                          {d.nama} (Peringkat Ke - {i + 1})
                        </h4>
                        <Table className="table-bordered text-center">
                          <thead>
                            <tr>
                              <th>Perhitungan</th>
                              <th>Hasil</th>
                            </tr>
                          </thead>

                          {d.value.map((v, iv) => {
                            return (
                              <Fragment key={iv}>
                                <tbody>
                                  <tr>
                                    <td>{v.nama}</td>
                                    <td>{v.value}</td>
                                  </tr>
                                </tbody>
                              </Fragment>
                            );
                          })}

                          <tfoot>
                            <tr>
                              <td>
                                <b>Total</b>
                              </td>
                              <td>{d.total}</td>
                            </tr>
                          </tfoot>
                        </Table>
                      </div>
                    </Card.Body>
                  </Col>
                );
              })}
            </Row>

            <Col md="12">
              <h4>
                Jadi pilihan terbaik adalah kamera <b>{bobot[0].nama}</b> dengan
                nilai <b>{bobot[0].total}</b> dari <b>{bobot.length}</b>{" "}
                alternatif
              </h4>
            </Col>
          </Card>
        </div>
      )}
    </Fragment>
  );
};

export default FormRekomendasi;
